import React from 'react'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      peopleInSpace: []
    }
  }


  componentDidMount() {
    fetch(`http://api.open-notify.org/astros.json`)
    .then(res => res.json())
    .then(response => this.setState({
      peopleInSpace: response.people
    }))
  }

  render(){
    return <h1>Hello World</h1>
  }
}