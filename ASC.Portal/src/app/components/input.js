import React from 'react';

export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueOfInput: '',
        }

    }

    render() {
        return (
            <div>
                <input type="text" id="value"
                    value={this.state.valueOfInput}
                    onChange={this.handleChange}>
                </input>
            </div>
        )
    }
}