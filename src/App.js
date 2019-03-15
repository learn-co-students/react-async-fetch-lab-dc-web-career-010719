import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(res => res.json())
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
