import React, { Component } from 'react'
import MouseTracker from './MouseTreacker';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            isMounted: false,

        }
    }
    
    

    render() {
        return <>
        <button onClick={()=>{this.setState({isMounted: !this.state.isMounted})}}>Show</button>
        {!this.state.isMounted && <MouseTracker />}</>
    }
}


export default App;
