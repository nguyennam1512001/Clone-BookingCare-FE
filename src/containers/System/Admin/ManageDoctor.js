import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import clsx from 'clsx'
import Select from 'react-select';

import { ConfirmDialog } from 'primereact/confirmdialog';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
        
import { LANGUAGES } from '../../../utils/constant';
import style from './ManageDoctor.module.scss'
import * as actions from '../../../store/actions'

import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
const mdParser = new MarkdownIt(/* Markdown-it options */);
// Finish!



const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
class ManageDoctor extends Component {

    constructor(props){
        super(props)
        this.state = {
            contentMarkdown: '',
            contentHTML:'',
            selectedOption: '',
            description:''
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

    handleChange = (selectedOption) => {
        this.setState({ selectedOption }, () =>
          console.log(`Option selected:`, this.state.selectedOption)
        );
    };

    handleEditorChange=({ html, text }) =>{
        this.setState({
            contentMarkdown: text,
            contentHTML: html
        })
    }

    handleSaveContentMarkdown=()=>{
        console.log(this.state);
    }

    handleChangeDesc =(e)=>{
        this.setState({
            description: e.target.value
        })
    }

    render() {
        let {listUser, visible} = this.state
        return (
            <div className={clsx(style.manage_doctor_container)}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <p className='fs-4 text-uppercase py-3'>Tạo thêm thông tin bác sĩ</p>
                        </div>
                        <div className='col-4'>
                            <label className=''>Chọn bác sĩ:</label>
                            <Select
                                value={this.state.selectedOption}
                                onChange={ this.handleChange}
                                options={options}
                                placeholder='Select doctor'
                            />
                        </div>
                        <div className='col-6 mb-3 ms-auto'>
                            <label className=''>Thông tin giới thiệu:</label>
                            <textarea 
                                className='form-control' 
                                rows='4' 
                                onChange={(e)=> 
                                this.handleChangeDesc(e)} 
                                value={this.state.description}>
                            </textarea>
                        </div>
                        <div className='col-12'>
                            <MdEditor 
                                style={{ height: '500px' }} 
                                renderHTML={text => mdParser.render(text)} 
                                onChange={this.handleEditorChange} />
                        </div>
                        <div className='col-12 text-end'>
                            <button className='btn btn-primary me-5 mt-3'
                                onClick={this.handleSaveContentMarkdown}
                            >Save</button>
                        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);