import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomeHeader from './HomeHeader';
import Specialty from './Section/Specialty';
import HealthFacility from './Section/HealthFacility';
import OutstandingDoctor from './Section/OutstandingDoctor';
import './HomePage.scss'
import HandBook from './Section/HandBook';
import About from './Section/About';
import HomeFooter from './Section/HomeFooter';

class HomePage extends Component {
    constructor(props){
        super(props)
        this.state ={

        }
    }
    componentDidMount(){

    }

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        };
        let setting4 = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4
        };
        return (
            <div>
                <HomeHeader/>
                <Specialty settings={settings}/>
                <HealthFacility settings={settings}/>
                <OutstandingDoctor settings = {setting4}/>
                <HandBook settings={setting4}/>
                <About/>
                <HomeFooter/>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
