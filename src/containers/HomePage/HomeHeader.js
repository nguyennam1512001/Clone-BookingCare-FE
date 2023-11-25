import React, { Component } from 'react';
import { connect } from 'react-redux';

import './HomeHeader.scss'
import Logo from '../../assets/images/logo';


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
