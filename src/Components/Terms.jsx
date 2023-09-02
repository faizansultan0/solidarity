import Container from 'react-bootstrap/Container';
import './Terms.css';
import TermsReceived from '../Data/terms.json';

const Terms = () => {
    const TermsData = TermsReceived;
    return (
        <section className="terms">
            <Container>
                <div className="content">
                    <h1 className="hero-heading">Terms of Use</h1>

                    {TermsData.map((term, index) => (
                        <div className='Term' key={index}>
                            <h2 className="terms-heading"> {index !== 0? index + 1 + '. ' : null} { term.title }</h2>
                            <p className="terms-para">{ term.description }</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Terms;