import CoveredSection from "../coveredSection/coveredSection";
import GlobalButton from "../globalButton/globalButton";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Layout from '../../layout';
import images from "../../assets/images";
import './news.css';

const News = () => {
    return (
        <Layout>
            <section className="contact-hero contact" id="news-hero">
                <Container>
                    <div className="content">
                        <h1 className="global-heading">Solid News</h1>
                        <p className="global-para">Read the latest news, stay up to date on product launches, and never miss important announcements.</p>

                        <form className="contact-form" id="news-form">
                            <Row>
                                <Col md={7}>
                                    <div className="input-div">
                                        <label htmlFor="search" className="label">Search</label>
                                        <input type="text" className="input" placeholder="Enter your search terms here" id="search" />
                                    </div>
                                </Col>
                                <Col md={3}>
                                    <div className="input-div">
                                        <label htmlFor="newsYear" className="label">Year</label>
                                        <select name="newsYear" id="newsYear" className="input" required>
                                            <option value="" disabled selected>Select</option>
                                            <option value="2010">2010</option>
                                            <option value="2011">2011</option>
                                            <option value="2012">2012</option>
                                            <option value="2013">2013</option>
                                            <option value="2014">2014</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col md={2}>
                                    <div className="button-div">
                                        <GlobalButton type="submit" text='Search' />
                                    </div>
                                </Col>
                            </Row>

                        </form>
                    </div>
                </Container>
            </section>

            <section className="news-cards-section">
                <Container>
                    <div className="news-cards">
                        <Row>
                            <Col lg={4} xs={6}>
                                <Link to='/' className="card-link" >
                                    <div className="news-card">
                                        <div className="img-div">
                                            <img src={ images.News1 } alt="News" className="img" />
                                        </div>
                                        <span className="date">July 7, 2022</span>
                                        <span className="title global-heading">Solidarity Bahrain officially launches its new Mobile Application</span>
                                    </div>
                                </Link>
                            </Col>
                            <Col lg={4} xs={6}>
                                <Link to='/' className='card-link' >
                                    <div className="news-card">
                                        <div className="img-div">
                                            <img src={ images.News2 } alt="News" className="img" />
                                        </div>
                                        <span className="date">July 7, 2022</span>
                                        <span className="title global-heading">Solidarity Bahrain approves 18% cash dividend to the shareholders</span>
                                    </div>
                                </Link>
                            </Col>
                            <Col lg={4} xs={6}>
                                <Link to='/' className='card-link' >
                                    <div className="news-card">
                                        <div className="img-div">
                                            <img src={ images.News3 } alt="News" className="img" />
                                        </div>
                                        <span className="date">July 7, 2022</span>
                                        <span className="title global-heading">Solidarity’s Digital retail transactions Grew by 70% in 2021</span>
                                    </div>
                                </Link>
                            </Col>
                            <Col lg={4} xs={6}>
                                <Link to='/' className='card-link' >
                                    <div className="news-card">
                                        <div className="img-div">
                                            <img src={ images.News4 } alt="News" className="img" />
                                        </div>
                                        <span className="date">July 7, 2022</span>
                                        <span className="title global-heading">Solidarity Bahrain Announces Key Promotions</span>
                                    </div>
                                </Link>
                            </Col>
                            <Col lg={4} xs={6}>
                                <Link to='/' className='card-link' >
                                    <div className="news-card">
                                        <div className="img-div">
                                            <img src={ images.News5 } alt="News" className="img" />
                                        </div>
                                        <span className="date">July 7, 2022</span>
                                        <span className="title global-heading">Solidarity Bahrain approves 18% cash dividend to the shareholders</span>
                                    </div>
                                </Link>
                            </Col>
                            <Col lg={4} xs={6}>
                                <Link to='/' className='card-link' >
                                    <div className="news-card">
                                        <div className="img-div">
                                            <img src={ images.News6 } alt="News" className="img" />
                                        </div>
                                        <span className="date">July 7, 2022</span>
                                        <span className="title global-heading">Solidarity’s Digital retail transactions Grew by 70% in 2021</span>
                                    </div>
                                </Link>
                            </Col>
                            <Col lg={4} xs={6}>
                                <Link to='/' className='card-link' >
                                    <div className="news-card">
                                        <div className="img-div">
                                            <img src={ images.News7 } alt="News" className="img" />
                                        </div>
                                        <span className="date">July 7, 2022</span>
                                        <span className="title global-heading">Solidarity Bahrain B.S.C. announces net profits of BD 3.31 million for the year 2021</span>
                                    </div>
                                </Link>
                            </Col>
                            <Col lg={4} xs={6}>
                                <Link to='/' className='card-link' >
                                    <div className="news-card">
                                        <div className="img-div">
                                            <img src={ images.News8 } alt="News" className="img" />
                                        </div>
                                        <span className="date">July 7, 2022</span>
                                        <span className="title global-heading">Solidarity Bahrain Hosts Long Service Awards to Honor Employees</span>
                                    </div>
                                </Link>
                            </Col>
                            <Col lg={4} xs={6}>
                                <Link to='/' className='card-link' >
                                    <div className="news-card">
                                        <div className="img-div">
                                            <img src={ images.News9 } alt="News" className="img" />
                                        </div>
                                        <span className="date">July 7, 2022</span>
                                        <span className="title global-heading">Solidarity Group Holding announced the Completion of T’azur merger with Solidarity...</span>
                                    </div>
                                </Link>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>

            <CoveredSection />
        </Layout>
    )
}

export default News;