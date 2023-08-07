// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  randomNumber = () => Math.ceil(Math.random() * 100)

  onClick = () => {
    const random = this.randomNumber()
    this.setState({count: random})
  }

  render() {
    const {count} = this.state
    const randomValue = count

    return (
      <div className="card">
        <h1 className="heading">Random Number</h1>
        <p>Generate a random number in the range of 0 to 100</p>
        <button type="button" onClick={this.onClick}>
          Generate
        </button>
        <div>
          <p className="para">{randomValue}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
