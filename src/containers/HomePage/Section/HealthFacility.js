import React,{ Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import { FormattedMessage } from "react-intl";
import clsx from 'clsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './Section.module.scss'
import styleHealthFacility from './HealthFacility.module.scss'



class HealthFacility extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    componentDidMount(){

    }

    render(){
        return(
            <div className={clsx(styleHealthFacility.section_healthFacility)}>
                <div className={clsx(styles.section_container)}>
                    <div className={clsx(styles.section_header)}>
                        <span className={clsx(styles.section_title)}><FormattedMessage id="healthFacility.healthFacility"/></span>
                        <button className={clsx(styles.btn)}><FormattedMessage id="common.see-more"/></button>
                    </div>
                    <Slider {...this.props.settings}>
                        <div className={clsx(styles.item)}>
                            <a href="#" className={clsx(styles.item_link)} >
                                <div className={clsx(styleHealthFacility.wrap_img)}>
                                    <img src="https://cdn.bookingcare.vn/fo/w750/2018/06/18/083122lo-go-viet-duc.jpg"/>
                                </div>
                                <div className={clsx(styles.wrap_title)}>
                                    <div className={clsx(styles.title)}><FormattedMessage id="healthFacility.viet-duc"/></div>
                                </div>
                            </a>
                        </div>
                        <div className={clsx(styles.item)}>
                            <a href="#" className={clsx(styles.item_link)} >
                                <div className={clsx(styleHealthFacility.wrap_img)}>
                                    <img src="https://cdn.bookingcare.vn/fo/w750/2019/03/11/152704logo-bvcr-moi.jpg"/>
                                </div>
                                <div className={clsx(styles.wrap_title)}>
                                    <div className={clsx(styles.title)}><FormattedMessage id="healthFacility.cho-ray"/></div>
                                </div>
                            </a>
                        </div>
                        <div className={clsx(styles.item)}>
                           <a href="#" className={clsx(styles.item_link)} >
                                <div className={clsx(styleHealthFacility.wrap_img)}>
                                    <img src="https://cdn.bookingcare.vn/fo/w750/2023/11/30/135547-logo-dc.png"/>
                                </div>
                                <div className={clsx(styles.wrap_title)}>
                                    <div className={clsx(styles.title)}><FormattedMessage id="healthFacility.doctor-check"/></div>
                                </div>
                           </a>
                        </div>
                        <div className={clsx(styles.item)}>
                            <a href="#" className={clsx(styles.item_link)} >
                                <div className={clsx(styleHealthFacility.wrap_img)}>
                                    <img src="https://cdn.bookingcare.vn/fo/w750/2022/07/14/155206-logo-y-duoc-1.jpg"/>
                                </div>
                                <div className={clsx(styles.wrap_title)}>
                                    <div className={clsx(styles.title)}><FormattedMessage id="healthFacility.dai-hoc-y"/></div>
                                </div>
                            </a>
                        </div>
                        <div className={clsx(styles.item)}>
                            <a href="#" className={clsx(styles.item_link)} >
                                <div className={clsx(styleHealthFacility.wrap_img)}>
                                    <img src="https://cdn.bookingcare.vn/fo/w750/2019/07/31/085056logobenhvien108.jpg"/>
                                </div>
                                <div className={clsx(styles.wrap_title)}>
                                    <div className={clsx(styles.title)}><FormattedMessage id="healthFacility.108"/></div>
                                </div>
                            </a>
                        </div>
                        <div className={clsx(styles.item)}>
                            <a href="#" className={clsx(styles.item_link)} >
                                <div className={clsx(styleHealthFacility.wrap_img)}>
                                    <img src="https://cdn.bookingcare.vn/fo/w750/2023/05/16/153236-logo-hung-viet.jpg"/>
                                </div>
                                <div className={clsx(styles.wrap_title)}>
                                    <div className={clsx(styles.title)}><FormattedMessage id="healthFacility.hung-viet"/></div>
                                </div>
                            </a>
                        </div>
                        <div className={clsx(styles.item)}>
                            <a href="#" className={clsx(styles.item_link)} >
                                <div className={clsx(styleHealthFacility.wrap_img)}>
                                    <img src="https://cdn.bookingcare.vn/fo/w750/2022/08/29/104922-logo-med-tai-ha-noi--01.png"/>
                                </div>
                                <div className={clsx(styles.wrap_title)}>
                                    <div className={clsx(styles.title)}><FormattedMessage id="healthFacility.MEDLATEC"/></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HealthFacility)