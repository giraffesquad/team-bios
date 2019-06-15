import React, {Component} from "react";
import { Row, Modal, Col, Button} from "react-materialize";
import jamesPic from '../images/team/jamesMartineau.jpeg';
import placeHolder from '../images/team/placeHolder.jpg';

export default class IndividualMember extends Component {
    state = {
        isModalOpen: false
    };

    handleModal = () => {
        this.setState({ isModalOpen: !this.state.isModalOpen});
    };

    render() {
        const { name, title, bio, imageLink} = this.props;

        return (
            <div>
                <Modal
                    open={this.state.isModalOpen}
                    fixedFooter={true}
                    options={{
                        onCloseEnd: this.handleModal
                    }}
                    >
                    <Row>
                        <Col l={4} m={12} s={12}>
                            <div>
                                <img className='member-img-modal'
                                     src={imageLink ? jamesPic : placeHolder}
                                     alt='member' />
                                <div className='details-modal'>
                                    <p className='name'>{name}</p>
                                    <p className='job-title'>{title}</p>
                                </div>
                            </div>
                        </Col>
                        <Col s={8}>
                            <div>
                                <h4>About Me</h4>
                                <div className='details-modal'>
                                    <p>{bio}</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Modal>
                <Col xl={4} m={5} s={10} offset='l1 s1'>
                    <div className='member-wrapper'>
                        <img className='member-img' src={imageLink ? jamesPic : placeHolder} alt='member' />
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
