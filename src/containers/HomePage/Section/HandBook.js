import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from 'react-slick';
import { FormattedMessage } from "react-intl";
import clsx from 'clsx';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Section.module.scss';
import styleHandBook from './HandBook.module.scss';

class HandBook extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){

    }

    render(){
        return(
            <div className={clsx(styleHandBook.section_handBook)}>
                <div className={clsx(styles.section_container)}>
                    <div className={clsx(styles.section_header)}>
                        <span className={clsx(styles.section_title)}><FormattedMessage id="handBook.handBook"/></span>
                        <button className={clsx(styles.btn)}><FormattedMessage id="common.see-more"/></button>
                    </div>
                    <Slider {...this.props.settings}>
                        <div className={clsx(styles.item)}>
                            <a href="#" className={clsx(styles.item_link)} >
                                <div className={clsx(styleHandBook.wrap_img)}>
                                    <img src="https://cdn.bookingcare.vn/fo/w640/2023/12/30/161130-giai-dap-ty-le-thanh-cong-ivf-hien-nay.png"/>
                                </div>
                                <div className={clsx(styles.wrap_title)}>
                                    <div className={clsx(styles.title, styleHandBook.title)}><FormattedMessage id="handBook.description1"/></div>
                                </div>
                            </a>
                        </div>
                        <div className={clsx(styles.item)}>
                            <a href="#" className={clsx(styles.item_link)} >
                                <div className={clsx(styleHandBook.wrap_img)}>
                                    <img src="https://cdn.bookingcare.vn/fo/w750/2023/12/26/105617-nha-khoa-ngan-phuong-review.jpg"/>
                                </div>
                                <div className={clsx(styles.wrap_title)}>
                                    <div className={clsx(styles.title, styleHandBook.title)}><FormattedMessage id="handBook.description2"/></div>
                                </div>
                            </a>
                        </div>
                        <div className={clsx(styles.item)}>
                           <a href="#" className={clsx(styles.item_link)} >
                                <div className={clsx(styleHandBook.wrap_img)}>
                                    <img src="https://cdn.bookingcare.vn/fo/w750/2023/12/18/120302-phuc-hoi-chuc-nang-liet-nua-nguoi.png"/>
                                </div>
                                <div className={clsx(styles.wrap_title)}>
                                    <div className={clsx(styles.title, styleHandBook.title)}><FormattedMessage id="handBook.description3"/></div>
                                </div>
                           </a>
                        </div>
                        <div className={clsx(styles.item)}>
                            <a href="#" className={clsx(styles.item_link)} >
                                <div className={clsx(styleHandBook.wrap_img)}>
                                    <img src="https://cdn.bookingcare.vn/fo/w750/2023/12/12/094234-pk-san-phu-khoa-ngoc-lan.png"/>
                                </div>
                                <div className={clsx(styles.wrap_title)}>
                                    <div className={clsx(styles.title, styleHandBook.title)}><FormattedMessage id="handBook.description4"/></div>
                                </div>
                            </a>
                        </div>
                        <div className={clsx(styles.item)}>
                            <a href="#" className={clsx(styles.item_link)} >
                                <div className={clsx(styleHandBook.wrap_img)}>
                                    <img src="https://cdn.bookingcare.vn/fo/w750/2019/07/31/085056logobenhvien108.jpg"/>
                                </div>
                                <div className={clsx(styles.wrap_title)}>
                                    <div className={clsx(styles.title, styleHandBook.title)}></div>
                                </div>
                            </a>
                        </div>
                        <div className={clsx(styles.item)}>
                            <a href="#" className={clsx(styles.item_link)} >
                                <div className={clsx(styleHandBook.wrap_img)}>
                                    <img src="https://cdn.bookingcare.vn/fo/w750/2023/05/16/153236-logo-hung-viet.jpg"/>
                                </div>
                                <div className={clsx(styles.wrap_title)}>
                                    <div className={clsx(styles.title, styleHandBook.title)}></div>
                                </div>
                            </a>
                        </div>
                        <div className={clsx(styles.item)}>
                            <a href="#" className={clsx(styles.item_link)} >
                                <div className={clsx(styleHandBook.wrap_img)}>
                                    <img src="https://cdn.bookingcare.vn/fo/w750/2022/08/29/104922-logo-med-tai-ha-noi--01.png"/>
                                </div>
                                <div className={clsx(styles.wrap_title)}>
                                    <div className={clsx(styles.title, styleHandBook.title)}></div>
                                </div>
                            </a>
                        </div>
                    </Slider>
                </div>
            </div>  
        )
    }
}

const mapStateToProps = state =>{
    return{
        isLoggedIn: state.user.isLoggedIn
    }
}

const mapDispatchToProps = dispatch =>{
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HandBook)