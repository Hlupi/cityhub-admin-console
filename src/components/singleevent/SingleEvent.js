import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getSingleEvent } from '../../actions/events'
import GoogleMapRender from './GoogleMapRender'
import './SingleEvent.css'
import  logo from '../slider/images/cityhub-logo-black.svg'
class SingleEvent extends PureComponent {
  param = this.props.match.params.id

  handleDate = (date) => {
    return date.split('T')[0]
  }

  componentDidMount() {
    this.props.getSingleEvent(this.param)
  }
  
  render() {
    
    

    return(
    <div>

   
{ this.props.event && ( 
    

  <div className="single_event_container">
    <div className="logo_container">
      <img src={logo}  alt='' align="right" className="single_event_logo"/>
    </div>
    <div>
    <h1>{this.props.event.title} </h1>
    <p>{this.props.event.description}</p>
    <p>{this.props.event.address} </p>

    <p>{this.handleDate(this.props.event.startDate)} / {this.handleDate(this.props.event.endDate)} </p>
    </div>
    <div className="photo_container">
    { <img src={this.props.event.image} className="photo_container_img"/> }
    </div>
    <p>Location:</p>
    <GoogleMapRender  data={this.props.event}/>
  </div>
  
  )}

    </div>
      
    )
  }
}

    const mapStateToProps = function (state) {
      return {
        event: state.singleEvent
      }
    }
    export default connect(mapStateToProps, { getSingleEvent })(SingleEvent)

    
