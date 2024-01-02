import React, { Component } from "react";
import { connect } from "react-redux";
import clsx from 'clsx';
import { FormattedMessage } from "react-intl";

import styleFooter from './HomeFooter.module.scss'
class HomeFooter
 extends Component{
    constructor(props){
        super(props)
        this.state ={

        }
    }

    componentDidMount(){

    }

    render(){
        return(
            <div className={clsx(styleFooter.home_footer, "text-center")}>
                <p>&copy; 2024 Nguyễn Nam. <a target="blank" href="https://www.facebook.com/profile.php?id=100013091891382">More information, FaceBook: Nguyễn Nam</a></p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter
    )