import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {getNewInstaPics} from '../../../actions/scraper'

class Scraper extends PureComponent {
  handleSubmit = () => {
    console.log("CLICK!!!")
    getNewInstaPics()
  }
  render() {
    return(
      <button onClick={this.handleSubmit}>New Instagram Pics</button>  
    )
  }
}
export default connect(null, {getNewInstaPics})(Scraper)