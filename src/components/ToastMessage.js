import React, { Component } from 'react';
import styles from './ToastMessage.module.scss'; 
import { connect } from 'react-redux';
import * as actions from '../store/actions'


class Toast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  componentDidMount() {
    const { duration } = this.props;

    this.autoRemoveId = setTimeout(() => {
      this.setVisible(false);
      this.props.resetUserToastMessage()
      this.props.resetUserToastMessageErr()
    }, duration + 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.autoRemoveId);
  }

  setVisible = (isVisible) => {
    this.setState({
      visible: isVisible,
    });
  };

  handleClose = () => {
    this.props.resetUserToastMessage()
    this.props.resetUserToastMessageErr()
    this.setVisible(false);
  };

  render() {
    const { title = '', message = '', type = 'info', duration = 3000 } = this.props;
    const { visible } = this.state;

    const icons = {
      success: 'check_circle',
      error: 'error',
      warning: 'error',
      info: 'info',
    };
    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);

    return (
      <>
        {visible && (
          <div className={`${styles.toast} ${styles[`toast--${type}`]}`} style={{animation: `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`}}>
            <div className={styles.toast__icon}>
              <i className="material-icons">{icon}</i>
            </div>
            <div className={styles.toast__body}>
              <h3 className={styles.toast__title}>{title}</h3>
              <p className={styles.toast__msg}>{message}</p>
            </div>
            <div className={styles.toast__close} onClick={this.handleClose}>
              <i className="material-icons">close</i>
            </div>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = state =>{
  return{
    userToastMessage: state.admin.userToastMessage,
    userToastMessageErr: state.admin.userToastMessageErr,
  }
}
const mapDispatchToProps = dispatch => {
  return{
    resetUserToastMessage: () => dispatch(actions.resetUserToastMessage()),
    resetUserToastMessageErr: () => dispatch(actions.resetUserToastMessageErr()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Toast)