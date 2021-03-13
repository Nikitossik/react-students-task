import React from 'react';
import {Group, Select} from '../styles';

class CalcAvgForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            avgCalcMode: 'all',
            avgMark: 0
        }
    }

    handleChange = (e) =>{
        const {name, value} = e.target;

        this.setState({
            [name]: value 
        })
    }

    handleSubmit = (e) => {
        
        e.preventDefault();
        const mode = this.state.avgCalcMode;
        const students = this.props.students;
        let n = 0, total = 0, mark = 0;
        if(mode === 'all'){
            for (let i = 0; i < students.length; i++) total += +students[i].average;
            n = students.length;
        }
        else{ 
            for (let i = 0; i < students.length; i++) {
                if (students[i].selected){
                    n++;
                    total += +students[i].average;
                }
            }
        }

        mark = +(total / n).toFixed(1);

        this.setState({
            avgMark: isNan(mark) ? 0 : mark
        });
    }

    render(){
        return(
            <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                <Group className="form-group">
                    <label htmlFor='avg-calc-select'>Average mark</label>
                    <Select name='avgCalcMode' className="form-control" value={this.state.avgCalcMode} onChange={this.handleChange} id="avg-calc-select">
                        <option value='all'>All students</option>
                        <option value='selectedOnly'>Selected</option>
                    </Select>
                </Group>
                <Group className="form-group">
                    <span id='avg-mark-span'>{this.state.avgMark}</span>
                    <button type='submit' name='sub' className='btn btn-primary'>Calculate</button>
                </Group>
            </form>
        );
    }
}

export default CalcAvgForm;