import React, {PureComponent} from 'react'
import {getEvents, createEvent, updateMessage} from '../../../actions/events'
// import {updateMessage} from '../../../actions/events'
import {getInstagram} from '../../../actions/instagram'
import {getUsers} from '../../../actions/users'
import {connect} from 'react-redux'
import EventForm from '../events/EventForm'
import MessageForm from '../messages/MessageForm'
import EventsList from '../events/EventsList'
import Grid from '@material-ui/core/Grid';
import InstagramConsole from '../instagram/InstagramConsole'
import './AdminConsole.css'
import logo from '../images/cityhub-logo-black.svg'
import MessageBar from '../messages/MessageBar'
import Button from '@material-ui/core/Button'

class AdminConsole extends PureComponent {

  createEvent = (event) => {
    this.props.createEvent(event)
  }

  updateMessage = async (message) => {
    const {users} = this.props

    if (await users !== null) {
      const user = Object.keys(users)
      const city = this.props.users[+user[0]].city
      message.city = city
      this.props.updateMessage(message)
    } else {
      console.log("not working")
    }


  }

  componentDidMount() {

    this.props.getEvents()
    this.props.getInstagram()

    if (this.props.authenticated) {
      if (this.props.users === null) this.props.getUsers()
    }
  }

  render() {


    const {users, history} = this.props


    if (users !== null) {
      const user = Object.keys(users)
      const currentCity = this.props.users[+user[0]].city
      return (
        <div>

          {/* <button onClick={this.props.getEvents}>Get new events</button> */}
          <div className='header'>
            <img src={logo} width='200px' alt=''/>
            <h1>DASHBOARD</h1>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={6}>
                <MessageForm onSubmit={this.updateMessage}/>
              </Grid>

              <Grid item xs={12} sm={6}>
                <EventForm onSubmit={this.createEvent} currentCity={currentCity}/>
              </Grid>

              <Grid item xs={12} sm={6}>
                <InstagramConsole instagram={this.props.instagram} currentCity={currentCity}/>
              </Grid>

              <Grid item xs={12} sm={6}>
                <EventsList currentCity={currentCity}/>
              </Grid>

            </Grid>
          </div>

          <MessageBar currentCity={currentCity}/>
        </div>
      )
    }

    if (users === null || users === undefined) {
      return (
        <div className="else">
          <h1>Please login to access the console</h1>
          <Button
            variant="raised"
            onClick={() => history.push(`/login`)}
            id='eventButton'>Log in</Button>
        </div>
      )
    }




    else return (
      <h1>How did you get here</h1>
    )

  }
}

const mapStateToProps = state => ({
  authenticated: state.currentUser !== null,
  users: state.users === null ? null : state.users,
  instagram: state.instagram === null ? null : state.instagram,
  events: state.events === null ?
    null : Object.values(state.events).sort((a, b) => b.id - a.id)

})

export default connect(mapStateToProps, {getUsers, getEvents, getInstagram, createEvent, updateMessage})(AdminConsole)
