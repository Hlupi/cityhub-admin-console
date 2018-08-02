import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getEvents,updateEvent } from '../../../actions/events'
import Event from './Event.js'
import './Events.css'
import Collapse from '@material-ui/core/Collapse'
import Button from '@material-ui/core/Button'

class EventsList extends PureComponent {

  state ={
    expanded: false
  }

  componentDidMount() {
    this.props.getEvents()
    }

  handleExpandClick = () => {
      this.setState(state => ({ expanded: !state.expanded }));
    }

  updateEvent = (event) => {
    this.props.updateEvent()
    this.toggleEdit()
    }


  render() {
      const { events } = this.props

      if( events !== null &&
          events !== undefined) {

        const localEvents = events.filter(event=> {return event.location === this.props.currentCity})


        return (
          <div>
            <h2>Content feed</h2>

          <div className="eventsContainer">

            { localEvents.slice(0,4)
              .map(event => {
              return(
                <Event event={event} key={event.id}/>
              )
            })}

          </div>

          <Button
            onClick={this.handleExpandClick}
            id='eventButton'
            >
            Expand section
            </Button>

          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <div className="eventsContainer">

              { localEvents.slice(4,localEvents.length)
                .map(event => {
                return(
                  <Event event={event} key={event.id}/>
                )
              })}

            </div>
          </Collapse>
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
