import React, { Component } from 'react';
import './App.css';
import Square from './components/Square';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      number:0,
      square:undefined,
      msg:undefined
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log("number pressed is:",e.target.value);
    this.setState({number:e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.state.number)
    fetch('/api/square',{
      method:'POST',
      body: JSON.stringify({number:this.state.number}),
      headers: {"Content-Type": "application/json"}
    })
    .then(response => response.json())
    .then(data => {
      console.log("data==>",data)
      return this.setState({
        msg:data.msg,
        square:data.result
      })
    })
  }
  
  render() {
    const squareComponent = this.state.square === undefined ? null: <Square msg={this.state.msg}/>
    return (
      <div className="App">
        Enter Number to find Square 
        <form className="form" onSubmit={this.handleSubmit}>
          <label>
            Number:
            <input className="inputNumber" type="number" name="number" onChange={this.handleChange} />
          </label>
          <input className="submit" type="submit" value="Submit" />
        </form>
        <div>
          {squareComponent}
        </div>
      </div>
    );
  }
}

export default App;
