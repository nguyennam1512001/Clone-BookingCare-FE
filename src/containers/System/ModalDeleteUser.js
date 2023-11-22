import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/Emitter'

class ModalDeleteUser extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){

    }

    toggle = ()=>{
        this.props.togglePromParent()
    }

    deleteUserModal = async () => {
        try {
            let res = await this.props.deleteUser(this.props.userId);
            if (res && res.errCode === 0) {
            } else {
            console.log('err:', res.errMessage); // In ra thông báo lỗi để kiểm tra
            }
            this.toggle();
        } catch (e) {
            console.log('Exception:', e); // In ra exception nếu có
        }
    };
      

    render(){
        return(
            <Modal 
                isOpen={this.props.isOpen} 
                toggle={()=> this.toggle()}
                size='sm'
                className='modal-delete-user-container'
            >
                <ModalHeader toggle={()=>this.toggle()}>
                    Delete the user
                </ModalHeader>
                <ModalBody>
                    Do you want to delete the user ?
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" className='px-3' onClick={()=>this.deleteUserModal()}>Delete</Button> 
                    <Button color="primary" className='px-3' onClick={()=>this.toggle()}>Cancel</Button>
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


export default connect(mapStateToProps, mapDispatchToProps)(ModalDeleteUser);
