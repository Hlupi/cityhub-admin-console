import React, { PureComponent } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import './Events.css'
import Geocode from "react-geocode"

Geocode.setApiKey("AIzaSyCROzHfzVBykQOiB0CvKeqZV1VaIp7Ux6g")


class EventForm extends PureComponent {
	state = {}


	GeocodeAddress = () => {
		Geocode.fromAddress(this.state.address).then(
			response => {
				const { lat, lng } = response.results[0].geometry.location;
				const data = this.state
				data.lat = +lat
				data.lng = +lng
        data.location = this.props.currentCity
        data.source= 'event'
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
    data.source= 'event'
		await this.props.onSubmit(data)
  }

  console.log('STATE',this.state)
  
  this.setState({
    title: "",
    description: "",
    image: "",
    address: ""
  })

	}

	handleChange = (event) => {
    const {id, value} = event.target

    this.setState({
      [id]: value
    })
  }

	render() {
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
            InputLabelProps={{
              shrink: true,
            }}
            placeholder=""
            value={
              this.state.title
            }
            />
            <br />
            <TextField
            id="description"
            label="Description"
            onChange={ this.handleChange }
            margin="normal"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            placeholder=""
            value={
              this.state.description
            }
            />
            <br />
            <TextField
            id="image"
            label="Image URL"
            onChange={ this.handleChange }
            margin="normal"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            placeholder=""
            value={
              this.state.image
            }
            />
            <br />
            <TextField
            id="address"
            label="Address"
            onChange={ this.handleChange }
            margin="normal"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            placeholder=""
            value={
              this.state.address
            }
            />
            <br />
            <TextField
						type="date"
            id="startDate"
            label="Starts"
            onChange={ this.handleChange }
            margin="normal"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            />
            <br />
            <TextField
						type="date"
            id="endDate"
            label="Ends"
            onChange={ this.handleChange }
            margin="normal"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
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

export default EventForm
