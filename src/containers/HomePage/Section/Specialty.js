import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clsx from 'clsx'

import styles from './Specialty.module.scss'

class Specialty extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        
    }
    
    render(){
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        };
        return(
            <div className={clsx(styles.section_specialty)}>
                <div className={clsx(styles.section_container)}>
                    <div className={clsx(styles.section_header)}>
                        <span className={clsx(styles.section_title)}><FormattedMessage id="specialty.Specialist"/></span>
                        <button className={clsx(styles.btn)}><FormattedMessage id="common.see-more"/></button>
                    </div>
                    <Slider {...settings}>
                        <div className={clsx(styles.item)}>
                            <img src="https://cdn.bookingcare.vn/fo/w750/2023/12/26/101627-co-xuong-khop.png"/>
                            <div className={clsx(styles.title)}><FormattedMessage id="specialty.musculoskeletal"/></div>
                        </div>
                        <div className={clsx(styles.item)}>
                            <img src="https://cdn.bookingcare.vn/fo/2023/12/26/101739-than-kinh.png"/>
                            <div className={clsx(styles.title)}><FormattedMessage id="specialty.musculoskeletal"/></div>
                        </div>
                        <div className={clsx(styles.item)}>
                            <img src="https://cdn.bookingcare.vn/fo/w750/2023/12/26/101713-tieu-hoa.png"/>
                            <div className={clsx(styles.title)}><FormattedMessage id="specialty.musculoskeletal"/></div>
                        </div>
                        <div className={clsx(styles.item)}>
                            <img src="https://cdn.bookingcare.vn/fo/w750/2023/12/26/101713-tim-mach.png"/>
                            <div className={clsx(styles.title)}><FormattedMessage id="specialty.musculoskeletal"/></div>
                        </div>
                        <div className={clsx(styles.item)}>
                            <img src="https://cdn.bookingcare.vn/fo/w750/2023/12/26/101713-tai-mui-hong.png"/>
                            <div className={clsx(styles.title)}><FormattedMessage id="specialty.musculoskeletal"/></div>
                        </div>
                        <div className={clsx(styles.item)}>
                            <img src="https://cdn.bookingcare.vn/fo/w750/2023/12/26/101627-cot-song.png"/>
                            <div className={clsx(styles.title)}><FormattedMessage id="specialty.musculoskeletal"/></div>
                        </div>
                        <div className={clsx(styles.item)}>
                            <img src="https://cdn.bookingcare.vn/fo/w750/2023/12/26/101739-y-hoc-co-truyen.png"/>
                            <div className={clsx(styles.title)}><FormattedMessage id="specialty.musculoskeletal"/></div>
                        </div>
                    </Slider>
                </div>
            </div>  
        )
    }
    
}

const mapStateToProps= state=>{
    return{
        isLoggedIn: state.user.isLoggedIn
    }
}

const mapDispatchToProps = dispatch=>{
    return{
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Specialty)