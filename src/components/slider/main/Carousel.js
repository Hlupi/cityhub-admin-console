import  React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './carousel.css'
import Instagram from '../instagram/Instagram'
import Event from '../events/Event'
import Events from '../events/Events'
import Joke from '../events/Joke'
import { connect } from 'react-redux';
import { fetchSliderData } from '../../../actions/sliderData'
import { fetchHostData } from '../../../actions/host'

class TestCarousel extends Component {
    param = this.props.match.params.location

    componentDidMount() {
        this.props.fetchSliderData(this.param)
        this.props.fetchHostData()
        // const timer = setInterval(() => window.location.reload(), 10000);
        // this.setState({timer});
    }

    // componentWillUnmount() {
    //     this.clearInterval(this.state.timer);
    // }

    render() {
        const status = true
        console.log(this.props.host)
        return (
            <div>
            <Carousel autoPlay={status} interval={5000} infiniteLoop showThumbs={false} showIndicators={false} showStatus={false}>
                {this.props.slider.map(item => {
                    if (item.source === "instagram") {
                        return (
                            <div key={item}><Instagram data={item} /></div>
                        )
                    }

                    if (item.source === "eventsList") {
                        return (
                            <div key={item}><Events data={item} params={this.param} host={this.props.host}/></div>
                        )
                    }

                    if (item.source === "joke") {
                        return (
                            <div key={item}><Joke data={item} /></div>
                        )
                    }

                    if (item.source === "event") {
                        return (
                            <div key={item}><Event data={item} host={this.props.host}/></div>
                        )
                    }

            })}
            </Carousel>
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        slider: state.sliderData,
        host: state.host
    }
}

export default connect(mapStateToProps, { fetchSliderData, fetchHostData })(TestCarousel)
