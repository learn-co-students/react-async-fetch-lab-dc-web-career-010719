// create your App component here
import React, {Component} from 'react'

class App extends Component {

  state = {
    astronauts: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(data => {
      this.setState({
        astronauts: data.people
      }, ()=>console.log(this.state.astronauts))
    })
  }

  render() {
    return (
      <div>
        <h2>Astronauts:</h2>
        {this.state.astronauts.map((astro => {
          return (
            <React.Fragment>
              <h3>Name: {astro.name}</h3>
              <p>Craft: {astro.craft}</p>
              <br />
            </React.Fragment>
          )
        }))}
      </div>
    )
  }
}

export default App
