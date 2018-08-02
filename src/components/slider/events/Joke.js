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
                    <img src={this.props.host.Picture} className='hostPic' alt=''/>
                    <h3 className='hostName'>{this.props.host.FirstName}<br /> <span className='cityHub'>CityHub</span></h3>
                    
                    <div className='speech-bubble'>
                        <h1>{this.props.data.title}</h1>
                        <p className='jokeText'>{this.props.data.description}</p>
                        <div className="speech-bubble-ds-arrow"></div>
                    </div>
                </div>
            </div>
        )
    }
}
