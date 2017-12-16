import React from 'react';
import RestClient from '../common/RestClient';

export default class Practise8421 extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            isReady: false,
        }

        this.getGeneratedNumbers = this.getGeneratedNumbers.bind(this);
    }
    componentDidMount() {
        this.getGeneratedNumbers();
    }
    getGeneratedNumbers() {
        RestClient.getNumbers().then((response) => {
            this.setState({ augend: response.data});
        });

        RestClient.getNumbers().then((response) => {
            this.setState({ addend: response.data, 
            isReady: true});
        });
    }

    render() {
        if(this.state.isReady)
        console.log(this.state.augend);
        console.log(this.state.addend);
        return (
            <div>
                {}           
                 </div>

        );
    }
}
