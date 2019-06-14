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
                        <Col l={10} s={12} offset='l1'>
                            <h2 className="header-style" >Welcome to a Tower of Giraffes!</h2>
                            <hr/>
                            <h5 className="header-style" >History Behind the Name</h5>
                            <p>Like anything catchy, it all started with a vine and the rest was history.</p>
                            <Button waves="light" node="a" href="https://www.youtube.com/watch?v=HRPwMBAtfTY">Watch the Vine</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col l={10} s={12} offset='l1'>
                            <TeamMembers/>
                        </Col>
                    </Row>
                </div>
            </Slide>
        );
    }
}
