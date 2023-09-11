import { Container } from 'react-bootstrap';
import Layout from '../../layout';
import './privacySecurity.css';

const PrivacySecurity = () => {
    return (
        <Layout>
            <section className="article privacy">
                <Container>
                    <div className="content">
                        <h1 className="hero-heading">Privacy & Security</h1>

                        <h2 className="article-heading">Details on how we collect your personal data</h2>
                        <p className="article-para">Solidarity obtains your personal data directly from you via different communication means such as emails, phone calls or face-to-face meetings, during the registration process, during payment process which may include payment history, and during your engagement with Solidarity to provide you with services.
                        <br />
                        Solidarity also obtains your personal data from the referrals from existing customer, event organizers and other sources. For more details on how Solidarity collects your data please contact our Data Protection Officer.</p>
                        
                        <h2 className="article-heading">The lawful basis for processing your personal data</h2>
                        <p className="article-para">Solidarity only processes your personal data based on at least one of the following lawfulness basis as per the law:</p>

                        <table className="primary-table">
                            <tr className="primary-tr">
                                <th className="primary-th">Purpose</th>
                                <th className="primary-th">Lawfulness Basis</th>
                            </tr>
                            <tr className="primary-tr">
                                <td className="primary-td"><span className='primary-first-td-text'>Comply with Know Your Customer (KYC) process to verify your identity and assess the potential risks of any illegal intention.</span></td>
                                <td className="primary-td">Legal obligations</td>
                            </tr>
                            <tr className="primary-tr">
                                <td className="primary-td"><span className='primary-first-td-text'>Fulfil obligations arising from contract agreements and policies entered between you and Solidarity mostly for the provision of our services such as underwriting, issuing insurance policy, renewals, processing claims, processing and recording of salvage and other recoveries, and car replacement/ vehicle assistance.</span></td>
                                <td className="primary-td">Contractual obligations</td>
                            </tr>
                            <tr className="primary-tr">
                                <td className="primary-td"><span className='primary-first-td-text'>Provide you with details and notifications about our services and changes to the services as per your request on receiving such details.</span></td>
                                <td className="primary-td">Legitimate interests</td>
                            </tr>
                            <tr className="primary-tr">
                                <td className="primary-td"><span className='primary-first-td-text'>Obtain feedback on our services provided to you.</span></td>
                                <td className="primary-td">Legitimate interest</td>
                            </tr>
                            <tr className="primary-tr">
                                <td className="primary-td"><span className='primary-first-td-text'>Issuing proposals and quotations</span></td>
                                <td className="primary-td">Legitimate interest</td>
                            </tr>
                        </table>

                        <h2 className="article-heading">Types of personal data we process</h2>
                        <p className="article-para">Based on specified lawfulness reasons of processing your personal data as per Bahrain's Personal Law, Solidarity may handle and process your identity details, contact data and financial information. Some sensitive personal data, such as information about health or medical conditions and criminal records which may require to carry out contractual and legal obligations.</p>

                        <h2 className="article-heading">Share & transfer of your personal data within and outside the Kingdom of Bahrain</h2>
                        <p className="article-para">Solidarity may share your personal information for the above mentioned purposes and lawfulness basis with third parties when required, it where it is necessary to administer the relationship with you or where we have another legitimate interest in doing so. Solidarity may also transfer your personal data outside the Kingdom of Bahrain as per the requirements and conditions of Bahrain's Personal Data Protection Law.</p>

                        <h2 className="article-heading">Security of your personal data</h2>
                        <p className="article-para">Your personal data will be processed in accordance with our data protection framework. Solidarity restricts access to your personal data to only those who require access to fulfil the required duties.</p>

                        <h2 className="article-heading">Retention period of your personal data</h2>
                        <p className="article-para">Solidarity retains your personal data to fulfil its intended purpose, and historical archiving. We securely destroy and erase or anonymize your personal data to ensure that it cannot be restored after exceeding the specified retention period.</p>

                        <h2 className="article-heading">Your Rights:</h2>
                        <p className="article-para zero-margin">You have the right to Request Solidarity to:</p>
                        <ul className="primary-ul">
                            <li className="article-para zero-margin">access your personal data processed by Solidarity;</li>
                            <li className="article-para zero-margin">amend your data when it is inaccurate or incomplete;</li>
                            <li className="article-para zero-margin">remove your data when (a) the purpose of which your data has been collected is no longer valid; (b) your personal data is processed in an unlawful basis; (c) the deletion is necessary for compliance with the law; or, (d) your data is inaccurate;</li>
                            <li className="article-para zero-margin">block or restrict further processing of your personal data;</li>
                            <li className="article-para zero-margin">Submit a complaint when your personal data is being used for the purpose of direct marketing or for the purpose of making a decision which iS based on automated processing including profiling where such processing may have legal ramifications or significantly affect your rights;</li>
                            <li className="article-para zero-margin">access your personal data processed by Solidarity;</li>
                            <li className="article-para zero-margin">access your personal data processed by Solidarity;</li>
                        </ul>
                        <p className="article-para">• Solidarity have the right to reject your request. Solidarity will inform you within 15 days of receiving the request on the rejection and explanation of the rejection. In case your request iS incomplete, Solidarity will inform you within 10 days to complete your request. You have the right to lodge a complaint to Bahrain's Personal Data Protection Authority.
                        <br />
                        As part of the personal data security measures, Solidarity may request you to provide specific information in order to confirm your identity and to ensure that your personal data is not disclosed to any person who does not have the right to have it.</p>
                        
                        <h2 className="article-heading">Update on Privacy Notice</h2>
                        <p className="article-para">Solidarity has the right to review and update the privacy notice. In case of any changes, you will be informed, and you will receive the new privacy notice.</p>

                        <h2 className="article-heading">Contact Us</h2>
                        <p className="article-para">For any inquiries, Reach out to our Data Protection Officer (DP0) through <a href="mailto:test12332w1@gmail.com" className="inside-anchor">DPO@solidarity.com.bh</a> or through <a href='tel:+9212323445' className='inside-anchor'>+973 1758 5222</a>.</p>
                    </div>
                </Container>
            </section>
        </Layout>
    )
}

export default PrivacySecurity;