import React, {PureComponent} from 'react'
import {getInstagram, updateStatus} from '../../actions/instagram'
import {getUsers} from '../../actions/users'
import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'

import './instagram.css'

// import {Paper, Card, CardMedia, Typography, CardActions, CardContent, Button} from 'material-ui'

class InstagramConsole extends PureComponent {

  state = {
    selectedItem: null
  }

  componentDidMount() {
    this.props.getInstagram()
    if (this.props.authenticated) {
      if (this.props.users === null) this.props.getUsers()
    }
  }

  handleClick(item) {
    let response
    if(item.status === "declined"){
      response = "accepted"
    } 
    if(item.status === "accepted"){
      response = "declined"
    }

    this.props.updateStatus(item.mediaId, response)
  }

  render() {

    const {instagram, users} = this.props

    if (instagram !== undefined && 
        instagram !== null &&
        instagram.hashtags !== undefined &&
        instagram.hashtags !== null ) {
      return (
        <div className="instagramContainer">
          
          {instagram.hashtags
            .sort(function(a, b) {
              var statusA = a.status.toUpperCase();
              var statusB = b.status.toUpperCase();
              if (statusA < statusB) {
                return 1;
              }
              if (statusA > statusB) {
                return -1;
              }
              return 0;
              })
            .map(image => {
              let bindItem = this.handleClick.bind(this, image);

              return (
                <div className="instagramItem" key={image.id}>
                  <div className={image.status}><img src={image.displayUrl} className="instagramImage" /></div>
                  <div className="instagramStatus"><p>{image.status}</p></div>
                  <div className="instagramButton"><button onClick={bindItem}>Toggle</button></div>
                </div>
              )
          })}

        </div>  
      )
    }

    
    // Default 
    return (<h1>No Instagram Photos!</h1>)
  }
}

const mapStateToProps = state => ({
  authenticated: state.currentUser !== null,
  users: state.users === null ? null : state.users,
  events: state.events === null ?
    null : Object.values(state.events).sort((a, b) => b.id - a.id)
})

export default connect(mapStateToProps, {getInstagram, updateStatus, getUsers})(InstagramConsole)