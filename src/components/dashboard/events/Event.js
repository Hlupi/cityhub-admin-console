import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { updateEvent, deleteEvent } from '../../../actions/events'
import Button from '@material-ui/core/Button'
import EventForm from './EventForm'
import './Events.css'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class Event extends PureComponent {
  state = {
    edit: false,
    id: this.props.event.id
  }

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }


  updateEvent = (event) => {
    event.id = this.state.id
    this.props.updateEvent(event)
    this.toggleEdit()
    }

  deleteEvent = (event) => {
    event.id = this.props.event.id
    this.props.deleteEvent(event)
  }


    render() {
      const {event} = this.props

      const timeOld = event.startDate
      const newTime = JSON.stringify(timeOld)
      const startTime = newTime.slice(1, 11)

      const timeOldEnd = event.endDate
      const newTimeEnd = JSON.stringify(timeOldEnd)
      const endTime = newTimeEnd.slice(1, 11)

      if (event !== undefined &&
          event !== null) {
            return (
              <div className="events-list-item">
                <p> {event.title} </p>
                {event.image && <img src={event.image} className="event-image" alt='' />}
                <p> {event.description} </p>
                <p> {event.address} </p>
                {timeOld !== null && <p>{startTime} – {endTime}</p>}

                {
                      !this.state.edit &&
                      <Button
                      variant="raised"
                      onClick={this.toggleEdit}
                      id='eventButton'
                      >
                      Edit
                      </Button>

                    }

                    <IconButton onClick={this.deleteEvent} aria-label="Delete" id="deleteButton">
                      <DeleteIcon />
                    </IconButton>

                    {
                        this.state.edit &&
                        <EventForm initialValues={event} onSubmit={this.updateEvent}/>
                    }

                  </div>)
              } else return (<h1>Loading...</h1>)

              }




    }

    const mapStateToProps = function (state) {
      return {
        events: state.events
      }
    }
    export default connect(mapStateToProps, { updateEvent, deleteEvent })(Event)
