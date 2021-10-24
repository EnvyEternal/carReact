import React, { Component } from 'react'

export default class MouseTracker extends Component {
    constructor(props){
        super(props)
        this.state = {
            x: 0,
            y: 0,
        }
    }
    moveCat = () => { window.addEventListener('mousemove', (e)=>{
        this.setState({x: e.clientX, y: e.clientY})
        
    })}
    componentDidMount(){
        window.addEventListener('mousemove', this.moveCat)
    }
    componentWillUnmount() {
        window.removeEventListener('mousemove', this.moveCat)
    }
    
    render() {
        return (
            <div style={{position: 'relative', height: '100vh'}}>
                <img style={{position:'absolute', top: this.state.y, left:this.state.x}} src='https://e7.pngegg.com/pngimages/151/483/png-clipart-the-waving-cat-cats-paw-cat.png' alt='cat'/>
            </div>
        )
    }
}
