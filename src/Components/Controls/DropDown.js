import React from 'react';

export default class DropDown extends React.Component {
    constructor(props) {
        super(props);

    }

    updateValue = (event) => {
        this.props.updateValuesFromEdit(event.target.value, this.props.columnName, this.props.field);
    };

    render() {
        return (
            <div className="DropDown">
                <div>
                    Rating
                </div>
                <select onChange={this.updateValue} value={this.props.defaultValue}>
                    <option value="Top">Top</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                    <option value="Bad">Bad</option>
                </select>
            </div>
        );
    }
};