
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/Emitter'

class ModalUser extends Component {

    constructor(props){
        super(props)
        this.state = {
            errMessage:'',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
        }
        this.listenToEmitter()
    }   
    listenToEmitter(){
        emitter.on('EVENT_CLEAR_MODAL_DATA', () =>{
            this.setState({
                errMessage:'',
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: '',
            })
        })
    }

    componentDidMount() {
    }
    toggle = ()=>{
        this.props.togglePromParent()
    }

    handleOnchangeInput = (e, id)=>{
        let copyState = {...this.state};
        copyState[id] = e.target.value
        this.setState({
            ...copyState
        })
    }

    checkValiDateInput = ()=>{
        let isValid = true
        let arr = ['email','password','firstName','lastName','address']
        for (let i = 0; i < arr.length; i++) {
            if (!this.state[arr[i]]) {
                isValid = false
                this.setState({
                    errMessage: `Please enter your ${arr[i]} `
                })
                break;
            }
            
        }
        return isValid
    }

    handleAddNewUser= async()=>{
        let isValid = this.checkValiDateInput()
        if(isValid){
            delete this.state.errMessage;
            let res = await this.props.createNewUser(this.state)
            if (res && res.errCode == 0) {
                this.toggle();
            }else{
                this.setState({
                    errMessage: res.errMessage
                })
            }
        }
    }

    handleFocusInput = ()=>{
        this.setState({
            errMessage: ''
        })
    }

    render() {
        return (
                <Modal 
                    isOpen={this.props.isOpen} 
                    toggle={()=>{this.toggle()}} 
                    size = 'lg'
                    className='modal-user-container'
                >
                    <ModalHeader toggle={()=>{this.toggle()}}>Edit user</ModalHeader>
                    <ModalBody>
                        <div className='modal-user-body'>
                            <div className='input-container'>
                                <label >Email</label>
                                <input type='text' 
                                    onChange={(e) => this.handleOnchangeInput(e, "email")}
                                    value = {this.state.email}
                                    onFocus={()=> this.handleFocusInput()}
                                />
                            </div>
                            <div className='input-container'>
                                <label >Password</label>
                                <input type='password' 
                                    onChange={(e) => this.handleOnchangeInput(e, "password")}
                                    value = {this.state.password}
                                    onFocus={()=> this.handleFocusInput()}
                                />
                            </div>
                            <div className='input-container'>
                                <label >First name</label>
                                <input type='text' 
                                    onChange={(e)=> this.handleOnchangeInput(e, "firstName")}
                                    value = {this.state.firstName}
                                    onFocus={()=> this.handleFocusInput()}
                                />
                            </div>
                            <div className='input-container'>
                                <label >Last name</label>
                                <input type='text' 
                                    onChange={(e)=> this.handleOnchangeInput(e, "lastName")}
                                    value = {this.state.lastName}
                                    onFocus={()=> this.handleFocusInput()}
                                />
                            </div>
                            <div className='input-container'>
                                <label >Address</label>
                                <input type='text' 
                                    onChange={(e)=> this.handleOnchangeInput(e, "address")}
                                    value = {this.state.address}
                                    onFocus={()=> this.handleFocusInput()}
                                />
                            </div>
                        </div>
                        <div className='text-center mt-3' style={{color:'red'}}>
                            <span>{this.state.errMessage}</span>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                    <Button color="primary" className='px-3' onClick={this.handleAddNewUser}>
                        Submit
                    </Button>
                    <Button color="secondary" className='px-3' onClick={()=>{this.toggle()}}>
                        Cancel
                    </Button>
                    </ModalFooter>
                </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
