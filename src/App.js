import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'

import Form from './components/Form'
import Title from './components/Title'

class App extends Component {
  render () {
    return (
      <div className='wrapper'>
        <div className='main'>
          <Grid container spacing={0}>
            <Grid item xs={5}>
              <Title />
            </Grid>
            <Grid item xs={7} className='information-container'>
              <Form />
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default App
