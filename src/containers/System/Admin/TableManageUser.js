import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import clsx from 'clsx'

import { ConfirmDialog } from 'primereact/confirmdialog';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
        
import { LANGUAGES } from '../../../utils/constant';
import styleTableManageUser from './TableMangeUser.scss'
import * as actions from '../../../store/actions'




class TableManageUser extends Component {

    constructor(props){
        super(props)
        this.state = {
            listUser: [],
            visible: false,
            userToDeleteId: null,
        }
    }

    async componentDidMount() {
        this.props.fetchAllUser()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.listUser !== this.props.listUser){
            this.setState({
                listUser: this.props.listUser
            })
        }
        
    }
    
    showConfirmation = (id) => {
        this.setState({
            visible:true,
            userToDeleteId: id,
        })
      };

    handleConfirmDelete =()=>{
        let { userToDeleteId } = this.state;
        if(userToDeleteId){
            this.props.deleteUser(userToDeleteId)
            this.setState({
                visible: false,
                userToDeleteId: null,
            });
        }
    }
    handleRejectDelete = () => {
        this.setState({
          visible: false,
          userToDeleteId: null,
        });
      };

    handleEditUser =(id)=>{
        this.props.fetchUser(id)
        this.props.resetErrMessage()
        this.props.changeIsEdit(true)
    }

    render() {
        let {listUser, visible} = this.state
        return (
        <div className='container my-5'>
            <ConfirmDialog
                visible={visible}
                onHide={() => this.setState({ visible: false })}
                message={<FormattedMessage id={'manage-user.confirmDelete'}/>}
                header="Confirmation"
                icon="pi pi-exclamation-triangle"
                position='top'
                acceptLabel={<FormattedMessage id={'manage-user.delete'}/>}
                rejectLabel={<FormattedMessage id={'manage-user.cancel'}/>}
                accept={this.handleConfirmDelete}
                reject={this.handleRejectDelete}
            />
            <div className='row'>
                <div className='col-12'>
                    <table className="table table-striped table-bordered table-hover">
                        <thead className="bg-success bg-gradient">
                            <tr>
                            <th scope="col">id</th>
                            <th scope="col"><FormattedMessage id="manage-user.gender"/></th>
                            <th scope="col"><FormattedMessage id="manage-user.email"/></th>
                            <th scope="col"><FormattedMessage id="manage-user.firstName"/></th>
                            <th scope="col"><FormattedMessage id="manage-user.lastName"/></th>
                            <th scope="col"><FormattedMessage id="manage-user.mobile"/></th>
                            <th scope="col"><FormattedMessage id="manage-user.address"/></th>
                            <th scope="col" colSpan="2"><FormattedMessage id="manage-user.edit"/></th>
                            </tr>
                        </thead>
                        <tbody>
                            {listUser && listUser.length>0 &&
                                listUser.map((item,index)=>(
                                <tr key={index}>
                                    <th scope="row">{item.id}</th>
                                    <th scope="row">{item.gender}</th>
                                    <th scope="row">{item.email}</th>
                                    <th scope="row">{item.firstName}</th>
                                    <th scope="row">{item.lastName}</th>
                                    <th scope="row">{item.phoneNumber}</th>
                                    <th scope="row">{item.address}</th>
                                    <th scope="row" title='Delete'><button onClick={()=>this.showConfirmation(item.id)} className='btn py-0 px-0'><i className='material-icons text-danger'>delete</i></button></th>
                                    <th scope="row" title='Edit'><button onClick={()=>this.handleEditUser(item.id)} className='btn py-0 px-0'><i className='material-icons text-warning'>edit</i></button></th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        listUser: state.admin.listUser,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllUser: () => dispatch(actions.fetchAllUserStart()),
        fetchUser: (id)=> dispatch(actions.fetchUserStart(id)),
        deleteUser: (id) => dispatch(actions.deleteUserStart(id)),
        changeIsEdit: (isEdit) => dispatch(actions.isEdit(isEdit)),
        setContentOfConfirmModal: (data) => dispatch(actions.setContentOfConfirmModal(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
