import React, {Component} from "react";
import { Row, Modal, Col, Button, Icon} from "react-materialize";
import jamesPic from '../images/team/jamesMartineau.jpeg';
import placeHolder from '../images/team/placeHolder.jpg';
import parse from 'html-react-parser';

export default class IndividualMember extends Component {
    state = {
        isModalOpen: false
    };

    handleModal = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen});
    };

    render() {
        const { name, title, bio, imageLink, email} = this.props;
        const htmlBio = parse(bio);

        return (
            <div className='individual-member-container'>
                <Modal
                    open={this.state.isModalOpen}
                    className='modal-bio'
                    options={{
                        onCloseEnd: this.handleModal
                    }}
                    >
                    <Row>
                        <Col l={4} m={5} s={12} className='info-col'>
                            <div className='center-align'>
                                <img className='member-img-modal'
                                     src={imageLink}
                                     alt='member' />
                                <div className='details-modal'>
                                    <p className='name truncate'>{name}</p>
                                    <p className='job-title truncate'>{title}</p>
                                    <p className='center-align email-btn-row'>
                                        <Button floating
                                                className='primary-button-teal'
                                                icon='email'
                                                node='a'
                                                href={`mailto:${email}`}
                                                tooltip={email} />
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col l={8} m={7} s={12} className='bio-col'>
                            <div>
                                <h4 className='header-style about-me-header'>About Me</h4>
                                <div className='details-modal'>{htmlBio}</div>
                            </div>
                        </Col>
                    </Row>
                </Modal>
                <Col xl={4} m={5} s={10} offset='l1 s1'>
                    <div className='member-wrapper'>
                        <img className='member-img' src={imageLink} alt='member' />
                        <Button floating medium
                                className='primary-button-teal bio-btn'
                                waves='purple'
                                icon='arrow_forward'
                                onClick={this.handleModal}/>
                        <div className='details'>
                            <p className='name'>{name}</p>
                            <p className='job-title'>{title}</p>
                        </div>
                    </div>
                </Col>
            </div>
        );
    }
}
