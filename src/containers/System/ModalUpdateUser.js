import React, {Component} from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/Emitter'
import ToastMessage from '../../components/ToastMessage';
import _ from 'lodash'


class ModalUpdateUser extends Component{
    constructor(props){
        super(props)
        this.state = {
            errMessage:'',
            id: '',
            email: '',
            firstName: '',
            lastName: '',
            address: '',
        }
    }

    componentDidMount(){
        let user = this.props.user
        if(user && !_.isEmpty(user)){
            this.setState({
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address,
            })
        }
    }

    toggle = ()=>{
        this.props.toggleFromParent()
    }

    handleOnchangeInput =(e, field)=>{
        let copyState = {...this.state}
        copyState[field] = e.target.value
        this.setState({
            ...copyState
        })
    }

    handleFocusInput = (e) =>{
        this.setState({
            errMessage: ''
        })
    }

    checkValid = () =>{
        let isValid = true
        let arr = ['email', 'firstName', 'lastName', 'address']
        if(!this.props.user.id){
            this.setState({
                errMessage: `Not found user`
            })
        }else{
            for (let i = 0; i < arr.length; i++) {
                if(!this.state[arr[i]]){
                    isValid = false
                    this.setState({
                        errMessage: `Please enter your ${arr[i]} `
                    })
                    break;
                }
                
            }
        }
        return isValid
    }

    updateUserModal = async() =>{
        try {
            let check = this.checkValid()
            if (check) {
                delete this.state.errMessage;
                let res = await this.props.updateUser(this.state)
                if( res && res.errCode !== 0){
                    this.setState({
                        errMessage: res.errMessage
                    })
                }else{
                    this.toggle()
                }
            }
        } catch (e) {
            console.log(e);
        }
    }

    render(){
        return(
            <div>
                <Modal 
                    isOpen={this.props.isOpen} 
                    toggle={()=> {this.toggle()}}
                    size="lg"
                    className="modal-user-container"
                >
                    <ModalHeader toggle={()=> {this.toggle()}}>Edit user</ModalHeader>
                    <ModalBody>
                    <div className='modal-user-body'>
                            <div className='input-container'>
                                <label >Email</label>
                                <input type='text' 
                                    onChange={(e) => this.handleOnchangeInput(e, "email")}
                                    value = {this.state.email}
                                    onFocus={()=> this.handleFocusInput()}
                                    disabled
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
                        <Button color="primary" className="px-3" onClick={this.updateUserModal}>Save changes</Button>
                        <Button color="secondary" className="px-3" onClick={()=> {this.toggle()}}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUpdateUser);