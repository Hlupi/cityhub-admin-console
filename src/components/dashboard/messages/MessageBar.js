import React, { PureComponent } from 'react'
import './MessageBar.css'
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';

class MessageBar extends PureComponent {

  render() {
    return (
      <div id="container">
        <div id="body"></div>
        <div id="footer">MESSAGE</div>
      </div>
    )
  }
}

export default MessageBar
