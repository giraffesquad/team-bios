import React, {Component} from "react";
import { Row, Col} from "react-materialize";
import IndividualMember from './IndividualMember';
import * as teamInfo from '../helpers/teamInfo';
import { Fade } from 'react-reveal';

export default class TeamMembers extends Component {
    render() {
        return (
            <div className='team-members-containers'>
                <Row>
                    <Col s={12}>
                        {/*<h4 className="header-style center-align" >Who We Are</h4>*/}
                        <h6 className='header-style description'>Our squad serves the larger organization and is aligned under Sheila Anderson in Global Leadership Learning and Technology (GLLT). We deliver value by developing software solutions to help retain talent across Liberty Mutual.</h6>
                    </Col>
                </Row>
                <Row>
                    <Col s={12}>
                        <h4 className="header-style center-align" >Meet the Team</h4>
                    </Col>
                </Row>
                <Row>
                    <Col m={11} s={12} offset='l1'>
                        { teamInfo.teamMembers.members.map(member => {
                            return (
                                <Fade bottom
                                     key={member.id}
                                     duration={3250}>
                                    <IndividualMember
                                        name={member.name}
                                        title={member.title}
                                        bio={member.bio}
                                        imageLink={member.imageLink}
                                        email={member.email}
                                    />
                                </Fade>
                            )
                        })}
                    </Col>
                </Row>
            </div>
        );
    }
}
