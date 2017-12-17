import React from 'react';
import RestClient from '../common/restClient';

export default class Homepage extends React.Component {
    
    navigateToTheory(e) {
        this.props.onUpdate("theory");
    }

    navigateToExamples(e) {
        this.props.onUpdate("example");
    }

    navigateToPractise8421(e) {
        this.props.onUpdate("practise/8421");
    }

    navigateToPractiseExcess(e) {
        this.props.onUpdate("practise/excess");
    }

    render() {
        return (
            <div>
                <button onClick={this.navigateToTheory.bind(this)}
                > Teoria</button>


                <button onClick={this.navigateToExamples.bind(this)}
                > Przykłady</button>


                <button onClick={this.navigateToPractise8421.bind(this)}
                > Sprawdź się w 8421</button>


                <button onClick={this.navigateToPractiseExcess.bind(this)}
                > Sprawdź się w Excess-3</button>
            </div>
                );
    }
}