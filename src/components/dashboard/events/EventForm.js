import React, { PureComponent } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import './Events.css'
import Geocode from "react-geocode"

Geocode.setApiKey("AIzaSyCROzHfzVBykQOiB0CvKeqZV1VaIp7Ux6g")


class EventForm extends PureComponent {
	state = {}


	GeocodeAddress = () => {
		console.log(this.state.address)
		Geocode.fromAddress(this.state.address).then(
			response => {
				const { lat, lng } = response.results[0].geometry.location;
				const data = this.state
				data.lat = +lat
				data.lng = +lng
				data.location = this.props.currentCity
				this.props.onSubmit(data)
			},
			error => {
					console.error(error);
			}
		)
	}


	handleSubmit = async (e)  => {
  e.preventDefault()
	if (this.state.address) {
		await this.GeocodeAddress()
	} else {
		const data = this.state
		data.location = this.props.currentCity
		await this.props.onSubmit(data)
	}

	// await this.setState({
	// 	title: "",
	// 	description: '',
	// 	address: "",
	// 	image: "",
	// 	startDate: " ",
	// 	endDate: " ",
	// })

	}

	handleChange = (event) => {
    const {id, value} = event.target

    this.setState({
      [id]: value
    })
  }

	render() {
		// const initialValues = this.props.initialValues || {}
		return (
      <div className="eventForm">
				<h2>Content</h2>
  			<form onSubmit={this.handleSubmit}>
            <TextField
            id="title"
            label="Title"
            onChange={ this.handleChange }
            margin="normal"
						fullWidth
            />
            <br />
            <TextField
            id="description"
            label="Description"
            onChange={ this.handleChange }
            margin="normal"
						fullWidth
            />
            <br />
            <TextField
            id="image"
            label="Image URL"
            onChange={ this.handleChange }
            margin="normal"
						fullWidth
            />
            <br />
            <TextField
            id="address"
            label="Address"
            onChange={ this.handleChange }
            margin="normal"
						fullWidth
            />
            <br />
            <TextField
						type="date"
            id="startDate"
            label="Starts"
            onChange={ this.handleChange }
            margin="normal"
						fullWidth
						// value=" "
            />
            <br />
            <TextField
						type="date"
            id="endDate"
            label="Ends"
            onChange={ this.handleChange }
            margin="normal"
						fullWidth
						// value=" "
            />

            <br />
            <Button variant="raised" type="submit" id='eventButton'>
              Publish
            </Button>
        </form>
      </div>
		)
	}
}

// const mapStateToProps = () => ({  })
//
// export default connect(mapStateToProps, { createEvent })(AddEventForm)

export default EventForm
