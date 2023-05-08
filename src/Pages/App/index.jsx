import {BrowserRouter, useRoutes} from "react-router-dom";
import Home from "../Home/index.jsx";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import Layout from "../../Components/Layout/index";
import {AppProvider} from "../../AppContext/AppContext";

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
        <AppProvider>
            <BrowserRouter>
                <Layout>
                    <AppRoutes/>
                </Layout>
            </BrowserRouter>
        </AppProvider>
    )
}

export default App
