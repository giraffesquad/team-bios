import React, { Component } from "react";
import { Slide } from 'react-reveal';
import { Row, Col, Button } from 'react-materialize';
import TeamMembers from '../components/TeamMembers';
import * as constants from '../helpers/constants';

export default class Landing extends Component {

    render() {
        return (
            <Slide duration={constants.revealDurations.regular} bottom>
                <div className="landing-page-container">
                    <Row>
                        <Col s={12}>
                            <h2 className="header-style" >Welcome to a Tower of Giraffes!</h2>
                            <hr/>
                        </Col>
                    </Row>
                    <Row>
                        <TeamMembers/>
                    </Row>
                    <Row>
                        <Col l={10} s={12} offset='l1' className='center-align'>
                            <h4 className="header-style" >History Behind the Name</h4>
                            <p>Like anything catchy, it all started with a vine and the rest was history.</p>
                            <Button className='primary-button-teal history-btn'
                                    waves="light"
                                    node="a"
                                    href="https://www.youtube.com/watch?v=HRPwMBAtfTY">Watch the Vine</Button>
                        </Col>
                    </Row>
                </div>
            </Slide>
        );
    }
}
