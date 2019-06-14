import React, {Component} from "react";
import { Row, Col, Carousel} from "react-materialize";
import { Link } from "react-router-dom";
import { Slide } from 'react-reveal';
import jamesPic from '../images/team/jamesMartineau.jpg';

export default class TeamMembers extends Component {
    render() {
        return (
            <Slide left>
                <div className='team-members-containers'>
                    <h5 className="header-style" >Who We Are</h5>
                    <Carousel options={{fullWidth: true,indicators: true}} className="white-text center">
                        <div className="red">
                            <h2>
                                The Tower
                            </h2>
                            <p>
                                Add Team Pic
                            </p>
                        </div>
                        <div className="amber">
                            <h2>
                                James Martineau
                            </h2>
                            <p>
                                <img className='team-member-img' src={jamesPic} alt='james martineau'/>
                            </p>
                        </div>
                        <div className="green">
                            <h2>
                                Third Panel
                            </h2>
                            <p>
                                This is your third panel
                            </p>
                        </div>
                        <div className="blue">
                            <h2>
                                Fourth Panel
                            </h2>
                            <p>
                                This is your fourth panel
                            </p>
                        </div>
                    </Carousel>
                </div>
            </Slide>
        );
    }
}
