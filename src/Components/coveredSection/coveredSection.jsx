import { Container, Row, Col } from 'react-bootstrap';
import images from '../../assets/images';
import './coveredSection.css';

const CoveredSection = () => {
    return (
        <section className="covered-section">
            <Container>
                <div className="content">
                    <div className="top-part">
                        <h2 className="global-heading">We got you covered</h2>
                        <p className="global-para">Insurance should keep you safe, covered, and fully informed – that’s exactly what we do.</p>
                    </div>
                    <div className="cards-part">
                    <Row>
                            <Col lg={2} md={4} sm={6} >
                                <div className="sm-card">
                                    <div className="img-div">
                                        <img src={images.Covered1} alt="Insurance Option" className='img' />
                                    </div>
                                    <span className="caption">Sign Up</span>
                                </div>
                            </Col>
                            <Col lg={2} md={4} sm={6} >
                                <div className="sm-card">
                                    <div className="img-div">
                                        <img src={images.Covered2} alt="Insurance Option" className='img' />
                                    </div>
                                    <span className="caption">Video Call</span>
                                </div>
                            </Col>
                            <Col lg={2} md={4} sm={6} >
                                <div className="sm-card">
                                    <div className="img-div">
                                        <img src={images.Covered3} alt="Insurance Option" className='img' />
                                    </div>
                                    <span className="caption">Whatsapp</span>
                                </div>
                            </Col>
                            <Col lg={2} md={4} sm={6} >
                                <div className="sm-card">
                                    <div className="img-div">
                                        <img src={images.Covered4} alt="Insurance Option" className='img' />
                                    </div>
                                    <span className="caption">Contact Us</span>
                                </div>
                            </Col>
                            <Col lg={2} md={4} sm={6} >
                                <div className="sm-card">
                                    <div className="img-div">
                                        <img src={images.Covered5} alt="Insurance Option" className='img' />
                                    </div>
                                    <span className="caption">Call Us</span>
                                </div>
                            </Col>
                            <Col lg={2} md={4} sm={6} >
                                <div className="sm-card">
                                    <div className="img-div">
                                        <img src={images.Covered6} alt="Insurance Option" className='img' />
                                    </div>
                                    <span className="caption">Start a Chat</span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default CoveredSection;