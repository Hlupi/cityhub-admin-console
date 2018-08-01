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
                    <div className='titleBlock'>
                        <img src={this.props.data.profile_pic_url} className='hostPic' alt=''/>
                        <h3 className='hostName'>{this.props.data.user_name}<br/> <span className='cityHub'>{this.props.data.full_name}</span></h3>
                    </div>
                    <p className='textField'>{textBlack}</p>
                    <p className='blueHashtag'>{textBlue}</p>
                    <table>
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
