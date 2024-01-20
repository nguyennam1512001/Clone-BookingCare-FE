import React, { Component } from 'react';
import { connect } from 'react-redux';

import Icon from '@mdi/react';
import { mdiTooth } from '@mdi/js';
import { FormattedMessage } from 'react-intl';   // giúp chuyển đổi qua lại giữa các ngôn ngữ
import './HomeBanner.scss'


import { changeLanguageApp, incrementNumber } from '../../store/actions';
class HomeBanner extends Component {
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
               
                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='banner-title'> <FormattedMessage id="banner.title"/></div>
                        <div className='sub-title'> <FormattedMessage id="banner.sub-title"/></div>
                        <div className='search form-group'>
                            <span>
                                <i className='material-icons'>search</i>
                            </span>
                            <input className='input-search form-control' type='text' placeholder='Search'/>
                        </div>
                    </div>
                    <div className='content-down'>
                        <div className='options'>
                            <div className='option-child'>
                                <div className='icon'>
                                    <i className='far fa-hospital'></i>
                                </div>
                                <div className='text'><FormattedMessage id="banner.child1"/></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon'>
                                    <i className='material-icons'>phone_android</i>
                                </div>
                                <div className='text'><FormattedMessage id="banner.child2"/></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon'>
                                    <i className='material-icons'>airline_seat_flat</i>
                                </div>
                                <div className='text'><FormattedMessage id="banner.child3"/></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon'>
                                    <i className='material-icons'>biotech</i>
                                </div>
                                <div className='text'> <FormattedMessage id="banner.child4"/></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon'>
                                    <i className='material-icons'>psychology</i>
                                </div>
                                <div className='text'> <FormattedMessage id="banner.child5"/></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon'>
                                    {/* <i className='material-icons'>phone_android</i> */}
                                    <Icon path={mdiTooth} size={1} />
                                </div>
                                <div className='text'> <FormattedMessage id="banner.child6"/></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='test'></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeBanner);
