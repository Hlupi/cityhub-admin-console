import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {withRouter} from 'react-router'
import {userId} from '../../jwt'
import {connect} from 'react-redux'
import logo from '../../images/cityhub-logo-black.svg'

const TopBar = (props) => {
  const { location, history, user } = props

  return (
    <AppBar position="absolute" style={{zIndex:10}} color="inherit">
      <Toolbar>
        <Typography variant="title" color="inherit" style={{flex: 1}} align='left'>
          <img src={logo} alt='' width='50px'/> Admin Console
        </Typography>
        {
          user &&
          <Button color="inherit">{ user.firstName }</Button>

        }

        <Button color="inherit" onClick={() => history.push('/feed')}>Feed</Button>

        <Button color="inherit" onClick={() => history.push('/dashboard')}>Dashboard</Button>

        {
          location.pathname.indexOf('signup') > 0 &&
          <Button color="inherit" onClick={() => history.push('/login')}>Login</Button>
        }

        {
          user &&
          location.pathname.indexOf('events/') > 0 &&
          <Button color="inherit" onClick={() => history.push('/logout')}>Log out</Button>
        }
        {
          !user &&
          location.pathname.indexOf('events/') > 0 &&
          <Button color="inherit" onClick={() => history.push('/login')}>Login</Button>
        }
        {
          /console$/.test(location.pathname) &&
          user &&
          <Button color="inherit" onClick={() => history.push('/logout')}>Log out</Button>
        }
      </Toolbar>
    </AppBar>
  )
}

const mapStateToProps = state => ({
  user: state.currentUser && state.users &&
    state.users[userId(state.currentUser.jwt)]
})

export default withRouter(
  connect(mapStateToProps)(TopBar)
)
