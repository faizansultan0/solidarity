import Header from './Components/header/header';
import Footer from './Components/footer/footer';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout;