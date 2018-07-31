import React, {PureComponent} from 'react'
import GoogleMapRender from './GoogleMapRender'
import '../main/carousel.css'
import logo from '../images/cityhub-logo-black.svg'

export default class Events extends PureComponent {
    state = {}

    render() {
        console.log(this.props.data.eventsToday)
        return (
            <div>
                <img src={logo} className='logoStyle' alt=''/>
                <div className='divSlide'>
                    <GoogleMapRender data={this.props.data.eventsToday}/>
                </div>
                <div className='legend'>
                     {this.props.data.eventsToday.map(item => (<div key={item.id}>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p><br /><hr />
                    </div>))}
                </div>
            </div>
        )
    }
}
