import CoveredSection from "../coveredSection/coveredSection";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GlobalButton from "../globalButton/globalButton";
import { Link } from "react-router-dom";
import News1 from '../../assets/images/news-1.png';
import News2 from '../../assets/images/news-2.png';
import News3 from '../../assets/images/news-3.png';
import News4 from '../../assets/images/news-4.png';
import News5 from '../../assets/images/news-5.png';
import News6 from '../../assets/images/news-6.png';
import News7 from '../../assets/images/news-7.png';
import News8 from '../../assets/images/news-8.png';
import News9 from '../../assets/images/news-9.png';
import './news.css';

const News = () => {
    return (
        <>
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
                                            <img src={ News1 } alt="News" className="img" />
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
                                            <img src={ News2 } alt="News" className="img" />
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
                                            <img src={ News3 } alt="News" className="img" />
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
                                            <img src={ News4 } alt="News" className="img" />
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
                                            <img src={ News5 } alt="News" className="img" />
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
                                            <img src={ News6 } alt="News" className="img" />
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
                                            <img src={ News7 } alt="News" className="img" />
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
                                            <img src={ News8 } alt="News" className="img" />
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
                                            <img src={ News9 } alt="News" className="img" />
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
        </>
    )
}

export default News;