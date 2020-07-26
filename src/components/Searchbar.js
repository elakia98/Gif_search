import React, { Component } from 'react'

export class Searchbar extends Component {
    constructor(){
        super();
        this.state={term:''}
    }
    onInputChange(term){
        this.setState({term});
        this.props.onTermChange(term);
    }
    render() {
        return (
            <div className="search">
                <input placeholder="Enter text to search" onChange={event=>this.onInputChange(event.target.value)} />
            </div>
        )
    }
}

export default Searchbar;
