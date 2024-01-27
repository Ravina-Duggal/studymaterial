import { Navigate, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
export default function Adminmaster(){
    const authenticate=sessionStorage.getItem("authenticate")
    const userType=sessionStorage.getItem("user_type")
    if(!authenticate){
        sessionStorage.setItem("message", "Please Login!!")
        return <Navigate replace to="/login"/>
    }
    if(userType !=1){
        sessionStorage.setItem("message", "You don't have the right to access this page!!")
        return <Navigate replace to="/login"/>
    }
    return(
        <>
        <Header/>
        <Outlet></Outlet>
        <Footer/>
        <ToastContainer 
        autoClose={2000}
        />
        </>
    )
}