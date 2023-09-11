import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';
import GlobalButton from '../globalButton/globalButton';
import './login.css';

const Login = () => {
    return (
        <main className='login-page'>
            <Container fluid>
                <div className="content">
                    <div className="left-part"></div>
                    <div className="right-part">
                        <div className="login-card">
                            <strong className="logo">
                                <Link to='/'>
                                    <img src={ Logo } alt="Solidarity Logo" className='logo-img' />
                                </Link>
                            </strong>

                            <h1 className="heading">Welcome Back</h1>
                            <p className="para">Enter your details to access all of our services</p>

                            <form action="" className="login-form">
                                <div className="input-div">
                                    <label htmlFor="cr">CPR or CR Number</label>
                                    <input type="text" className="input" placeholder='e.g 802001234, 8706501' id='cr' />
                                </div>
                                <div className="input-div">
                                    <label htmlFor="pswd">Password</label>
                                    <input type="password" className="input" placeholder='Password' id='pswd' />
                                </div>
                                <Link to='#' className='forgot-link'>I forgot my password</Link>
                                <GlobalButton text='Login' />
                                <span className="label">Don't have an account?</span>
                                <Link to='#' className='signup-link'>Sign Up</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    )
}

export default Login;