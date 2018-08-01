import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getSingleEvent } from '../../actions/events'
import GoogleMapRender from './GoogleMapRender'
import './SingleEvent.css'
class SingleEvent extends PureComponent {
  param = this.props.match.params.id

  handleDate = (date) => {
    console.log(date)
    return date.split('T')[0]
  }

  componentDidMount() {
    this.props.getSingleEvent(this.param)
  }
  
  render() {
    
    

    return(
    <div>

   
{ this.props.event && ( 
    

  <div>

    <p>{this.props.event.title} </p>
    <p>{this.props.event.description}</p>
    <p>{this.props.event.address} </p>

    <p>{this.handleDate(this.props.event.startDate)} / {this.handleDate(this.props.event.endDate)} </p>
    <div className="photo_container">
    { <img src={this.props.event.image} className="photo_container_img"/> }
    </div>
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

    
