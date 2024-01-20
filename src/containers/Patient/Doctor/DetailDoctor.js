import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";

import styles from './DetailDoctor.module.scss'
import * as actions from '../../../store/actions'
import {LANGUAGES} from '../../../utils/constant'
import clsx from "clsx";

class DetailDoctor extends Component {
    constructor(props){
        super(props)
        this.state = {
            limit: 20,
            pageNumber: 1,
            listDoctor: [],
            doctorData:[]
        }
    }

    componentDidMount(){
        if(this.props.match && this.props.match.params && this.props.match.params.id){
            const id = this.props.match.params.id;
            this.props.fetchDetailDoctor(id)
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevProps.inforDetailDoctor !== this.props.inforDetailDoctor){
            this.setState({
                doctorData: this.props.inforDetailDoctor
            })
        }
    }

    render(){
        const { doctorData } = this.state;
        let nameVi =''
        let nameEn =''
        if(doctorData && doctorData.positionData){
            nameVi = doctorData.positionData.valueVi+" "+doctorData.lastName+" "+doctorData.firstName
            nameEn = doctorData.positionData.valueEn+" "+doctorData.firstName+" "+doctorData.lastName
        }
        
        return(
            <div className={clsx(styles.container)}>
                <div className={clsx(styles.doctor_appointment, 'pt-3')}>
                    <div className="container">
                        <div className="row">
                            <div className="col-2" >
                                {doctorData.image &&
                                    <div className={clsx(styles.doctor_avatar)}><img src={doctorData.image} alt="Doctor" className="w-100 rounded-circle"/></div>
                                }
                            </div>
                            <div className="col-10">
                                <div className="row">
                                    <div className="fs-5">{this.props.language === LANGUAGES.EN ? nameEn : nameVi} Chuyên khoa II</div>
                                </div>
                                <div className="row">
                                    {doctorData.Markdown && doctorData.Markdown.description && 
                                        <span>{doctorData.Markdown.description}</span>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={clsx(styles.doctor_detail)}>
                    <div className="container py-4">
                        <div className="fs-5">{this.props.language === LANGUAGES.EN ? nameEn : nameVi} Chuyên khoa II</div>
                        {doctorData.Markdown && doctorData.Markdown.contentHTML && 
                            <div dangerouslySetInnerHTML={{ __html: doctorData.Markdown.contentHTML }}/>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        inforDetailDoctor: state.doctor.inforDetailDoctor,
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        fetchDetailDoctor: (data)=> dispatch(actions.fetchDetailDoctorStart(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor)