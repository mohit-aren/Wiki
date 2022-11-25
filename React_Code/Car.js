import React from 'react'

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Maruti",
      model: "DZire",
      color: "blue",
      year: 2022, 
      cost: 10000
    };
  }
  changeColor = () => {
    this.setState({brand: "Suzuki", model: "Dzire", color: "blue", year: 2022, cost: this.state.cost+1000});
  }
 render() {
    return (
      <div>
        <h1>My {this.state.brand} car</h1>
        <p>
          It is of {this.state.color} color and model: 
          {this.state.model},&nbsp; 
          from:  {this.state.year} &nbsp; and costs: {this.state.cost}
        </p>
        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
      </div>
    );
  }
}

export default Car;
