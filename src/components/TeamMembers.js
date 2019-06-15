import React, {Component} from "react";
import { Row, Col, Button} from "react-materialize";
import { Slide } from 'react-reveal';
import IndividualMember from './IndividualMember';
import * as teamMembers from '../helpers/teamInfo';
import placeHolder from '../images/team/placeHolder.jpg';

export default class TeamMembers extends Component {
    render() {
        return (
            <div className='team-members-containers'>
                <Row>
                    <Col l={10} s={12} offset='l1'>
                        <h5 className="header-style" >Who We Are</h5>

                        <Row>
                            { teamMembers.members.map(member => {
                                return (
                                    <IndividualMember
                                        key={member.id}
                                        name={member.name}
                                        title={member.title}
                                        bio={member.bio}
                                        imageLink={member.imageLink}
                                    />
                                )
                            })}
                            {/*<Col xl={4} l={6} s={12}>*/}
                                {/*<div className='member-wrapper'>*/}
                                    {/*<img className='member-img' src={placeHolder} alt='member' />*/}
                                    {/*<Button floating large*/}
                                            {/*className='bio-btn'*/}
                                            {/*waves='purple'*/}
                                            {/*icon='arrow_forward' />*/}
                                    {/*<div className='details'>*/}
                                        {/*<p className='name'>James Martineau</p>*/}
                                        {/*<p className='job-title'>Software Developer</p>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</Col>*/}
                            {/*<Col xl={4} l={6} s={12}>*/}
                                {/*<div className='member-wrapper'>*/}
                                    {/*<img className='member-img' src={placeHolder} alt='member' />*/}
                                    {/*<Button floating large*/}
                                            {/*className='bio-btn'*/}
                                            {/*waves='purple'*/}
                                            {/*icon='arrow_forward' />*/}
                                    {/*<div className='details'>*/}
                                        {/*<p className='name'>James Martineau</p>*/}
                                        {/*<p className='job-title'>Software Developer</p>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</Col>*/}
                            {/*<Col xl={4} l={6} s={12}>*/}
                                {/*<div className='member-wrapper'>*/}
                                    {/*<img className='member-img' src={placeHolder} alt='member' />*/}
                                    {/*<Button floating large*/}
                                            {/*className='bio-btn'*/}
                                            {/*waves='purple'*/}
                                            {/*icon='arrow_forward' />*/}
                                    {/*<div className='details'>*/}
                                        {/*<p className='name'>James Martineau</p>*/}
                                        {/*<p className='job-title'>Software Developer</p>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</Col>*/}
                            {/*<Col xl={4} l={6} s={12}>*/}
                                {/*<div className='member-wrapper'>*/}
                                    {/*<img className='member-img' src={placeHolder} alt='member' />*/}
                                    {/*<Button floating large*/}
                                            {/*className='bio-btn'*/}
                                            {/*waves='purple'*/}
                                            {/*icon='arrow_forward' />*/}
                                    {/*<div className='details'>*/}
                                        {/*<p className='name'>James Martineau</p>*/}
                                        {/*<p className='job-title'>Software Developer</p>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</Col>*/}
                            {/*<Col xl={4} l={6} s={12}>*/}
                                {/*<div className='member-wrapper'>*/}
                                    {/*<img className='member-img' src={placeHolder} alt='member' />*/}
                                    {/*<Button floating large*/}
                                            {/*className='bio-btn'*/}
                                            {/*waves='purple'*/}
                                            {/*icon='arrow_forward' />*/}
                                    {/*<div className='details'>*/}
                                        {/*<p className='name'>James Martineau</p>*/}
                                        {/*<p className='job-title'>Software Developer</p>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</Col>*/}

                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}
