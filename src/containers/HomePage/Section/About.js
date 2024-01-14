import React, { Component } from "react";
import { connect } from "react-redux";
import clsx from 'clsx';
import { FormattedMessage } from "react-intl";

import styleAbout from './About.module.scss'
class About extends Component{
    constructor(props){
        super(props)
        this.state ={

        }
    }

    componentDidMount(){

    }

    render(){
        return(
            <div className={clsx(styleAbout.section_about)}>
                <div className={clsx(styleAbout.about_title)}><FormattedMessage id="about.title"/></div>
                <div className={clsx(styleAbout.about_body)}>
                    <div className={clsx(styleAbout.about_video)}>
                        <iframe  src="https://www.youtube.com/embed/f2tZAqb4j8U" title="Nguyện Yêu - Hương Ly「Cukak Remix」/ Audio Lyrics Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div className={clsx(styleAbout.about_media)}></div>
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

const mapDispatchToProps = dispatch=>{
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)