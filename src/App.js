import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTracks } from './actions/tracks'

class App extends Component {
  addTrack = () => {
    console.log('Add track... ', this.trackInput.value)
    this.props.onAddTrack(this.trackInput.value)
    this.trackInput.value = ''
  }

  filterTracks = () => {
    console.log('Filter tracks... ', this.filterInput.value)
    this.props.onFilterTrack(this.filterInput.value)
  }

  render() {
    console.log('render... ', this.props)
    return (
      <div>
        <div>
          <input type="text" ref={(input) => this.trackInput = input} />
          <button onClick={this.addTrack}>Add track</button>
        </div>
        <div>
          <input type="text" ref={(input) => this.filterInput = input} />
          <button onClick={this.filterTracks}>Filter track</button>
        </div>
        <div>
          <button onClick={this.props.onGetTracks}>Get tracks</button>
        </div>
        <ul className="list">
          {this.props.tracks.map((e, i) =>
            <li key={i}>{e.name}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({ // MAP state to props
    tracks: state.tracks.filter(v => v.name.includes(state.filterTracks)),
    playlists: state.playlists
  }),
  dispatch => ({
    onAddTrack: (name) => {
      const payload = {
        id: Date.now().toString(),
        name
      }
      dispatch({ type: 'ADD_TRACK', payload: payload })
    },
    onFilterTrack: (name) => {
      dispatch({ type: 'FILTER_TRACK', payload: name })
    },
    onGetTracks: () => {

      dispatch(getTracks())
    }
  })
)(App);
//new test comment