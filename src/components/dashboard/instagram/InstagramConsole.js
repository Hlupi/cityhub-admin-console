import React, {PureComponent} from 'react'
import {getInstagram, updateStatus} from '../../../actions/instagram'
import {getUsers} from '../../../actions/users'
import {connect} from 'react-redux'
import './instagram.css'
import Collapse from '@material-ui/core/Collapse'
import Switch from '@material-ui/core/Switch'
import Button from '@material-ui/core/Button'

class InstagramConsole extends PureComponent {

  state = {
    selectedItem: null,
    expanded: false
  }

  componentDidMount() {
    this.props.getInstagram()
    if (this.props.authenticated) {
      if (this.props.users === null) this.props.getUsers()
    }
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
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

    const {instagram} = this.props

    if (instagram !== undefined &&
        instagram !== null &&
        instagram.hashtags !== undefined &&
        instagram.hashtags !== null ) {

    const instagramPhotos = instagram.hashtags
      .filter(image => {return image.location === this.props.currentCity})
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

      return (
        <div>
        <h2>Insta feed</h2>
        <div className="instagramContainer">

          {instagramPhotos.slice(0,4)
            .map(image => {
              let bindItem = this.handleClick.bind(this, image);

              return (
                <div className="instagramItem" key={image.id}>
                  <div className={image.status}><img src={image.displayUrl} className="instagramImage" alt=''/></div>
                  <div className="instagramStatus"><p>{image.status}</p></div>
                  <div className="instagramButton"><Switch onClick={bindItem} />Toggle</div>
                </div>
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
          <div className="instagramContainer">

            {instagramPhotos.slice(4, instagramPhotos.length)
              .map(image => {
                let bindItem = this.handleClick.bind(this, image);

                return (
                  <div className="instagramItem" key={image.id}>
                    <div className={image.status}><img src={image.displayUrl} className="instagramImage" alt=''/></div>
                    <div className="instagramStatus"><p>{image.status}</p></div>
                    <div className="instagramButton"><Switch onClick={bindItem} />Toggle</div>
                  </div>
                )
            })}

          </div>
        </Collapse>

        </div>
      )
    }


    // Default
    return (<h1>No Instagram Photos!</h1>)
  }
}

const mapStateToProps = state => ({
  authenticated: state.currentUser !== null,
  events: state.events === null ?
    null : Object.values(state.events).sort((a, b) => b.id - a.id)
})

export default connect(mapStateToProps, {getInstagram, updateStatus, getUsers})(InstagramConsole)
