import React from 'react';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './font.css';

import Sticky from 'react-stickynode';

import {GlobalStyle, MainContent, MainWrapper, Sidebar, Nav} from './styles'
import StudentsTable from '../StudentsTable';
import RegForm from '../Forms/RegForm';
import SortingForm from '../Forms/SortingForm';
import SearchForm from '../Forms/SearchForm';
import CalcAvgForm from "../Forms/CalcAvgForm";

let id = 0;

export default class App extends React.Component {
    constructor (props){
        super(props);

        this.state = {
            students: [],
            filterText: '',
            reverse: false,
            isMark: false,
            sortOption: ''
        }
    }

    deleteStudent = (student) => {
        const currentStudents = this.state.students.filter(function(item){
            return item.id !== student.id;
        });

        this.setState({
            students: currentStudents
        });
    }

    selectStudent = (id) => {
        const currentStudents = this.state.students;

        for (let i = 0; i < currentStudents.length; i++){
            if (currentStudents[i].id === id) {
                console.log('a');
                currentStudents[i].selected = !currentStudents[i].selected;
            }
        }

        this.setState({
            students: currentStudents
        });
    }

    saveStudent = (data) => {
        this.setState((state) => ({
            students: [
                {
                    name: data.name,
                    surname: data.surname,
                    marks: {
                        html: data.marks.html,
                        css: data.marks.css,
                        js:  data.marks.js,
                        php: data.marks.php,
                    },
                    average: data.average,
                    selected: false,
                    id: id++
                },
                ...state.students
            ]
        }));
    } 

    saveSortParams = ({reverse, sortOption, isMark}) => {
        this.setState({
            reverse: reverse,
            sortOption: sortOption,
            isMark: isMark
        });
    }

    saveFilterText = (filterText) => {
        this.setState({
            filterText: filterText
        });
    }

    render(){
        return (
                <MainWrapper>
                <GlobalStyle/>
                <Nav className='navbar'>
                    <SearchForm saveFilterText={this.saveFilterText}/>
                </Nav>
                    <div className='container-fluid'>
                        <div className='row'>
                            <Sticky className='col-2' top={60} >
                                    <Sidebar>
                                        <SortingForm saveSortParams={this.saveSortParams}/>
                                        <CalcAvgForm students={this.state.students}/>
                                    </Sidebar>
                            </Sticky>
                            <MainContent className='col-7'>
                                <StudentsTable allState={this.state} deleteFunc={this.deleteStudent} selectFunc={this.selectStudent}/>
                            </MainContent>
                            <Sticky className='col-3' top={60} >
                                <Sidebar>
                                    <RegForm onChange={this.saveStudent} />
                                </Sidebar>
                            </Sticky>
                        </div>
                    </div>
                </MainWrapper>
        )
    }
}