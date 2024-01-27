import { Outlet } from "react-router-dom";
import Header from '../Layouts/Header';
import Footer from '../Layouts/Footer';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
export default function Master(){
    return(
        <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        <ToastContainer   autoClose={2000}/>
        </>
    )
}