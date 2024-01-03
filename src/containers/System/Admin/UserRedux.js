import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import clsx from 'clsx'

import { getAllCodeSevice } from '../../../services/userSevice';
import { LANGUAGES } from '../../../utils/constant';
import styleUserRedux from './UserRedux.module.scss'
class UserRedux extends Component {

    constructor(props){
        super(props)
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: []
        }
    }

    async componentDidMount() {
        try {
            let res = await getAllCodeSevice('gender')
            if(res && res.errCode === 0){
                this.setState({
                    genderArr: res.data
                })
            }
        } catch (e) {
            console.log(e);
        }

        try {
            let res = await getAllCodeSevice('position')
            if(res && res.errCode === 0 ){
                this.setState({
                    positionArr: res.data
                })
            }
        } catch (e) {
            console.log(e);
        }

        try {
            let res =  await getAllCodeSevice('role')
            if(res && res.errCode === 0){
                this.setState({
                    roleArr: res.data
                })
            }
        } catch (e) {
            console.log(e);
        }
    }


    render() {
        let genders = this.state.genderArr
        let positions = this.state.positionArr
        let roles = this.state.roleArr
        let language = this.props.language
        return (
            <div className={clsx(styleUserRedux.user_redux_container)}>
                <div className='title'>Manage products redux</div>
                <div className={clsx(styleUserRedux.user_redux_body)}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'><FormattedMessage id="manage-user.add"/></div>
                            <div className='col-12'>
                                <label><FormattedMessage id="manage-user.email"/></label>
                                <input className='form-control' type='email' placeholder='Email'/>
                            </div>
                            <div className='col-12'>
                                <label><FormattedMessage id="manage-user.password"/></label>
                                <input className='form-control' type='password' placeholder='Password'/>
                            </div>
                            <div className='col-6'>
                                <label><FormattedMessage id="manage-user.firstName"/></label>
                                <input className='form-control' type='text' placeholder='First name'/>
                            </div>
                            <div className='col-6'>
                                <label><FormattedMessage id="manage-user.lastName"/></label>
                                <input className='form-control' type='text' placeholder='Last name'/>
                            </div>
                            <div className='col-4'>
                                <label><FormattedMessage id="manage-user.mobile"/></label>
                                <input className='form-control' type='text' placeholder='Phone number'/>
                            </div>
                            <div className='col-8'>
                                <label><FormattedMessage id="manage-user.address"/></label>
                                <input className='form-control' type='text' placeholder='Address'/>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.gender"/></label>
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
                                <label><FormattedMessage id="manage-user.position"/></label>
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
                                <label><FormattedMessage id="manage-user.role"/></label>
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
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.image"/></label>
                                <input type='file' className='form-control'/>
                            </div>
                            <div className='d-grid col-3'>
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
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
