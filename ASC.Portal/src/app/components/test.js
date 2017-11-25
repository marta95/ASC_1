import React from 'react';
import RestClient from '../common/rest-client';

export default class Test extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            number: [],
            isReady: false,
        }
        this.fetch = this.fetch.bind(this);
    }

    componentDidMount() {
        this.fetch();
    }

    fetch() {
        this.setState({ isReady: false });
        RestClient.getNumbers().then(response => {
            this.setState({
                number : response.data,
                isReady :true
            });
        });
    }

    render() {
        return (<div class="test">
            <h1>{this.state.number}</h1>
        </div>);
    }
}
