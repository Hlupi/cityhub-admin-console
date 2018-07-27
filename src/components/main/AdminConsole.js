import React, {PureComponent} from 'react'
import {getEvents} from '../../actions/events'
import {getInstagram} from '../../actions/instagram'
import {getUsers} from '../../actions/users'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import AddEventForm from './AddEventForm'

class AdminConsole extends PureComponent {
  componentDidMount() {

    this.props.getEvents()
    this.props.getInstagram()

    if (this.props.authenticated) {
      if (this.props.users === null) this.props.getUsers()
    }
  }  

  render() {
    const {users} = this.props

    if (users !== null) {
      return (
        <div>
          <h1>City Hub Console</h1>
          <button onClick={this.props.getEvents}>Get new events</button>
          <AddEventForm />
        </div>
      )
    }

    if (users === null || users === undefined) {
      return (
        <div>
          <h1>Please login to access the console</h1>
          <Link to="/login">Login</Link>
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
  events: state.events === null ?
    null : Object.values(state.events).sort((a, b) => b.id - a.id)
})

export default connect(mapStateToProps, {getUsers, getEvents, getInstagram})(AdminConsole)