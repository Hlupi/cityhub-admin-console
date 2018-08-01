import React, {PureComponent} from 'react'
import '../main/carousel.css'
import logo from '../images/cityhub-logo-black.svg'

export default class Joke extends PureComponent {
    state = {}

    render() {
        return (
            <div>
                <img src={logo} className='logoStyle' alt=''/>
                <div className='divSlide'>
                    <img src={this.props.data.image} className='instaImage' alt=''/>
                </div>

                <div className='legend'>
                    <div className='speech-bubble-ds'>
                        <h1>{this.props.data.title}</h1>
                        <p className='jokeText'>{this.props.data.description}</p>
                        <div className="speech-bubble-ds-arrow"></div>
                    </div>
                </div>
            </div>
        )
    }
}
