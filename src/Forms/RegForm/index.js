import React from 'react';
import {Group} from '../styles';


class RegForm extends React.Component{
    constructor(props){
        super(props);
        this.marksObj = {
            html: 0,
            css: 0,
            js: 0,
            php: 0
        };

        this.state = {
            name: '',
            surname: '',
            marks:this.marksObj,
            average: 0
        }
    }

    onChange = (e) => {
        const elem = e.target;
        const {value, name} = elem;
        const classes = elem.className;

        if (classes.indexOf('mark-inp') !== -1){
            this.marksObj[name] = +value;
            this.setState({
                marks: this.marksObj
            });
        }
        else{ 
            this.setState({
                [name]:value
            });
        }

        const av_mark = (Object.values(this.state.marks).reduce((prev, cur) => cur + prev) / Object.values(this.state.marks).length).toFixed(1);

        this.setState({ 
            average: av_mark
        });
    }

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.onChange(this.state);
        this.marksObj = {
            html: 0,
            css: 0,
            js: 0,
            php: 0
        };
        this.setState({
            name: '',
            surname: '',
            marks: this.marksObj,
            average: 0
        });
    }

    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <Group className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input onChange={this.onChange} type="text" value={this.state.name} required className="form-control" id="name" name='name' placeholder="Enter name"/>
                </Group>
                <Group className="form-group">
                    <label htmlFor="surname">Surname:</label>
                    <input onChange={this.onChange} type="text" value={this.state.surname} required className="form-control" id="surname" name='surname' placeholder="Enter surname"/>
                </Group>
                <Group className="input-group mb-2">
                    <span className="input-group-text">HTML: </span>
                    <input onChange={this.onChange} value={this.state.marks.html} type="number" name='html' required min='0' max='12' className="form-control mark-inp" placeholder="mark"/>
                </Group>          
                <Group className="input-group mb-2">
                    <span className="input-group-text">CSS: </span>
                    <input onChange={this.onChange} value={this.state.marks.css} type="number" name='css' required min='0' max='12' className="form-control mark-inp" placeholder="mark"/>
                </Group>
                <Group className="input-group mb-2">
                    <span className="input-group-text">JS: </span>
                    <input onChange={this.onChange} value={this.state.marks.js} type="number" name='js' required min='0' max='12' className="form-control mark-inp" placeholder="mark"/>
                </Group>   
                <Group className="input-group mb-2">
                    <span className="input-group-text">PHP: </span>
                    <input onChange={this.onChange} value={this.state.marks.php} type="number" name='php' required min='0' max='12' className="form-control mark-inp" placeholder="mark"/>
                </Group>
                <Group className="form-group">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </Group>    
            </form>
        );
    }
}

export default RegForm;