import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getEvents,updateEvent } from '../../../actions/events'
import Event from './Event.js'
import './Events.css'

class EventsList extends PureComponent {

  componentDidMount() {
    this.props.getEvents()
    }

  updateEvent = (event) => {
    this.props.updateEvent()
    this.toggleEdit()
    }


  render() {
      const { events } = this.props

      if( events !== null &&
          events !== undefined) {
        return (
          <div>
            <h2>Content feed</h2>

          <div className="eventsContainer">

            { events.filter(event=> {return event.location === this.props.currentCity})
              .map(event => {
              return(
                <Event event={event} key={event.id}/>
              )
            })}

          </div>
          </div>
        )
      } else return (<h1>Loading...</h1>)


    }


  }

  const mapStateToProps = function (state) {
    return {
      events: state.events
    }
  }
  export default connect(mapStateToProps, { getEvents, updateEvent })(EventsList)
