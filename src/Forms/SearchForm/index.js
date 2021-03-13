import React from 'react';
import {Group} from '../styles';

class SearchForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filterText: ''
        }
    }

    handleChange = (e) =>{
        this.setState({
            filterText: e.target.value
        });
        
        e.preventDefault();
        this.props.saveFilterText(this.state.filterText);
    }

    render(){
        return(
            <form className="form-inline" onKeyUp={this.handleChange}>
                <Group className="form-group form-group-inline">
                    <input type="text" value={this.state.filterText} onChange={this.handleChange} className="form-control" id="searchBar" placeholder="Search for..."/>
                </Group>
            </form>
        );
    }
}

export default SearchForm;