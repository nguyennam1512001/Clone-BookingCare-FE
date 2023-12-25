import React, { Component } from 'react';
import { connect } from 'react-redux';

import './HomeHeader.scss'
import Logo from '../../assets/images/logo';
import Icon from '@mdi/react';
import { mdiTooth } from '@mdi/js';
import { FormattedMessage } from 'react-intl';   // giúp chuyển đổi qua lại giữa các ngôn ngữ

class HomeHeader extends Component {
    constructor(props){
        super(props)
        this.state ={

        }
    }
    componentDidMount(){

    }

    render() {
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
                            <div className='language-vi'>VN</div>
                            <div className='language-en'>EN</div>
                        </div>
                    </div>
                </div>
                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='banner-title'> <FormattedMessage id="banner.title"/></div>
                        <div className='sub-title'> <FormattedMessage id="banner.sub-title"/></div>
                        <div className='search form-group'>
                            <span>
                                <i className='material-icons'>search</i>
                            </span>
                            <input className='input-search form-control' type='text' placeholder='Seach'/>
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
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
