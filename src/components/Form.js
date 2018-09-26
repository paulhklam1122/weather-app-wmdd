import React from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
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
        required: true,
        color: 'white'
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

Form.propTypes = {
  getWeather: PropTypes.string
}

export default withStyles(styles)(Form)
