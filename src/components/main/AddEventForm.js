import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {createEvent} from '../../actions/events'
import {TextField, Button} from 'material-ui';


class AddEventForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
    e.preventDefault()
		this.props.createEvent(this.state)
	}

	handleChange = (event) => {
    const {id, value} = event.target

    this.setState({
      [id]: value
    })
  }

	render() {
		return (
      <div className="addEventForm">
  			<form onSubmit={this.handleSubmit}>
            <TextField
            id="title"
            label="title"
            onChange={ this.handleChange }
            margin="normal"
            />
            <br />
            <TextField
            id="description"
            label="description"
            onChange={ this.handleChange }
            margin="normal"
            />
            <br />
            <TextField
            id="image"
            label="image"
            onChange={ this.handleChange }
            margin="normal"
            />
            <br />
            <TextField
            id="address"
            label="address"
            onChange={ this.handleChange }
            margin="normal"
            />
            <br />
            <TextField
            id="startDate"
            label="starts"
            onChange={ this.handleChange }
            margin="normal"
            />
            <br />
            <TextField
            id="endDate"
            label="ends"
            onChange={ this.handleChange }
            margin="normal"
            />
            
            <br />
            <Button variant="outlined" type="submit">
              Post
            </Button>
        </form>
      </div>
		)
	}
}

const mapStateToProps = () => ({  })

export default connect(mapStateToProps, { createEvent })(AddEventForm)