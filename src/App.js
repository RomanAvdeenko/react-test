import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    console.log('render... ', this.props.testStore);
    return (
      <div>
        <input type="text" className="trackInput" />
        <button className="addTrack">Add track</button>
        <ul className="list">
          {this.props.testStore.map((e, i) =>
            <li key={i}>{e}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({ // map state to props
    testStore: state
  }),
  dispatch => ({})
)(App);
