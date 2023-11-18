import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getUsers } from '../../services/userSevice';
import './UserManage.scss'

class UserManage extends Component {

    constructor(props){
        super(props)
        this.state = {
            arrUser: []
        }
    }

    async componentDidMount() {
        let res = await getUsers('all')
        if(res && res.errCode == 0){
            this.setState({
                arrUser: res.users
            })
        }
    }


    render() {
        let arrUser = this.state.arrUser
        return (
            <div className='user-contaner'>
                <div className="title text-center">Manage users</div>
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
                                            <button className='btn-edit'>
                                                <i class="fas fa-pencil-alt"></i>
                                            </button>
                                            <button className='btn-delete'>
                                                <i class="fas fa-trash"></i>
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
