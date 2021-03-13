import React from 'react';

const btnStyles ={
    background: '#FF6262',
    color: '#fff'
}

class DeleteButton extends React.Component{
    constructor(props){
        super(props);
    }

    handleClick = () =>{
        this.props.deleteCallback(this.props.student);
    }

    render(){
        return(
            <button className='btn' style={btnStyles} onClick={this.handleClick}>Delete</button>
        );
    }
}

export default DeleteButton;