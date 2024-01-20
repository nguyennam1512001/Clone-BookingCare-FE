// Layout.js

import React, { Component } from 'react';
import Header from './Home/Header'; // Tạo Header component
import Footer from './Home/Footer';
import { connect } from 'react-redux';
// import Footer from './Footer'; // Tạo Footer component

class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        {this.props.children}
        <Footer/>
      </>
    );
  }
}
const mapStateToProps = state =>{
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
