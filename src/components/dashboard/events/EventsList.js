import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getEvents,updateEvent } from '../../../actions/events'
import Event from './Event.js'
import './Events.css'

class EventsList extends PureComponent {
  state = {
    edit: false,
    selectedItem: null
  }

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  componentDidMount() {
    this.props.getEvents()
    }

  handleClick(id) {
    this.setState({ selectedItem: id })
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

            { events.map(event => {
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
