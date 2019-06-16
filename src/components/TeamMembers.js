import React, {Component} from "react";
import { Row, Col} from "react-materialize";
import IndividualMember from './IndividualMember';
import * as teamMembers from '../helpers/teamInfo';
import { Fade } from 'react-reveal';

export default class TeamMembers extends Component {
    render() {
        return (
            <div className='team-members-containers'>
                <Row>
                    <Col l={10} s={12} offset='l1'>
                        <h4 className="header-style" >Who We Are</h4>

                        <Row>
                            { teamMembers.members.map(member => {
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
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}
