import React from 'react';

const btnStyles ={
    background: '#7BD050',
    color: '#fff'
}

class SelectButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selected: false
        };
    }

    handleClick = () =>{
        this.setState({
            selected: !this.state.selected
        });
        this.props.selectCallback(this.props.student.id);
    } 

    render(){
        return(
           <button className='btn' onClick={this.handleClick} style={btnStyles}>
               {this.props.student.selected ? 'Selected' : 'Select'}
            </button>
        );
    }
}

export default SelectButton;