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
        console.log("sdsf");
        RestClient.getNumbers().then(response => {
            console.log("dsfs");
            this.setState({
                number: response.data,
                isReady: true
            });
        });
    }

    render() {
        return (
            <div>{
                this.state.isReady ?
                    console.log(this.state.number) :
                    this.state.number.map(number => {
                        return
                        <h1>{number.numb}</h1>
                    })
          }</div>);
    }

}
