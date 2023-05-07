import Navbar from "../Navbar.jsx";
import Footer from "../Footer/index.jsx";

const Layout = ({children}) => {
    return (
        <main>
            <Navbar/>
            <div className='flex flex-col items-center mt-5'>
                {children}
            </div>
            <Footer/ >
        </main>
)
}

export default Layout