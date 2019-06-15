import React, {Component} from "react";
import { Row, Col, Button} from "react-materialize";
import { Fade } from 'react-reveal';
import jamesPic from '../images/team/jamesMartineau.jpeg';
import placeHolder from '../images/team/placeHolder.jpg';

export default class IndividualMember extends Component {
    render() {
        const { name, title, bio, imageLink} = this.props;

        return (
            <Col xl={4} m={5} s={10} offset='l1 s1'>
                <div className='member-wrapper'>
                    <img className='member-img' src={imageLink ? jamesPic : placeHolder} alt='member' />
                    <Button floating medium
                            className='primary-button-teal bio-btn'
                            waves='purple'
                            icon='arrow_forward' />
                    <div className='details'>
                        <p className='name'>{name}</p>
                        <p className='job-title'>{title}</p>
                    </div>
                </div>
            </Col>
        );
    }
}
