import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { updateEvent } from '../../actions/events'
import Button from '@material-ui/core/Button'
import EventForm from './EventForm'
import './Events.css'

class Event extends PureComponent {
  state = {
    edit: false,
    // values: EventForm.initialValues,
    id: this.props.event.id
  }

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }


  updateEvent = (event) => {
    // console.log(event)
    event.id = this.state.id
    // console.log(event)
    this.props.updateEvent(event)
    this.toggleEdit()
    }

  componentDidMount() {
  // console.log('EVENT', EventForm)
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
                <img src={event.image} className="event-image" alt='' />
                <p> {event.title} </p>
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
    export default connect(mapStateToProps, { updateEvent })(Event)
