import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'

class App extends Component {
  render () {
    return (
      <div className='wrapper'>
        <div className='main'>
          <Grid container spacing={0}>
            <Grid item xs={5}>
            </Grid>
            <Grid item xs={7} className='information-container'>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default App
