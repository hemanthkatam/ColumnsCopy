import React from 'react';

export default class TextBox extends React.Component {
    constructor(props) {
        super(props);
    }

    updateValue = (event) => {
        this.props.updateValuesFromEdit(event.target.value, this.props.columnName, this.props.field);
    };

    render() {
        return (
            <div className="TextBox">
                <div>
                    {this.props.fieldName}
                </div>
                <div>
                    <input type="text" name="fname" value={this.props.defaultValue} onChange={this.updateValue}></input>
                </div>

            </div>
        );
    }
};