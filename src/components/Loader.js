import React from "react";
import logo from '../images/teamLogo2.png';
import { Slide, Fade } from 'react-reveal';

export default function Loader(props) {
    const { time } = props;

    return (
        <Slide left opposite when={time > 1}>
            <div className="loader-container center-align">
                <div className='img-wrapper'>
                    <Fade duration={2000}>
                        <img src={logo} className='loader-img' alt='team icon' />
                    </Fade>
                </div>
                <h5 className='header-style'>Tower gathering in: {time}</h5>
            </div>
        </Slide>
    );
}
