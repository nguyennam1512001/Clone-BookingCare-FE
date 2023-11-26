import React, { Component } from 'react';
import { connect } from 'react-redux';

import './HomeHeader.scss'
import Logo from '../../assets/images/logo';
import Icon from '@mdi/react';
import { mdiTooth } from '@mdi/js';

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
                                <p className='title'>Chuyên khoa</p>
                                <p className='description'>Tìm bác sĩ theo chuyên khoa</p>
                            </div>
                            <div className='option'>
                                <p className='title'>Cơ sở y tế</p>
                                <p className='description'>Chọn bênh viện phòng khám</p>
                            </div>
                            <div className='option'>
                                <p className='title'>Bác sĩ</p>
                                <p className='description'>chọn bác sĩ giỏi</p>
                            </div>
                            <div className='option'>
                                <p className='title'>Gói khám</p>
                                <p className='description'>Khám sức khoẻ tổng quát</p>
                            </div>
                        </div>
                        <div className='right-content'>
                            <a href='#'>
                                <i className='material-icons'>help</i>
                            </a>
                            <span>Hỗ trợ</span>
                        </div>
                    </div>
                </div>
                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='banner-title'>NỀN TẢNG Y TẾ</div>
                        <div className='sub-title'>CHĂM SÓC SỨC KHOẺ TOÀN DIỆN</div>
                        <div className='search form-group'>
                            <span>
                                <i className='material-icons'>search</i>
                            </span>
                            <input className='input-search form-control' type='text' placeholder='Tìm gói khám'/>
                        </div>
                    </div>
                    <div className='content-down'>
                        <div className='options'>
                            <div className='option-child'>
                                <div className='icon'>
                                    <i className='far fa-hospital'></i>
                                </div>
                                <div className='text'>Khám chuyên khoa</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon'>
                                    <i className='material-icons'>phone_android</i>
                                </div>
                                <div className='text'>Khám từ xa</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon'>
                                    <i className='material-icons'>airline_seat_flat</i>
                                </div>
                                <div className='text'>Khám tổng quát</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon'>
                                    <i className='material-icons'>biotech</i>
                                </div>
                                <div className='text'>Xét nghiệm y học</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon'>
                                    <i className='material-icons'>psychology</i>
                                </div>
                                <div className='text'>Sức khoẻ tinh thần</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon'>
                                    {/* <i className='material-icons'>phone_android</i> */}
                                    <Icon path={mdiTooth} size={1} />
                                </div>
                                <div className='text'>Khám nha khoa</div>
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
