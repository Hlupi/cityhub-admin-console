import React, { PureComponent } from 'react'
import './MessageBar.css'
import {connect} from 'react-redux'
import {getMessages} from '../../../actions/events'
import Marquee from 'react-smooth-marquee'


class MessageBar extends PureComponent {

  componentDidMount(){
    this.props.getMessages(this.props.currentCity)
  }

  render() {

    const { messages } = this.props

      if ( 
      messages !== null &&
      messages !== undefined && 
      messages.text !== null &&
      messages.text !== undefined &&
      messages.text !== "" &&
      messages.text !== " "
      ) {
          return (
            <div id="container">
              <div id="header"></div>
              <div id="body"></div>
              <div id="footer"><Marquee>{messages.text}</Marquee></div>
            </div>
          )
      } 
      else return null
    }
  }

const mapStateToProps = function (state) {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps, {getMessages})(MessageBar)
