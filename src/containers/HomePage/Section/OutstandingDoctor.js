import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Slider from 'react-slick'
import clsx from 'clsx'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Section.module.scss'
import styleOutstandingDoctor from './OutstandingDoctor.module.scss'
import * as actions from '../../../store/actions'
import {LANGUAGES} from '../../../utils/constant'

class OutstandingDoctor extends Component {
    constructor(props){
        super(props)
        this.state = {
            limit: 20,
            pageSize: 1,
            listDoctor: [],
        }
    }

    componentDidMount(){
        this.props.fetchDoctorStart({
            limit: this.state.limit,
            pageSize: this.state.pageSize
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevProps.listDoctor !== this.props.listDoctor){
            this.setState({
                listDoctor: this.props.listDoctor
            })
            this.props.fetchDoctorStart({
                limit: this.state.limit,
                pageSize: this.state.pageSize
            })
        }
    }



    render(){
        let {listDoctor} = this.state
        return(
            <div className={clsx(styleOutstandingDoctor.section_outstanding_doctor)}>
                <div className={clsx(styles.section_container)}>
                    <div className={clsx(styles.section_header)}>
                        <span className={clsx(styles.section_title)}><FormattedMessage id="outstandingDoctor.title"/></span>
                        <button className={clsx(styles.btn)}><FormattedMessage id="common.see-more"/></button>
                    </div>
                    <Slider {...this.props.settings}>
                        {listDoctor && listDoctor.length > 0 &&
                            listDoctor.map((item, index) => {
                                let nameVi = item.positionData.valueVi+" "+item.lastName+" "+item.firstName
                                let nameEn = item.positionData.valueEn+" "+item.firstName+" "+item.lastName
                                return(
                                    <div key={index} className={clsx(styleOutstandingDoctor.item)}>
                                        <a href="#" className={clsx(styleOutstandingDoctor.item_link)}>
                                            <div className={clsx(styleOutstandingDoctor.wrap_img)}>
                                                {item.image && (
                                                    <img src={Buffer.from(item.image, 'base64').toString('latin1')} alt="Doctor"/>
                                                )}
                                            </div>
                                            <div className={clsx(styleOutstandingDoctor.wrap_title)}>
                                                <div className={clsx(styleOutstandingDoctor.title)}>{this.props.language === LANGUAGES.EN ? nameEn : nameVi}</div>
                                                <div className={clsx(styleOutstandingDoctor.sup_title)}></div>
                                            </div>
                                        </a>
                                    </div>
                                )
                            }
                        )}
                        
                    </Slider>
                </div>
            </div>  
        )
    }
}

const mapStateToProps = state =>{
    return{
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        listDoctor: state.doctor.listDoctor
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        fetchDoctorStart: (data)=> dispatch(actions.fetchDoctorStart(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor)