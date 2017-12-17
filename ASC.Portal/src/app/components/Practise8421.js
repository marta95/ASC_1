import React from 'react';
import RestClient from '../common/restClient';
import Input from './input';


export default class Practise8421 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            valueOfInput: '',
            augend: 0,
            addend: 0,
            isReady: false,
        }
        this.fetch = this.fetch.bind(this);
        this.show8421 = this.show8421.bind(this);
        this.showExcess = this.showExcess.bind(this);
        this.generateNumber = this.generateNumber.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    componentDidMount() {
        this.fetch();
    }

    fetch() {

         this.setState({
            augend: this.generateNumber(-50, 50).toFixed(2),
            addend: this.generateNumber(-50, 50).toFixed(2)
            });
    }

    generateNumber(low,high){
        return Math.random() * (high - low) + low;
   }

    handleInputChange() {
        this.setState({ valueOfInput: value });
    }

    checkModular(){

    }
    show8421(){
        document.querySelector('.input-wrapper').style.display = 'inline';
        RestClient.get8421(this.state.augend, this.state.addend).then((response) => { 
            
            this.setState({
                isReady: true
            });
            //console.log(response);
        });
    }

    showExcess(){
        document.querySelector('.input-wrapper').style.display = 'inline';
        RestClient.getExcess(this.state.augend, this.state.addend).then((response) => {
            this.setState({
                isReady: true
            });
        });
    }

    render() {
        //if (this.state.isReady)
            //console.log(this.state.augend);
            //console.log(this.state.addend);
        return (
            <div>
                <button onClick={this.show8421}>8421</button>
                
                <button onClick={this.showExcess}>Excess-3</button>
            <div class="input-wrapper">{
                <h1>{this.state.augend}</h1>
            }
                <div>{
                    <h1>{this.state.addend}</h1>
                }
                </div>
                <div>
                    <Input onInputChange={this.handleInputChange} />
                    <button onClick={this.checkModular}>Sprawdź</button>
                </div>
                <div>
                    <Input onInputChange={this.handleInputChange} />
                    <button onClick={this.checkOpposite}>Sprawdź</button>
                </div>
                <div>
                    <Input onInputChange={this.handleInputChange} />
                    <button onClick={this.checkObjective}>Sprawdź</button>
                </div>
                <div>
                    <button onClick={this.getGeneratedNumbers}>Generuj nowe zadanie</button>
                </div>
            </div>
            </div>

        );
    }
}
