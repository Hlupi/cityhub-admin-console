import React, { PureComponent } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class EventForm extends PureComponent {

  render() {
    return(
      <div>
        <h2>MessageBar</h2>
        <form>
          <TextField
          id='text'
          labelt='text'
          onChange={}/>
        </form>
      </div>
    )
  }
}
