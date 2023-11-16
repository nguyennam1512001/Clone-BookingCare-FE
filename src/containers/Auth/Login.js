import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss'
import {handleLoginAPI} from '../../services/userSevice';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state ={
            userName: '',
            password: '',
            isShowPassword: false,
            errMessage: ''
        }
        this.btnLogin = React.createRef();
    }
    handleOnchangeInput =(e, fileName) =>{
        this.setState({
            [fileName]: e.target.value
        })
    }
    
    handleLogin = async()=>{
        this.setState({
            errMessage: ''
        })
        try {
            let data = await handleLoginAPI(this.state.userName, this.state.password)
            if (data && data.errCode !== 0) {
                if (data.message) {
                    this.setState({
                        errMessage: data.message
                    })
                }
            }
            if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user)
            }
        } catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errMessage: error.response.data.message
                    })
                }
            }
        }
    }
    handleShowHidePass = ()=>{
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }
   
    render() {
        
        return (
            <div className="login-background">
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-login'>Login</div>
                        <div className='col-12 form-group login-input'>
                            <label>Username</label>
                            <input type='text' className=' form-control ' placeholder='Enter your username' 
                                value={this.state.userName}
                                onChange={(e)=>this.handleOnchangeInput(e, 'userName')}
                            />
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>Password</label>
                            <div className='password-wrap'>
                                <input type={this.state.isShowPassword ? 'text': 'password'} className='form-control ' placeholder='Enter your password'
                                    value= {this.state.password}
                                    onChange={(e)=>this.handleOnchangeInput(e, 'password')}
                                />
                                <span onClick={()=>this.handleShowHidePass()}>
                                    <i className="fas fa-eye"></i>
                                    {this.state.isShowPassword ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i>}
                                </span>
                            </div>

                        </div>
                        <div className='col-12' style={{color:'red'}}>
                            {this.state.errMessage}
                        </div>
                        <div className='col-12'>
                            <button type='submit' className='btn-login' onClick={(e)=>this.handleLogin(e)}>Login</button>
                        </div>
                        <div className='col-12'>
                            <span className='forgot-password'>Forgot your password</span>
                        </div>
                        <div className='col-12 text-center mt-3'>
                            <span className='text-or-login'>Or sing in with:</span>
                        </div>
                        <div className='col-12 social-login'>
                            <i className="fab fa-google google"></i>
                            <i className="fab fa-facebook-f facebook"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        lang: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
