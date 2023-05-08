import Navbar from "../Navbar.jsx";
import Footer from "../Footer/index.jsx";
import CheckoutSideMenu from "../CheckoutSideMenu.jsx";

const Layout = ({children}) => {
    return (
        <main>
            <Navbar/>
            <div className='flex flex-col items-center mt-5'>
                {children}
                <CheckoutSideMenu />
            </div>
            <Footer />
        </main>
)
}

export default Layout