import React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  textField: {
    display: 'flex',
    margin: theme.spacing.unit,
    width: '50%'
  },
  button: {
    margin: theme.spacing.unit
  }
})

const Form = (props) => (
  <form onSubmit={props.getWeather}>
    <TextField
      className={props.classes.textField}
      label='City Name'
      margin='normal'
      name='city'
      type='text'
      InputLabelProps={{
        required: true,
        color: 'white'
      }}
    />
    <TextField
      className={props.classes.textField}
      label='Country Code'
      margin='normal'
      name='country'
      type='text'
      InputLabelProps={{
        required: true
      }}
    />
    <Button
      className={props.classes.button}
      color='primary'
      type='submit'
      variant='raised'
    >
      Get Weather
    </Button>
  </form>
)

export default withStyles(styles)(Form)
