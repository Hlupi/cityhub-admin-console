import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {getNewInstaPics} from '../../../actions/scraper'
import Button from '@material-ui/core/Button'

class Scraper extends PureComponent {
  handleSubmit = () => {
    console.log("CLICK!!!")
    getNewInstaPics()
  }
  render() {
    return(
      <Button onClick={this.handleSubmit} id='eventButton'>New Instagram Pics</Button>  
    )
  }
}
export default connect(null, {getNewInstaPics})(Scraper)
