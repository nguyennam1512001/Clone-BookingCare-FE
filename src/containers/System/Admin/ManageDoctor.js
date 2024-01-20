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


class ManageDoctor extends Component {

    constructor(props){
        super(props)
        this.state = {
            contentMarkdown: '',
            contentHTML:'',
            selectedOption: '',
            description:'',
            listAllDoctor:'',
            dataSelect:'',
            doctorId:'',
            reset: false,
        }
    }

    async componentDidMount() {
        this.props.fetchAllDoctor()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if( prevProps.listAllDoctor !== this.props.listAllDoctor || 
            prevProps.language !== this.props.language ){
            let dataSelect = this.buildDataInputSelect(this.props.listAllDoctor)
            this.setState({
                listAllDoctor: this.props.listAllDoctor,
                dataSelect: dataSelect,
            })
        }

        if (prevProps.inforDetailDoctor !== this.props.inforDetailDoctor) {
            if ( !this.props.inforDetailDoctor || !this.props.inforDetailDoctor.Markdown ) {
                this.setState({
                    contentMarkdown: '',
                    contentHTML: '',
                    description: '',
                });
            } else {
                this.setState({
                    contentMarkdown: this.props.inforDetailDoctor.Markdown.contentMarkdown,
                    contentHTML: this.props.inforDetailDoctor.Markdown.contentHTML,
                    description: this.props.inforDetailDoctor.Markdown.description,
                });
             }
        }
        if(prevProps.listDetailDoctor !== this.props.listDetailDoctor){
            this.setState({
                contentMarkdown: '',
                contentHTML: '',
                description: '',
                selectedOption: '',
            });
        }
    }

    
    buildDataInputSelect = (data)=>{
        let result = [];
        let language= this.props.language
        if(data && data.length > 0){
            data.map((item, index) => {
                let object = {}
                let labelVi = `${item.lastName} ${item.firstName}`
                let labelEn = `${item.firstName} ${item.lastName}`
                object.label = language === LANGUAGES.VI? labelVi: labelEn
                object.value = item.id
                result.push(object)
            })
        }
        return result
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption }, () =>
          console.log(`Option selected:`, this.state.selectedOption)
        );
        this.props.fetchDetailDoctor(selectedOption.value)
    };

    handleEditorChange=({ html, text }) =>{
        this.setState({
            contentMarkdown: text,
            contentHTML: html
        })
    }

    handleSaveContentMarkdown=()=>{
        this.props.saveInforDoctor({
            contentMarkdown: this.state.contentMarkdown,
            contentHTML: this.state.contentHTML,
            description: this.state.description.trim(),
            doctorId: this.state.selectedOption.value,
        })
    }

    handleUpdateContentMarkdown = ()=>{
        this.props.updateDetailDoctor({
            contentMarkdown: this.state.contentMarkdown,
            contentHTML: this.state.contentHTML,
            description: this.state.description.trim(),
            doctorId: this.state.selectedOption.value,
        })
    }

    handleChangeDesc =(e)=>{
        this.setState({
            description: e.target.value
        })
    }

    render() {
        let {inforDetailDoctor} = this.props
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
                                options={this.state.dataSelect}
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
                            <label className=''>Thêm thông tin chi tiết:</label>
                            <MdEditor 
                                style={{ height: '500px' }} 
                                renderHTML={text => mdParser.render(text)} 
                                onChange={this.handleEditorChange} 
                                value={this.state.contentMarkdown}
                            />
                        </div>
                        <div className='col-12 text-end'>
                            <button className='btn btn-primary me-5 mt-3'
                                onClick={ 
                                    inforDetailDoctor && inforDetailDoctor.Markdown && (
                                        inforDetailDoctor.Markdown.contentMarkdown || inforDetailDoctor.Markdown.description
                                    )
                                    ? this.handleUpdateContentMarkdown
                                    : this.handleSaveContentMarkdown }
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
        listAllDoctor: state.doctor.listAllDoctor,
        reset: state.doctor.reset,
        inforDetailDoctor: state.doctor.inforDetailDoctor,
        listDetailDoctor: state.doctor.listDetailDoctor,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllDoctor: () => dispatch(actions.fetchAllDoctorStart()),
        saveInforDoctor: (data) => dispatch(actions.saveInforDoctorStart(data)),
        updateDetailDoctor: (data)=> dispatch(actions.updateDetailDoctorStart(data)),
        fetchDetailDoctor: (id)=> dispatch(actions.fetchDetailDoctorStart(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);