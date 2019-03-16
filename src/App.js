// create your App component here
import React from 'react'

const People = ({craft,name}) => <p>{name} in {craft}</p>

class App extends React.Component {
  componentDidMount() {
    fetch(`http://api.open-notify.org/astros.json`)
    .then(res=>res.json())
    .then(json=>this.setState({people: json.people}))
  }
  state = {people: []}
  render() {
    return(<div>{this.state.people.map(People)}</div>)
  }
}

export default App
