import React, { Component } from 'react';
import './App.css';


class Calculator extends Component {

  constructor (props) {
    super()
    this.state = {
      firstNumb: 0,
      secondNumb: 0,
      result: ''
    }
  }

  addItem(e) {
    e.preventDefault()
    let newResult = Number(this.state.firstNumb) + Number(this.state.secondNumb);
    this.setState(({
      result: newResult
    }))

  }

  setNum1 = (e, num) => {
    this.setState({ firstNumb: e.target.value});
    console.log(num)
  }

  setNum2 = (e, num) => {
    this.setState({ secondNumb: e.target.value});
    console.log(num)
  }


  render() {


    return(
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
        <input type="number"
          name="num1"
          placeholder="Enter your first number"
          value={this.state.num1}
          onChange={ (e) => this.setNum1(e, 'num1') }
        />
          <span>+</span>
          <input type="number"
            name="num2"
            placeholder="Enter your first number"
            value={this.state.num1}
            onChange={ (e) => this.setNum2(e, 'num2') }
          />
          <button onClick={(e)=> this.addItem(e)}>=</button>
    <h3>Addition results go here! {this.state.result}</h3>
      </div>
    </div>
    )
  }
}

export default Calculator;
