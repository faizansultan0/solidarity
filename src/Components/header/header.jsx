import { Container, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GlobalButton from '../globalButton/globalButton';
import Logo from '../../assets/images/Logo.png';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <Container>
                <div className="header-content">
                    <strong className='logo'>
                        <Link to='/' className='link'>
                            <img src={ Logo } alt="Logo" className='img' />
                        </Link>
                    </strong>

                    <Navbar expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <ul className="me-auto navbar-nav">
                                <NavDropdown title="For Individuals " id="basic-nav-dropdown">
                                    <Link to='/motor-insurance' className='dropdown-item'>Motors Insurance</Link>
                                </NavDropdown>
                                <li className='nav-item'>
                                    <Link to='/about-us' className='nav-link'>For Businesses</Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/news' className='nav-link'>Claims</Link>
                                </li>
                                <NavDropdown title="Support " id="basic-nav-dropdown">
                                    <Link to='/contact-us' className='dropdown-item'>Contact Us</Link>
                                    <Link to='/terms' className='dropdown-item'>Terms of use</Link>
                                    <Link to='/privacy' className='dropdown-item'>Privacy & Security</Link>
                                </NavDropdown>
                                <li className="nav-item">
                                    <Link to='/#' className='nav-link'>Login</Link>
                                </li>
                                <li>
                                    <GlobalButton to='#sign-up' text='Get a Quote' arrow='true' />
                                </li>
                            </ul>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </Container>
        </header>
    )
}

export default Header;