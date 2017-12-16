import React from 'react';
import RestClient from '../common/RestClient';
import Homepage from './homepage';
import Practise8421 from './Practise8421';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            //number: [],
            //isReady: false,
            params: [],
            location: 'asc'
        }
        //this.fetch = this.fetch.bind(this);
        this.onHashChange = this.onHashChange.bind(this);
        this.navigate = this.navigate.bind(this);
        // Handle browser navigation events
        window.addEventListener('hashchange', this.onHashChange, false);

    }

    navigate(location) {
        this.setState((prevState, props) => { location: location },
            () => {
                window.location.hash = "/" + location;
            });
    }

    onHashChange() {
        let loc = window.location.hash.replace(/\/|#/g, '');
        if (loc == "")
            window.location.hash = '#/asc';

        this.setState({ location: window.location.hash });
    }

    componentDidMount() {
        this.onHashChange();
    }

    // fetch() {
    //     this.setState({ isReady: false });
    //     console.log("sdsf");
    //     RestClient.getNumbers().then(response => {
    //         console.log("dsfs");
    //         this.setState({
    //             number: response.data,
    //             isReady: true
    //         });
    //     });
    // }

    //render() {
    //     return (
    //         <div>{
    //             this.state.isReady ?
    //                 console.log(this.state.number) :
    //                 this.state.number.map(number => {
    //                     return
    //                     <h1>{number.numb}</h1>
    //                 })
    //       }</div>);
    // }
    render() {
        let component = '';
        if (this.state.location.startsWith('#/theory')) {
            // component = <Theory
            //     onUpdate={this.navigate}
            // />
        }
        // else if (this.state.location.startsWith('#/trails?id=')) {
        //     let paramFilters = this.state.location.split('=');
        //     paramFilters.splice(0, 1); //remove first element
        //     component = <TrailDetails
        //         id={paramFilters[0]}
        //         navigate={this.navigate}
        //     />
        // }

        else if (window.location.hash.startsWith('#/example')) {
            // component = <Example
            //onUpdate={this.navigate}
            // />


        } else if (window.location.hash.startsWith('#/practise/8421')) {
            component = <Practise8421
                onUpdate={this.navigate}
            />

        } else if (window.location.hash.startsWith('#/practise/excess')) {
            //component = <PractiseExcess
            //    onUpdate={this.navigate}
            // />
            // }else
            //component = <PractiseDashboard 
            // onUpdate={this.navigate} />
        } else {
            component = <Homepage
                onUpdate={this.navigate}
            />
        }

        return (
            <div className="app">
                {component}
            </div>
        );

    }

}


