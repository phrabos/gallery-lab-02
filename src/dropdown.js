import React from 'react';

export default class Dropdown extends React.Component {
    render() {
        return (
    
            <select
            value={this.props.value}
            onChange={this.props.handleChange} 
            >
                <option value=''>- Choose Something -</option> 
                {this.props.options.map(creature => 
                    <option value={creature}>{creature}</option>
                    )}
            </select>

        )
    }
}