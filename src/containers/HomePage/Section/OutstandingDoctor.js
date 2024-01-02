import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Slider from 'react-slick'
import clsx from 'clsx'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Section.module.scss'
import styleOutstandingDoctor from './OutstandingDoctor.module.scss'

class OutstandingDoctor extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){

    }

    render(){
        
        return(
            <div className={clsx(styleOutstandingDoctor.section_outstanding_doctor)}>
                <div className={clsx(styles.section_container)}>
                    <div className={clsx(styles.section_header)}>
                        <span className={clsx(styles.section_title)}><FormattedMessage id="outstandingDoctor.title"/></span>
                        <button className={clsx(styles.btn)}><FormattedMessage id="common.see-more"/></button>
                    </div>
                    <Slider {...this.props.settings}>
                        <div className={clsx(styleOutstandingDoctor.item)}>
                            <a href="#" className={clsx(styleOutstandingDoctor.item_link)} >
                                <div className={clsx(styleOutstandingDoctor.wrap_img)}>
                                    <img src="https://cdn.bookingcare.vn/fo/w750/2020/03/17/114430-bshung.jpg"/>
                                </div>
                                <div className={clsx(styleOutstandingDoctor.wrap_title)}>
                                    <div className={clsx(styleOutstandingDoctor.title)}><FormattedMessage id="outstandingDoctor.doctor1"/></div>
                                    <div className={clsx(styleOutstandingDoctor.sup_title)}><FormattedMessage id="outstandingDoctor.supDoctor1"/></div>
                                </div>
                            </a>
                        </div>
                        <div className={clsx(styleOutstandingDoctor.item)}>
                            <a href="#" className={clsx(styleOutstandingDoctor.item_link)} >
                                <div className={clsx(styleOutstandingDoctor.wrap_img)}>
                                    <img src="https://cdn.bookingcare.vn/fo/w750/2021/01/18/105401-bsckii-tran-minh-khuyen.jpg"/>
                                </div>
                                <div className={clsx(styleOutstandingDoctor.wrap_title)}>
                                    <div className={clsx(styleOutstandingDoctor.title)}><FormattedMessage id="outstandingDoctor.doctor2"/></div>
                                    <div className={clsx(styleOutstandingDoctor.sup_title)}><FormattedMessage id="outstandingDoctor.supDoctor2"/></div>
                                </div>
                            </a>
                        </div>
                        <div className={clsx(styleOutstandingDoctor.item)}>
                           <a href="#" className={clsx(styleOutstandingDoctor.item_link)} >
                                <div className={clsx(styleOutstandingDoctor.wrap_img)}>
                                    <img src="https://cdn.bookingcare.vn/fo/w750/2022/06/14/103841-bs-tuan.png"/>
                                </div>
                                <div className={clsx(styleOutstandingDoctor.wrap_title)}>
                                    <div className={clsx(styleOutstandingDoctor.title)}><FormattedMessage id="outstandingDoctor.doctor3"/></div>
                                    <div className={clsx(styleOutstandingDoctor.sup_title)}><FormattedMessage id="outstandingDoctor.supDoctor3"/></div>
                                </div>
                           </a>
                        </div>
                        <div className={clsx(styleOutstandingDoctor.item)}>
                            <a href="#" className={clsx(styleOutstandingDoctor.item_link)} >
                                <div className={clsx(styleOutstandingDoctor.wrap_img)}>
                                    <img src="https://cdn.bookingcare.vn/fo/w750/2022/06/14/114032-bs-phu.jpg"/>
                                </div>
                                <div className={clsx(styleOutstandingDoctor.wrap_title)}>
                                    <div className={clsx(styleOutstandingDoctor.title)}><FormattedMessage id="outstandingDoctor.doctor4"/></div>
                                    <div className={clsx(styleOutstandingDoctor.sup_title)}><FormattedMessage id="outstandingDoctor.supDoctor4"/></div>
                                </div>
                            </a>
                        </div>
                        <div className={clsx(styleOutstandingDoctor.item)}>
                            <a href="#" className={clsx(styleOutstandingDoctor.item_link)} >
                                <div className={clsx(styleOutstandingDoctor.wrap_img)}>
                                    <img src="https://cdn.bookingcare.vn/fo/w750/2022/12/14/103318-ban-sao-cua-bs-lam-thuy-nga.jpg"/>
                                </div>
                                <div className={clsx(styleOutstandingDoctor.wrap_title)}>
                                    <div className={clsx(styleOutstandingDoctor.title)}><FormattedMessage id="outstandingDoctor.doctor5"/></div>
                                    <div className={clsx(styleOutstandingDoctor.sup_title)}><FormattedMessage id="outstandingDoctor.supDoctor5"/></div>
                                </div>
                            </a>
                        </div>
                        <div className={clsx(styleOutstandingDoctor.item)}>
                            <a href="#" className={clsx(styleOutstandingDoctor.item_link)} >
                                <div className={clsx(styleOutstandingDoctor.wrap_img)}>
                                    <img src="https://cdn.bookingcare.vn/fo/w750/2019/11/14/103848anh-dai-dien-bs.jpg"/>
                                </div>
                                <div className={clsx(styleOutstandingDoctor.wrap_title)}>
                                    <div className={clsx(styleOutstandingDoctor.title)}><FormattedMessage id="outstandingDoctor.doctor6"/></div>
                                    <div className={clsx(styleOutstandingDoctor.sup_title)}><FormattedMessage id="outstandingDoctor.supDoctor6"/></div>
                                </div>
                            </a>
                        </div>
                        <div className={clsx(styleOutstandingDoctor.item)}>
                            <a href="#" className={clsx(styleOutstandingDoctor.item_link)} >
                                <div className={clsx(styleOutstandingDoctor.wrap_img)}>
                                    <img src="https://cdn.bookingcare.vn/fo/w750/2020/01/03/090559-pgs-nguyen-thi-hoai-an.jpg"/>
                                </div>
                                <div className={clsx(styleOutstandingDoctor.wrap_title)}>
                                    <div className={clsx(styleOutstandingDoctor.title)}><FormattedMessage id="outstandingDoctor.doctor7"/></div>
                                    <div className={clsx(styleOutstandingDoctor.sup_title)}><FormattedMessage id="outstandingDoctor.supDoctor7"/></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor)