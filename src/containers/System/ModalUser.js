
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalUser extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
    }
    toggle = ()=>{
        this.props.togglePromParent()
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
                                <input type='text'/>
                            </div>
                            <div className='input-container'>
                                <label >First name</label>
                                <input type='text'/>
                            </div>
                            <div className='input-container'>
                                <label >Last name</label>
                                <input type='text'/>
                            </div>
                            <div className='input-container'>
                                <label >Address</label>
                                <input type='text'/>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                    <Button color="primary" className='px-3' onClick={()=>{this.toggle()}}>
                        Submit
                    </Button>{' '}
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
