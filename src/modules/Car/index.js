import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './Car.module.css';



class Car extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars : [
        {mark:'BMW', model:'m3',cost:50000},
      {mark:'Audi', model:'RS6',cost:60000},
      {mark:'Dodge', model:'Chelendger',cost:70000},
    ]
  }
  }
  
  render() {
    const {cars} = this.state
    const list = cars.map((elem,index)=>{
      const del = () =>{
        const cars2 = [...this.state.cars]
        cars2.splice(index,1)
        this.setState({cars: cars2})
      }
      return <li className='Car'>{elem.mark} {elem.model} {elem.cost}<button onClick={del}>Del</button></li>
    })
    return (
      <article >
        <div>{list}</div>
      </article>
    );
  }
}

export default Car;
