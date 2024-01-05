import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import clsx from 'clsx'

import { LANGUAGES } from '../../../utils/constant';
import styleUserRedux from './UserRedux.module.scss'
import * as actions from '../../../store/actions'

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app


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
            prevProps.roleRedux !== this.props.roleRedux
        ) {
            this.setState({
                genderArr: this.props.genderRedux,
                positionArr: this.props.positionRedux,
                roleArr: this.props.roleRedux
            });
        }
    }
    

    handleOnchangeImage = (e)=>{
        let data = e.target.files
        let file = data[0]
        if (file) {
            let objectUrl = URL.createObjectURL(file)
            this.setState({
                previewImageUrl: objectUrl
            })
        }
    }


    render() {
        const { previewImageUrl } = this.state;
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
                                        <span class="material-icons">file_upload</span>
                                    </label>
                                </div>
                            </div>
                            <div className='col-9'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <label className='pt-3'><FormattedMessage id="manage-user.email"/></label>
                                        <input className='form-control' type='email'/>
                                    </div>
                                    <div className='col-12'>
                                        <label className='pt-3'><FormattedMessage id="manage-user.password"/></label>
                                        <input className='form-control' type='password'/>
                                    </div>
                                    <div className='col-6'>
                                        <label className='pt-3'><FormattedMessage id="manage-user.firstName"/></label>
                                        <input className='form-control' type='text'/>
                                    </div>
                                    <div className='col-6'>
                                        <label className='pt-3'><FormattedMessage id="manage-user.lastName"/></label>
                                        <input className='form-control' type='text'/>
                                    </div>
                                    <div className='col-4'>
                                        <label className='pt-3'><FormattedMessage id="manage-user.mobile"/></label>
                                        <input className='form-control' type='text'/>
                                    </div>
                                    <div className='col-8'>
                                        <label className='pt-3'><FormattedMessage id="manage-user.address"/></label>
                                        <input className='form-control' type='text'/>
                                    </div>
                                    <div className='col-3'>
                                        <label className='pt-3'><FormattedMessage id="manage-user.gender"/></label>
                                        <select className="form-select"
                                            // value={selectedValue} 
                                        >
                                            {genders && genders.length > 0 && 
                                                genders.map((item, index)=>{
                                                    return(
                                                        <option key={index} >{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className='col-3'>
                                        <label className='pt-3'><FormattedMessage id="manage-user.position"/></label>
                                        <select className="form-select"
                                            // value={selectedValue} 
                                        >
                                            {positions && positions.length > 0 &&
                                                positions.map((item, index)=>{
                                                    return(
                                                        <option key={index}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className='col-3'>
                                        <label className='pt-3'><FormattedMessage id="manage-user.role"/></label>
                                        <select className="form-select"
                                            // value={selectedValue} 
                                        >
                                            {roles && roles.length > 0 &&
                                                roles.map((item, index)=>{
                                                    return(
                                                        <option key={index}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 d-flex flex-row-reverse'>
                                <button type='button' className='btn btn-primary btn-lg'><FormattedMessage id="manage-user.save"/></button>
                            </div>
                        </div>
                    </div>
                </div>
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
        isLoadingGender: state.admin.isLoadingGender
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
