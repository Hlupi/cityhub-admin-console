import React, {PureComponent} from 'react'
import GoogleMapRender from './GoogleMapRender'
import '../main/carousel.css'
import logo from '../images/cityhub-logo-black.svg'

export default class Events extends PureComponent {
    state = {}

    render() {
        return (
            <div>
                <img src={logo} className='logoStyle' alt=''/>
                <div className='divSlide'>
                    <GoogleMapRender data={this.props.data.eventsToday} params={this.props.params}/>
                </div>
                <div className='legend'>
                    <img src={this.props.host.Picture} className='hostPic' alt=''/>
                    <h3 className='hostName'>{this.props.host.FirstName}<br/> <span className='cityHub'>CityHub</span></h3>
                     {this.props.data.eventsToday.map((item, index) => (<div key={item.id} className='titleBlock'>
                            <div className='numberLeft'>
                                <p>{index + 1}</p>
                            </div>
                            <div className='textRight'>
                                <h1 className='eventTitle'>{item.title}</h1>
                                <p>{item.description}</p>
                                <p className='eventsStyle'><i>{item.address}</i></p>
                            </div>
                            <div className='lineStyle'></div>
                    </div>))}
                </div>
            </div>
        )
    }
}
