import React, { Component } from "react";
import { Slide } from 'react-reveal';
import * as constants from '../helpers/constants';
import teamLogo from "../images/teamLogo.jpg";

export default class Landing extends Component {

    render() {
        let imgStyle = {
            'margin': '0 auto',
            'max-width': '30rem'
        };

        return (
            <Slide duration={constants.revealDurations.regular} bottom>
                <div className="landing-page-container">
                    <h2 className="header-style" >Welcome to a Tower of Giraffes!</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur lorem donec massa sapien faucibus et molestie. Sit amet aliquam id diam. Nunc eget lorem dolor sed viverra ipsum. Euismod in pellentesque massa placerat. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Diam vel quam elementum pulvinar. Sit amet consectetur adipiscing elit ut aliquam purus sit amet. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Pharetra et ultrices neque ornare. Mattis vulputate enim nulla aliquet porttitor. Rutrum quisque non tellus orci ac. Ultrices neque ornare aenean euismod elementum. Integer eget aliquet nibh praesent. At erat pellentesque adipiscing commodo elit at imperdiet. Amet mauris commodo quis imperdiet. Pretium viverra suspendisse potenti nullam ac tortor.
                    </p>
                    <Slide left duration={1500}>
                        <div className='center-align'>
                            <img src={teamLogo} alt='team-giraffe-logo' style={imgStyle} />
                        </div>
                    </Slide>
                </div>
            </Slide>
        );
    }
}
