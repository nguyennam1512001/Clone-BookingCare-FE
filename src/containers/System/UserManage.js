import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getUsers, createNewUserSevice, updateUserSevice ,deleteUserSevice } from '../../services/userSevice';
import './UserManage.scss'
import ModalCreateUser from './ModalCreateUser';
import ModalUpdateUser from './ModalUpdateUser';
import ModalDeleteUser from './ModalDeleteUser';
import ToastMessage from '../../components/ToastMessage';
import { emitter } from '../../utils/Emitter'

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUser: [],
            isOpenModalCreateUser: false,
            isOpenModalUpdateUser: false,
            isOpenModalDeleteUser: false,
            isOpenToast: false,
            titleToast: '',
            typeToast: '',
            toastMessage: '',
            selectedUserData: {},
            selectedUserId: null
        };
    }    

    async componentDidMount() {
        await this.getAllUserFromReact();

    }

    getAllUserFromReact= async()=>{
        let res = await getUsers('all')
        if(res && res.errCode == 0){
            this.setState({
                arrUser: res.users,
            })
        }
    }
    handleAddNewUser(){
        this.setState({
            isOpenModalCreateUser: true
        })
    }

    openModalUpdateUser(data){
        this.setState({
            isOpenModalUpdateUser : true,
            selectedUserData: data,
        })
    }

    openModalDeleteUser(id){
        this.setState({
            isOpenModalDeleteUser: true,
            selectedUserId: id
        })
    }

    toggleModalCreateUser = () => {
        this.setState({
            isOpenModalCreateUser: !this.state.isOpenModalCreateUser,
        });
    }    

    toggleModalUpdateUser = () =>{
        this.setState({
            isOpenModalUpdateUser: !this.state.isOpenModalUpdateUser,
        });
    }

    toggleModalDeleteUser = () => {
        this.setState({
            isOpenModalDeleteUser: !this.state.isOpenModalDeleteUser,
        });
    }    

    showToast = (message, title, type) => {
        this.setState({
          isOpenToast: true,
          toastMessage: message,
          titleToast: title,
          typeToast: type,
        });
    
        setTimeout(() => {
          this.setState({
            isOpenToast: false,
          });
        }, 2000);
    };

    createNewUser= async(data)=>{
        try {
           let res = await createNewUserSevice(data)
            if (res && res.errCode !== 0) {
                this.setState({
                    errMessage : res.errMessage
                })
            } else{
                this.showToast(res.message, 'Success', 'success')
                await this.getAllUserFromReact()
                emitter.emit('EVENT_CLEAR_MODAL_DATA')
            }
            return res
        } catch (e) {
            console.log(e);
        }
    }
    handleUpdateUser = async(data)=>{
        try {
            let res = await updateUserSevice(data)
            if (res && res.errCode !== 0) {
                this.setState({
                    errMessage: res.errMessage
                })
            } else {
                this.showToast(res.message, 'Success', 'success')
                await this.getAllUserFromReact()
            }
            return res
        } catch (e) {
            console.log(e);
        }
    }
    handleDeleteUser = async(id) =>{
        try {
            if (id) {
                let res = await deleteUserSevice(id)
                let title = res && res.errCode == 0 ? 'Success' : 'Error'
                let type = res && res.errCode == 0 ? 'success' : 'error'
                this.showToast(res.message || res.errMessage, title, type)

                if (res && res.errCode == 0) {
                    await this.getAllUserFromReact()  
                } 
                return res
            }
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        let arrUser = this.state.arrUser
        return (
            <div className='user-contaner'>
                <ModalCreateUser 
                    isOpen={this.state.isOpenModalCreateUser}
                    toggleFromParent={()=> this.toggleModalCreateUser()}
                    createNewUser={this.createNewUser}
                />
                {this.state.isOpenModalUpdateUser&&
                    <ModalUpdateUser
                        isOpen = {this.state.isOpenModalUpdateUser}
                        toggleFromParent = {()=> this.toggleModalUpdateUser()}
                        updateUser = {this.handleUpdateUser}
                        user = {this.state.selectedUserData}
                    />
                }
                <ModalDeleteUser
                    isOpen = {this.state.isOpenModalDeleteUser}
                    toggleFromParent={()=> this.toggleModalDeleteUser()}
                    deleteUser={this.handleDeleteUser}
                    id={this.state.selectedUserId}
                />
                
                {this.state.isOpenToast && 
                    <ToastMessage title={this.state.titleToast} message={this.state.toastMessage} type={this.state.typeToast} duration={2000} />
                }
                <div className="title text-center">Manage users</div>
                <div className='mx-3' >
                    <button onClick={()=>this.handleAddNewUser()} className='add-new-user btn btn-primary px-3'><i className="fas fa-plus"></i> Add new user</button>
                </div>
                <div className='user-table mt-4 mx-3'>
                    <table id="customers">
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Address</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { arrUser && arrUser.map((item, index) => {
                                return(
                                    <tr key={index}>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button 
                                                className='btn-edit'
                                                onClick={()=>this.openModalUpdateUser(item)}
                                            >
                                                <i className="fas fa-pencil-alt"></i>
                                            </button>
                                            <button 
                                                className='btn-delete'
                                                onClick={()=>this.openModalDeleteUser(item.id)}
                                            >
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>

                    </table>
                </div>
            </div>
            
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
