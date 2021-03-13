import React from 'react';
import {Group, Select} from '../styles';

class SortingForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            reverse: false,
            sortOption: 'name',
            isMark: false
        }
    }

    handleChange = (e) => {
        const elem = e.target;
        const name = elem.name;
        const value = name === 'reverse' ? elem.checked : elem.value;
        const id = elem.id; 

        if (id === 'sort-select'){
            this.setState({
                isMark: elem.options[elem.selectedIndex].className.indexOf('mark-opt') !== -1
            });
        }
        
        this.setState({
            [name]: value 
        });       
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.saveSortParams(this.state);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                <Group className="form-group">
                    <label htmlFor="sort-select">Sort by</label>
                    <Select name='sortOption' className="form-control" value={this.sortOption} onChange={this.handleChange} id="sort-select">
                        <option value='name'>Name</option>
                        <option value='surname'>Surname</option>
                        <option value='html' className='mark-opt'>HTML</option>
                        <option value='css' className='mark-opt'>CSS</option>
                        <option value='js' className='mark-opt'>JS</option>
                        <option value='php' className='mark-opt'>PHP</option>
                        <option value='average'>Average mark</option>
                    </Select>
                    </Group>
                    <Group className="form-group form-check-inline">
                    
                        <input 
                            className="form-check-input" 
                            type="checkbox" name='reverse' 
                            checked={this.state.reverse} 
                            onChange={this.handleChange} 
                            id="reverse-order"
                        />
                        <label className="form-check-label" htmlFor="reverse-order">
                            Reverse order
                        </label>
                    </Group>
                    <Group className="form-group">
                        <button type='submit' className='btn btn-primary'>Sort</button>
                    </Group>
            </form>
        );
    }
}

export default SortingForm;