import React from 'react';
import StudentRow from '../StudentRow';
import { StudentsContent } from "./styles";

class StudentsTable extends React.Component{
    constructor(props){
        super(props);
    }

    compareStudents = (sortOption, isMark, reverse) => {
        let bigger = 1, equal = 0, less = -1;
        if (reverse){
            bigger = -1; less = 1;
        }
        if (isMark){
            return function(a,b){
                let aItem = a.marks[sortOption], bItem = b.marks[sortOption];
                return aItem > bItem ? bigger : aItem === bItem ? equal : less; 
            }
        }
        else{
            return function(a,b){
                let aItem = a[sortOption], bItem = b[sortOption];
                return aItem > bItem ? bigger : aItem === bItem ? equal : less; 
            }
        }
    }

    sortStudents = (students, sortOption, isMark, reverse) => {
        students.sort(this.compareStudents(sortOption, isMark, reverse));
    }

    filterStudents = (filterText, students) => {
        let res = [];

        for (let i = 0; i < students.length; i++){
            const studentInfo = (students[i].name + students[i].surname).toLowerCase();
            const filter = filterText.toLowerCase();
            console.log(studentInfo + ' ' + filter);
            if (!studentInfo.indexOf(filter)) res.push(students[i]);
        }

        console.log(res);

        return res;

    }

    render (){

        let {students, filterText, reverse, isMark, sortOption} = this.props.allState;

        if (!students.length) return (
                <StudentsContent className='container-fluid empty'>
                    <h2>There are no registered students yet...</h2>
                </StudentsContent>
            )
        else {
            if (filterText !== '') {
                console.log('filter');
                students = this.filterStudents(filterText, students);
            }

            if(sortOption !== '') this.sortStudents(students, sortOption, isMark, reverse);
            
            if (!students.length) {
                return (
                    <StudentsContent className='container-fluid empty'>
                        <h2>No matching results...</h2>
                    </StudentsContent>
                )
            }
            else{
                const rows = students.map(student => <StudentRow deleteFunc={this.props.deleteFunc} selectFunc={this.props.selectFunc} key={student.id} student={student} />);
                return (
                    <StudentsContent className='container-fluid'>
                        <div className='table-responsive'>
                            <table className="table table-bordered table-sm">
                                <thead>
                                <tr>
                                    <th scope="col" rowSpan='2'>Name</th>
                                    <th scope="col" rowSpan='2'>Surname</th>
                                    <th scope='col' colSpan='5'>Marks</th>
                                    <th scope='col' rowSpan='2' colSpan='2'>Action</th>
                                </tr>
                                <tr>
                                    <th scope="col">HTML</th>
                                    <th scope="col">CSS</th>
                                    <th scope="col">JS</th>
                                    <th scope='col'>PHP</th>
                                    <th scope='col'>Average Mark</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {rows}
                                </tbody>
                            </table>
                        </div>
                    </StudentsContent>
                );
            }
        }
    }
}

export default StudentsTable;