import CoveredSection from "../coveredSection/coveredSection";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MainImage from '../../assets/images/solidarity-main.png';
import Director1 from '../../assets/images/director-1.jpeg';
import Director2 from '../../assets/images/director-2.jpeg';
import Director3 from '../../assets/images/director-3.jpeg';
import Director4 from '../../assets/images/director-4.jpeg';
import Director5 from '../../assets/images/director-5.jpeg';
import Director6 from '../../assets/images/director-6.jpeg';
import Director7 from '../../assets/images/director-7.png';
import Sharia1 from '../../assets/images/sharia-1.jpeg';
import Sharia2 from '../../assets/images/sharia-2.jpeg';
import Sharia3 from '../../assets/images/sharia-3.jpeg';
import Management1 from '../../assets/images/management-1.jpeg';
import Management2 from '../../assets/images/management-2.jpeg';
import Management3 from '../../assets/images/management-3.jpeg';
import Management4 from '../../assets/images/management-4.jpeg';
import Management5 from '../../assets/images/management-5.jpeg';
import Management6 from '../../assets/images/management-6.jpeg';
import Management7 from '../../assets/images/management-7.jpeg';
import './aboutUs.css';

const AboutUs = () => {
    return (
        <>
            <section className="contact-hero contact" id="about-hero">
                <Container>
                    <div className="content">
                        <h1 className="global-heading">We are Solidarity</h1>
                        <p className="global-para">We care about our customers. We’re over 40 years strong and we’re looking towards the future of insurance.</p>
                    </div>
                </Container>
            </section>

            <section className="main-img-section">
                <Container>
                    <div className="img-div">
                        <img src={MainImage} alt="Solidarity Main" className="img" />
                    </div>
                </Container>
            </section>

            <section className="bio-section">
                <Container>
                    <div className="content">
                        <h2 className="global-heading">Our bio</h2>
                        <p className="global-para">Solidarity Bahrain B.S.C ("SB"), subsidiary of Solidarity Group Holding B.S.C (closed) incorporated under the laws and regulations of the Kingdom of Bahrain. SB's roots go to back to 1976, with the establishment of one of the Kingdom's earliest locally-domiciled composite insurance companies.</p>
                        <p className="global-para">Today, Solidarity Bahrain is one of the Kingdom's leading insurers, and the largest Sharia-compliant insurance provider, and benefits from being a subsidiary of Solidarity Group Holding, which is the world's largest Sharia-compliant insurance institution.</p>
                        <p className="global-para">The Company is distinguished by its ethical business approach, extensive range of products and solutions, and highly-experienced and well qualified team of professionals. Solidarity Bahrain is also noted for its innovative customer service initiatives. These combine the human touch with the latest InsurTech solutions that we have pioneered in the Kingdom.</p>
                    </div>
                </Container>
            </section>

            <section className="person-cards">
                <Container>
                    <div className="content">
                        <h3 className="global-heading">Board of Directors</h3>
                        <div className="cards">
                            <Row>
                                <Col lg={3} md={4} sm={6} >
                                    <div className="person-card">
                                        <div className="img-div">
                                            <img src={Director1} alt="Director" className="img" />
                                        </div>
                                        <h4 className="name">Tawfeeq Shehab</h4>
                                        <p className="tag-line">Chairman to the Board of Directors |  Independent Non-Executive</p>
                                    </div>
                                </Col>
                                <Col lg={3} md={4} sm={6} >
                                    <div className="person-card">
                                        <div className="img-div">
                                            <img src={Director2} alt="Director" className="img" />
                                        </div>
                                        <h4 className="name">Ashraf Bseisu</h4>
                                        <p className="tag-line">Vice Chairman to the Board of Directors  |  Executive Director</p>
                                    </div>
                                </Col>
                                <Col lg={3} md={4} sm={6} >
                                    <div className="person-card">
                                        <div className="img-div">
                                            <img src={Director3} alt="Director" className="img" />
                                        </div>
                                        <h4 className="name">Dr. Nadhem Al Saleh</h4>
                                        <p className="tag-line">Member of the Board of Directors | Independent Non-Executive</p>
                                    </div>
                                </Col>
                                <Col lg={3} md={4} sm={6} >
                                    <div className="person-card">
                                        <div className="img-div">
                                            <img src={Director4} alt="Director" className="img" />
                                        </div>
                                        <h4 className="name">Sharif Ahmadi</h4>
                                        <p className="tag-line">Member of the Board of Directors |Independent Non-Executive</p>
                                    </div>
                                </Col>
                                <Col lg={3} md={4} sm={6} >
                                    <div className="person-card">
                                        <div className="img-div">
                                            <img src={Director5} alt="Director" className="img" />
                                        </div>
                                        <h4 className="name">Ali Isa Abdulrahim</h4>
                                        <p className="tag-line">Member of the Board of Directors |Non-Executive Director</p>
                                    </div>
                                </Col>
                                <Col lg={3} md={4} sm={6} >
                                    <div className="person-card">
                                        <div className="img-div">
                                            <img src={Director6} alt="Director" className="img" />
                                        </div>
                                        <h4 className="name">Venkatesan Muniswamy</h4>
                                        <p className="tag-line">Member of the Board of Directors |Executive Director</p>
                                    </div>
                                </Col>
                                <Col lg={3} md={4} sm={6} >
                                    <div className="person-card">
                                        <div className="img-div">
                                            <img src={Director7} alt="Director" className="img" />
                                        </div>
                                        <h4 className="name">Bashar Nass</h4>
                                        <p className="tag-line">Member of the Board of Directors |Non-Executive Director</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="person-cards">
                <Container>
                    <div className="content">
                        <h3 className="global-heading">Sharia Supervisory Board</h3>
                        <div className="cards">
                            <Row>
                                <Col lg={3} md={4} sm={6} >
                                    <div className="person-card">
                                        <div className="img-div">
                                            <img src={Sharia1} alt="Director" className="img" />
                                        </div>
                                        <h4 className="name">Shaikh Abdul Nasser Al Mahmood</h4>
                                        <p className="tag-line">Member of Sharia Supervisory Board</p>
                                    </div>
                                </Col>
                                <Col lg={3} md={4} sm={6} >
                                    <div className="person-card">
                                        <div className="img-div">
                                            <img src={Sharia2} alt="Director" className="img" />
                                        </div>
                                        <h4 className="name">Shaikh Dr. Osama Bahar</h4>
                                        <p className="tag-line">Member of Sharia Supervisory Board |  Member of the Corporate Governance Committee</p>
                                    </div>
                                </Col>
                                <Col lg={3} md={4} sm={6} >
                                    <div className="person-card">
                                        <div className="img-div">
                                            <img src={Sharia3} alt="Director" className="img" />
                                        </div>
                                        <h4 className="name">Shaikh Mohsin Shaikh A. Hussain Al Asfoor</h4>
                                        <p className="tag-line">Member of Sharia Supervisory Board</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="person-cards">
                <Container>
                    <div className="content">
                        <h3 className="global-heading">Management</h3>
                        <div className="cards">
                            <Row>
                                <Col lg={3} md={4} sm={6} >
                                    <div className="person-card">
                                        <div className="img-div">
                                            <img src={Management1} alt="Director" className="img" />
                                        </div>
                                        <h4 className="name">Jawad Mohammed</h4>
                                        <p className="tag-line">Chief Executive Officer</p>
                                    </div>
                                </Col>
                                <Col lg={3} md={4} sm={6} >
                                    <div className="person-card">
                                        <div className="img-div">
                                            <img src={Management2} alt="Director" className="img" />
                                        </div>
                                        <h4 className="name">Nandakumar Duraiswamy</h4>
                                        <p className="tag-line">Deputy General Manager | Operations</p>
                                    </div>
                                </Col>
                                <Col lg={3} md={4} sm={6} >
                                    <div className="person-card">
                                        <div className="img-div">
                                            <img src={Management3} alt="Director" className="img" />
                                        </div>
                                        <h4 className="name">Mohammed Awachi</h4>
                                        <p className="tag-line">Assistant General Manager | Corporate Support</p>
                                    </div>
                                </Col>
                                <Col lg={3} md={4} sm={6} >
                                    <div className="person-card">
                                        <div className="img-div">
                                            <img src={Management4} alt="Director" className="img" />
                                        </div>
                                        <h4 className="name">Jai Prakash</h4>
                                        <p className="tag-line">Assistant General Manager | Business Development</p>
                                    </div>
                                </Col>
                                <Col lg={3} md={4} sm={6} >
                                    <div className="person-card">
                                        <div className="img-div">
                                            <img src={Management5} alt="Director" className="img" />
                                        </div>
                                        <h4 className="name">Yasser Al Hammadi</h4>
                                        <p className="tag-line">Assistant General Manager | Compliance and Risk Management & Money Laundering Reporting Officer (MILR0) & Personal Data Protection and Secretary to the Board of Directors</p>
                                    </div>
                                </Col>
                                <Col lg={3} md={4} sm={6} >
                                    <div className="person-card">
                                        <div className="img-div">
                                            <img src={Management6} alt="Director" className="img" />
                                        </div>
                                        <h4 className="name">Sanjeev Aggarwal</h4>
                                        <p className="tag-line">Head of Finance</p>
                                    </div>
                                </Col>
                                <Col lg={3} md={4} sm={6} >
                                    <div className="person-card">
                                        <div className="img-div">
                                            <img src={Management7} alt="Director" className="img" />
                                        </div>
                                        <h4 className="name">Rashid Turk</h4>
                                        <p className="tag-line">Head of Medical & Life</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </section>

            <CoveredSection />
        </>
    )
}

export default AboutUs;