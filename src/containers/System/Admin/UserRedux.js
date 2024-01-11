import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import clsx from 'clsx'

import { LANGUAGES } from '../../../utils/constant';
import styleUserRedux from './UserRedux.module.scss'
import * as actions from '../../../store/actions'
import TableManageUser from './TableManageUser';
import { CommonUtils } from '../../../utils';




class UserRedux extends Component {

    constructor(props){
        super(props)
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
            previewImageUrl: '',
            photoIndex: 0,
            isOpen: false,

            id:'',
            email:"",
            password:'',
            firstName:'',
            lastName:'',
            phoneNumber:'',
            address:'',
            gender:'',
            positionId:'',
            roleId:'',
            avatar:'',

            errMessages: {
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                phoneNumber: '',
                address: '',
            },
            isEdit: false,
        }
    }

    async componentDidMount() {
        this.props.getGenderStart()
        this.props.getPositionStart()
        this.props.getRoleStart()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (
            prevProps.genderRedux !== this.props.genderRedux ||
            prevProps.positionRedux !== this.props.positionRedux ||
            prevProps.roleRedux !== this.props.roleRedux ||
            prevProps.isEdit !== this.props.isEdit || 
            prevProps.listUser !== this.props.listUser
        ) {
            let genderRedux= this.props.genderRedux
            let positionRedux =this.props.positionRedux
            let roleRedux = this.props.roleRedux
            this.setState({
                genderArr: genderRedux,
                positionArr: positionRedux,
                roleArr: roleRedux,

                gender: genderRedux && genderRedux.length > 0 ? genderRedux[0].key : '',
                positionId: positionRedux && positionRedux.length > 0 ? positionRedux[0].key : '',
                roleId: roleRedux && roleRedux.length > 0 ? roleRedux[0].key : '',
            });
        }

        if (this.props.user && this.props.user !== prevProps.user) {
            let { id, email, firstName, lastName, phoneNumber, address, gender, positionId, roleId, image
            } = this.props.user;
            let imageBase64 = ''
            if(image){
                imageBase64 = new Buffer.from(image, 'base64').toString('latin1') // convert file to base64
                console.log(imageBase64);
            }

            this.setState({
              id,
              email,
              firstName,
              lastName,
              phoneNumber,
              address,
              gender,
              positionId,
              roleId,
              previewImageUrl: imageBase64,
            });
        }
        if(prevProps.isEdit !== this.props.isEdit){
            this.setState({ isEdit: this.props.isEdit })
        }
        if(prevProps.listUser !== this.props.listUser){
            this.resetForm()
        }
        
    }
    
    handleOnchangeImage = async (e)=>{
        let data = e.target.files
        let file = data[0]
        if (file) {
            let base64 = await CommonUtils.getBase64(file) // convert file to base64
            let objectUrl = URL.createObjectURL(file)
            this.setState({
                previewImageUrl: objectUrl,
                avatar: base64
            })
        }
    }

    onchangeInput=( e , type)=>{
        let copystate = {...this.state}

        copystate[type] = e.target.value
        this.setState({
            ...copystate
        })
    }

    checkValidateInput =()=>{
        let isvalid = true
        let arrCheck = ["email", this.state.isEdit ? null : 'password','firstName' ,'lastName', 'phoneNumber', 'address']
        let errMessages = {...this.state.errMessages}
        for (let i = 0; i < arrCheck.length; i++) {
            if (arrCheck[i] !== null && !this.state[arrCheck[i]]) {
                isvalid = false
                errMessages[arrCheck[i]] = `This ${arrCheck[i]} field is required`;
            } else{
                errMessages[arrCheck[i]] = '';
            }   
        }
        this.setState({ errMessages });
        return isvalid
    }

    handleOnkey = (key) => {
        let errMessages = {...this.state.errMessages}
        errMessages[key] = ''
        this.setState({
            errMessages
        })
    };
    resetErrMessage= () => {
        this.setState({
            errMessages: {
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                phoneNumber: '',
                address: '',
            },
        })
    };
    
    
    handleSaveUser= async ()=>{
        let isvalid = this.checkValidateInput()
        if(isvalid === false) return
        await this.props.createNewUser({
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNumber: this.state.phoneNumber,
            address: this.state.address,
            gender: this.state.gender,
            positionId: this.state.positionId,
            roleId: this.state.roleId,
            avatar: this.state.avatar
        })
    }
    handleUpdateUser = async ()=>{
        let isvalid = this.checkValidateInput()
        if(isvalid === false) return
        await this.props.saveUpdateUser({
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNumber: this.state.phoneNumber,
            address: this.state.address,
            gender: this.state.gender,
            positionId: this.state.positionId,
            roleId: this.state.roleId,
            avatar: this.state.avatar,
        })
    }

    resetForm =()=>{
        this.setState({
            id:'',
            email:"",
            password:'',
            firstName:'',
            lastName:'',
            phoneNumber:'',
            address:'',
            avatar:'',
            previewImageUrl:''
        })
    }




    render() {
        let { previewImageUrl, email, password ,firstName ,lastName, 
            phoneNumber, address, gender, positionId, roleId, isEdit
        } = this.state;
        let genders = this.state.genderArr
        let positions = this.state.positionArr
        let roles = this.state.roleArr
        let language = this.props.language
        let isLoadingGender = this.props.isLoadingGender

        return (
            <div className={clsx(styleUserRedux.user_redux_container)}>
                <div className='title'>Manage products redux</div>
                <div className={clsx(styleUserRedux.user_redux_body)}>
                    {isLoadingGender && <div className='loading_bar'></div>}
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 fs-4 py-3'><FormattedMessage id="manage-user.add"/></div>
                            <div className='col-3'>
                                <label className='pt-3'><FormattedMessage id="manage-user.image"/></label>
                                <div className={clsx(styleUserRedux.wrap_upload)}>
                                    <div 
                                        onClick={() => {
                                            if(previewImageUrl){
                                                this.setState({ isOpen: true })
                                            }
                                        }}
                                        className={clsx(styleUserRedux.preview_img, {[styleUserRedux.pointer]:previewImageUrl})} 
                                        style={{
                                            backgroundImage:`url(${this.state.previewImageUrl})`,
                                        }}>
                                    </div>
                                    {this.state.isOpen && (
                                        <Lightbox
                                            mainSrc={this.state.previewImageUrl}
                                            onCloseRequest={() => this.setState({ isOpen: false })}
                                        />
                                    )}
                                    <input id='previewImg' type='file' hidden onChange={(e)=> this.handleOnchangeImage(e)}/>
                                    <label className={clsx(styleUserRedux.label_upload)} htmlFor='previewImg'><FormattedMessage id="manage-user.upload-file"/>
                                        <span className="material-icons">file_upload</span>
                                    </label>
                                </div>
                            </div>
                            <div className='col-9'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <label className='pt-3'><FormattedMessage id="manage-user.email"/></label>
                                        <input 
                                            disabled={isEdit ? true : false}
                                            onKeyDown={() => this.handleOnkey('email')}
                                            value={email} 
                                            onChange={(e)=> this.onchangeInput(e, "email")} 
                                            className='form-control' type='email'
                                        />
                                        <span className='text-danger'>{this.state.errMessages.email}</span>
                                    </div>
                                    {!isEdit &&
                                        <div className='col-12'>
                                            <label className='pt-3'><FormattedMessage id="manage-user.password"/></label>
                                            <input 
                                                onKeyDown={() => this.handleOnkey('password')}
                                                value={password} 
                                                onChange={(e)=> this.onchangeInput(e, "password")} 
                                                className='form-control' type='password'/>
                                            <span className='text-danger'>{this.state.errMessages.password}</span>
                                        </div>
                                    }
                                    <div className='col-6'>
                                        <label className='pt-3'><FormattedMessage id="manage-user.firstName"/></label>
                                        <input 
                                            onKeyDown={() => this.handleOnkey('firstName')}
                                            value={firstName} 
                                            onChange={(e)=> this.onchangeInput(e, "firstName")} 
                                            className='form-control' type='text'/>
                                        <span className='text-danger'>{this.state.errMessages.firstName}</span>
                                    </div>
                                    <div className='col-6'>
                                        <label className='pt-3'><FormattedMessage id="manage-user.lastName"/></label>
                                        <input 
                                            onKeyDown={() => this.handleOnkey('lastName')}
                                            value={lastName} 
                                            onChange={(e)=> this.onchangeInput(e, "lastName")} 
                                            className='form-control' type='text'/>
                                        <span className='text-danger'>{this.state.errMessages.lastName}</span>
                                    </div>
                                    <div className='col-4'>
                                        <label className='pt-3'><FormattedMessage id="manage-user.mobile"/></label>
                                        <input 
                                            onKeyDown={() => this.handleOnkey('phoneNumber')}
                                            value={phoneNumber} 
                                            onChange={(e)=> this.onchangeInput(e, "phoneNumber")} 
                                            className='form-control' type='text'/>
                                        <span className='text-danger'>{this.state.errMessages.phoneNumber}</span>
                                    </div>
                                    <div className='col-8'>
                                        <label className='pt-3'><FormattedMessage id="manage-user.address"/></label>
                                        <input 
                                            onKeyDown={() => this.handleOnkey('address')}
                                            value={address} 
                                            onChange={(e)=> this.onchangeInput(e, "address")} 
                                            className='form-control' type='text'/>
                                        <span className='text-danger'>{this.state.errMessages.address}</span>
                                    </div>
                                    <div className='col-3'>
                                        <label className='pt-3'><FormattedMessage id="manage-user.gender"/></label>
                                        <select className="form-select"
                                            onChange={(e)=> this.onchangeInput(e, "gender")}
                                            value={gender}
                                        >
                                            {genders && genders.length > 0 && 
                                                genders.map((item, index)=>{
                                                    return(
                                                        <option key={index} value={item.key} >{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className='col-3'>
                                        <label className='pt-3'><FormattedMessage id="manage-user.position"/></label>
                                        <select className="form-select"
                                            onChange={(e)=> this.onchangeInput(e, "positionId")}
                                            value={positionId}
                                        >
                                            {positions && positions.length > 0 &&
                                                positions.map((item, index)=>{
                                                    return(
                                                        <option key={index} value={item.key} >{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className='col-3'>
                                        <label className='pt-3'><FormattedMessage id="manage-user.role"/></label>
                                        <select className="form-select"
                                            onChange={(e)=> this.onchangeInput(e, "roleId")}
                                            value={roleId}
                                        >
                                            {roles && roles.length > 0 &&
                                                roles.map((item, index)=>{
                                                    return(
                                                        <option key={index} value={item.key} >{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                                <span className='text-danger'>{this.props.userToastMessageErr}</span>
                            </div>
                            <div className='col-12 d-flex flex-row-reverse'>
                                <button 
                                    onClick={()=> isEdit ? this.handleUpdateUser() : this.handleSaveUser()}
                                    type='button' 
                                    className={`btn ${isEdit ? 'btn-warning' : 'btn-primary'} btn-lg`}
                                >
                                    { isEdit ? <FormattedMessage id="manage-user.save-changes"/> : <FormattedMessage id="manage-user.save"/>}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <TableManageUser resetErrMessage={this.resetErrMessage}/>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders,
        positionRedux: state.admin.positions,
        roleRedux: state.admin.roles,
        isLoadingGender: state.admin.isLoadingGender,
        createUserSuccess: state.admin.createUserSuccess,
        createUserFail: state.admin.createUserFail,
        userToastMessage: state.admin.userToastMessage,
        userToastMessageErr: state.admin.userToastMessageErr,
        user: state.admin.user,
        isEdit: state.admin.isEdit,
        listUser: state.admin.listUser,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
        createNewUser: (data) => dispatch(actions.createNewUser(data)),
        saveUpdateUser: (data) => dispatch(actions.updateUserStart(data)),
        // changeIsEdit: (isEdit) => dispatch(actions.isEdit(isEdit))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
