import CoveredSection from "./SmallComponents/CoveredSection";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GlobalButton from "./SmallComponents/GlobalButton";
import './News.css';

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

            <CoveredSection />
        </>
    )
}

export default News;