import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomeHeader from './HomeHeader';

class HomePage extends Component {
    constructor(props){
        super(props)
        this.state ={

        }
    }
    componentDidMount(){

    }

    render() {
        return (
            <div>
                <HomeHeader/>
                home page
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
