import { Container } from 'react-bootstrap';
import TermsReceived from '../../data/terms.json';
import Layout from '../../layout';
import './terms.css';

const Terms = () => {
    const TermsData = TermsReceived;
    return (
        <Layout>
            <section className="article terms">
                <Container>
                    <div className="content">
                        <h1 className="hero-heading">Terms of Use</h1>

                        {TermsData.map((term, index) => (
                            <div className='Term' key={index}>
                                <h2 className="article-heading"> {index !== 0? index + 1 + '. ' : null} { term.title }</h2>
                                <p className="article-para">{ term.description }</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </Layout>
    )
}

export default Terms;