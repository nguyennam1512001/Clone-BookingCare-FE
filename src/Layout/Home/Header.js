import React, { Component } from 'react';
import { connect } from 'react-redux';


import { FormattedMessage } from 'react-intl';   // giúp chuyển đổi qua lại giữa các ngôn ngữ
import './Header.scss'

import Logo from '../../assets/images/logo';
import { LANGUAGES } from '../../utils/constant';
import { changeLanguageApp, incrementNumber } from '../../store/actions';
class Header extends Component {
    constructor(props){
        super(props)
        this.state ={

        }
    }
    componentDidMount(){

    }

    changeLanguage = (language) =>{
       this.props.changeLanguageAppRedux(language)
    }

    handleIncrement = ()=>{
        this.props.incrementNumberRedux()
    }
    render() {
        let language = this.props.language
        let number = this.props.number
        return (
            <div>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <div className='menu-icon'>
                                <i className="material-icons">menu</i>
                            </div>
                            <div className='logo'>
                                <Logo/>
                            </div>
                        </div>
                        <div className='center-content'>
                            <div className='option'>
                                <p className='title'><FormattedMessage id="home-header.speciality"/></p>
                                <p className='description'> <FormattedMessage id="home-header.searchdoctor"/></p>
                            </div>
                            <div className='option'>
                                <p className='title'> <FormattedMessage id="home-header.health-facility"/></p>
                                <p className='description'><FormattedMessage id="home-header.choose-hospital"/></p>
                            </div>
                            <div className='option'>
                                <p className='title'> <FormattedMessage id="home-header.doctor"/></p>
                                <p className='description'> <FormattedMessage id="home-header.choose-doctor"/></p>
                            </div>
                            <div className='option'>
                                <p className='title'> <FormattedMessage id="home-header.examination-package"/></p>
                                <p className='description'> <FormattedMessage id="home-header.general-check"/></p>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div  className='support'>
                                <a href='#'>
                                    <i className='material-icons'>help</i>
                                </a>
                                <span> <FormattedMessage id="home-header.help"/></span>
                            </div>
                            <div className={language === LANGUAGES.VI ? 'language-vi active': 'language-vi'}><span onClick={()=> this.changeLanguage(LANGUAGES.VI)}>VN</span></div>
                            <div className={language === LANGUAGES.EN ? 'language-en active': 'language-en'}><span onClick={()=> this.changeLanguage(LANGUAGES.EN)}>EN</span></div>
                            <p onClick={this.handleIncrement}>+++++</p>
                            <p>{number}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        number: state.app.number
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
        incrementNumberRedux: ()=> dispatch(incrementNumber())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
