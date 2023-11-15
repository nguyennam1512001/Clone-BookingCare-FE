import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import './Login.scss'
import * as actions from "../../store/actions";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state ={
            userName: '',
            password: '',
            isShowPassword: false
        }
        this.btnLogin = React.createRef();
    }
    handleOnchangeInput =(e, fileName) =>{
        this.setState({
            [fileName]: e.target.value
        })
    }
    
    handleLogin = ()=>{
        console.log(this.state.userName);
        console.log(this.state.password);
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
                                    <i class="fas fa-eye"></i>
                                    {this.state.isShowPassword ? <i class="fas fa-eye"></i> : <i class="fas fa-eye-slash"></i>}
                                </span>
                            </div>

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
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
