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
		await this.props.onSubmit(this.state)
	}

	// await this.setState({
	// 	title: "",
	// 	address: "",
	// 	image: "",
	// 	address: "",
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
						type="date"
            id="startDate"
            label="starts"
            onChange={ this.handleChange }
            margin="normal"
            />
            <br />
            <TextField
						type="date"
            id="endDate"
            label="ends"
            onChange={ this.handleChange }
            margin="normal"
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
