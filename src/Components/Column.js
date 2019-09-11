import React from 'react';
import TextBox from './Controls/TextBox';
import DateField from './Controls/DateField';
import DropDown from './Controls/DropDown';

export default class Column extends React.Component {
    constructor(props) {
        super(props);

    }

    getValues = (defaultValues, name) => {
        const findValues = defaultValues.find(ele => ele.columnName === name);
        if (findValues && findValues.aValues && findValues.aValues.length > 0) {
            const controlsFields = findValues.aValues.map(
                (ele, index) => {
                    if (ele.type === 'string') {
                        return (
                            <TextBox fieldName={ele.field} field={ele.field} defaultValue={ele.value} key={index} updateValuesFromEdit={this.props.updateValuesFromEdit} columnName={this.props.name} />
                        )
                    } else if (ele.type === 'integer') {
                        return (
                            <TextBox fieldName={ele.field} field={ele.field} defaultValue={ele.value} key={index} updateValuesFromEdit={this.props.updateValuesFromEdit} columnName={this.props.name} />
                        )
                    } else if (ele.type === 'date') {
                        return (
                            <DateField fieldName={ele.field} field={ele.field} defaultValue={ele.value} key={index} updateValuesFromEdit={this.props.updateValuesFromEdit} columnName={this.props.name} />
                        )
                    } else if (ele.type === 'DropDown') {
                        return (
                            <DropDown fieldName={ele.field} field={ele.field} defaultValue={ele.value} key={index} updateValuesFromEdit={this.props.updateValuesFromEdit} columnName={this.props.name} />
                        )
                    }
                }
            );
            return controlsFields;
        }

    }

    render() {
        const { defaultValues, name } = this.props;
        const getDefaultValues = this.getValues(defaultValues, name);
        return (
            <div className="Column">
                {this.props.name}
                {getDefaultValues}
            </div>
        );
    }
};