import React, { PureComponent } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class MessageForm extends PureComponent {
  state = {}

  handleSubmit = (e)  => {
  e.preventDefault()
	this.props.onSubmit(this.state)
	}

  handleChange = (event) => {
    const {id, value} = event.target

    this.setState({
      [id]: value
    })
  }

  render() {
    return(
      <div>
        <h2>Messagebar</h2>
        <form onSubmit={this.handleSubmit}>
          <TextField
          id='text'
          label='Text'
          onChange={ this.handleChange }
          margin="normal"/>
          <br />
          <Button variant="raised" type="submit" id='eventButton'>
            Publish
          </Button>
        </form>
      </div>
    )
  }
}

export default MessageForm
