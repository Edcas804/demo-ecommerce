import Navbar from "../Navbar.jsx";

const Footer = () => {
    return (
        <footer className="flex justify-center items-center p-4 font-light">
            <p>All rights reserved </p>
            <p>{ new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer