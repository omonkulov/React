import React, { Component } from 'react';
import axious from 'axious';

export class ApiIndexModule extends Component {
    state = {
        test: ""
    }
    componentDidMount() {
        axious.get('http://localhost:8080/').then(res => {
            const test = res.test;
            this.setState({ test });
        })
    }
    render() {
        return (
            <div>
                <div id="getTest">
                    <h3>Get Request</h3>
                    <p>{this.state.test}</p>
                </div>
            </div>
        )
    }
}

export default ApiIndexModule
