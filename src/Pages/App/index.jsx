import {BrowserRouter, useRoutes} from "react-router-dom";
import Home from "../Home/index.jsx";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import Navbar from "../../Components/Navbar.jsx";
import Layout from "../../Components/Layout/index.jsx";
import {AppDataProvider} from "../../Context/index.jsx";

const AppRoutes = () => {
    let routes = useRoutes([
        {path: '/', element: <Home/>},
        {path: '/my-account', element: <MyAccount/>},
        {path: '/my-order', element: <MyOrder/>},
        {path: '/my-orders', element: <MyOrders/>},
        {path: '/signin', element: <SignIn/>},
        {path: '/*', element: <NotFound/>},
    ])
    return routes
}

function App() {
    return (
        <AppDataProvider>
            <BrowserRouter>
                <Layout>
                    <AppRoutes/>
                </Layout>
            </BrowserRouter>
        </AppDataProvider>
    )
}

export default App
