import React from 'react';
import Column from './Column';

export default class Table extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            defaultValues: [{
                columnName: 'A',
                aValues: [
                    {
                        field: 'name',
                        type: 'string',
                        value: 'HKK'
                    },
                    {
                        field: 'id',
                        type: 'integer',
                        value: 123456
                    },
                    {
                        field: 'startDate',
                        type: 'date',
                        value: '2019-09-29'
                    }
                ]
            }, {
                columnName: 'B',
                aValues: [
                    {
                        field: 'name',
                        type: 'string',
                        value: ''
                    },
                    {
                        field: 'id',
                        type: 'integer',
                        value: ''
                    },
                    {
                        field: 'startDate',
                        type: 'date',
                        value: ''
                    }
                ]
            }, {
                columnName: 'C',
                aValues: [
                    {
                        field: 'id',
                        type: 'string',
                        value: 'HKK124'
                    },
                    {
                        field: 'Company Name',
                        type: 'integer',
                        value: 'Travelling'
                    },
                    {
                        field: 'rating',
                        type: 'DropDown',
                        value: 'Top'
                    }
                ]
            }, {
                columnName: 'D',
                aValues: [
                    {
                        field: 'id',
                        type: 'string',
                        value: ''
                    },
                    {
                        field: 'Company Name',
                        type: 'integer',
                        value: ''
                    },
                    {
                        field: 'rating',
                        type: 'DropDown',
                        value: ''
                    }
                ]
            }]
        };
        this.updateValuesFromEdit = (value, columnName, field) => {
            let stateData = this.state.defaultValues;
            const idx = stateData.findIndex(ele => ele.columnName === columnName);
            const data = stateData[idx].aValues;
            const fidx = data.findIndex(ele => ele.field === field);
            data[fidx]['value'] = value;

            this.setState({
                defaultValues: stateData
            })

        };
        this.copyDataAtoB = () => {
            const getAdata = this.state.defaultValues.find(ele => ele.columnName === 'A').aValues;
            let stateData = this.state.defaultValues.filter(ele => ele.columnName !== 'B');
            const obj =
            {
                columnName: 'B',
                aValues: getAdata
            };
            let newObj = JSON.parse(JSON.stringify(obj));
            stateData.push(newObj);
            this.setState({
                defaultValues: stateData
            })
        };
        this.copyDataCtoD = () => {
            const getAdata = this.state.defaultValues.find(ele => ele.columnName === 'C').aValues;
            let stateData = this.state.defaultValues.filter(ele => ele.columnName !== 'D');
            const obj =
            {
                columnName: 'D',
                aValues: getAdata
            };
            let newObj = JSON.parse(JSON.stringify(obj));
            stateData.push(newObj);
            this.setState({
                defaultValues: stateData
            })
        };
    }

    render() {
        const { defaultValues } = this.state;
        return (
            <div className="Table">
                <div className="header">
                    <button onClick={this.copyDataAtoB}>A to B</button>
                    <button onClick={this.copyDataCtoD}>C to D</button>
                </div>
                <div className="columns">
                    <div className="column">
                        <Column name="A" defaultValues={defaultValues} updateValuesFromEdit={this.updateValuesFromEdit} />
                    </div>
                    <div className="column">
                        <Column name="B" defaultValues={defaultValues} updateValuesFromEdit={this.updateValuesFromEdit} />
                    </div>
                    <div className="column">
                        <Column name="C" defaultValues={defaultValues} updateValuesFromEdit={this.updateValuesFromEdit} />
                    </div>
                    <div className="column">
                        <Column name="D" defaultValues={defaultValues} updateValuesFromEdit={this.updateValuesFromEdit} />
                    </div>
                </div>
            </div>
        );
    }
};