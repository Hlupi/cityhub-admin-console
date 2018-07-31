import React, {PureComponent} from 'react'
import '../main/carousel.css'
import logo from '../images/cityhub-logo-black.svg'
import instaLogo from '../images/hashLogo.png'

export default class Instagram extends PureComponent {
    state = {}

    render() {
        const text = this.props.data.text;
        const indexOfHash = text.indexOf('#')
        const textBlack = text.slice(0, indexOfHash)
        const textBlue = text.slice(indexOfHash)

        return (
            <div>
                <img src={logo} className='logoStyle' alt=''/>
                <div className='divSlide'>
                    <img src={this.props.data.display_url} className='instaImage' alt=''/>
                </div>

                <div className='legend'>
                    <h1>{this.props.data.name}</h1>
                    <p>{textBlack}</p>
                    <p className='blueHashtag'>{textBlue}</p>
                    <table className='tableStyle'>
                        <tbody>
                            <tr>
                                <td className='instaHashSign'><img src={instaLogo} width='40px' alt=''/></td>
                                <td><p id='hashStyle'>#{this.props.data.hashtag}</p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
