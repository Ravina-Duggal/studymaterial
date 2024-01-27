import { useState ,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { ClipLoader } from "react-spinners";
import apiServices from "../services/apiServices";
export default function Login() {
  const navigate=useNavigate()
  const [loading,setLoading]=useState(false)
  const[message,setMessage]=useState()
  const override={
      "display":"block",
      "margin":"0 auto",
      "position":"absolute",
      "top":"50%",
      "bottom":"50%",
      "zIndex":"1",
  }
  useEffect(()=>{
      setMessage(sessionStorage.getItem("message"))
      if(message){
          toast.error(message)
          setTimeout(()=>{
              sessionStorage.removeItem("message")
          },2000)
      }
  },[message])
  const [email, setEmail]=useState()
  const [pass, setPassword]=useState()
  const handleForm=(e)=>{
      e.preventDefault()
      setLoading(true)
      let data={
          email:email,
          password:pass
      }
      // console.log("data is ", data)
      apiServices.login(data).then((data)=>{
          setTimeout(()=>{
              setLoading(false)
          },1000)
          if(data.data.success){
              
              // console.warn(data.data.token)
              sessionStorage.setItem("user_id", data.data.data._id)
              sessionStorage.setItem("userID",data.data.data.userId)
              sessionStorage.setItem("user_name", data.data.data.name)
              sessionStorage.setItem("user_email", data.data.data.email)
              sessionStorage.setItem("token", data.data.token)
              sessionStorage.setItem("user_type", data.data.data.userType)
              sessionStorage.setItem("authenticate",true)
              sessionStorage.setItem("status",data.data.data.status)
              // if(data.data.data.status){
                
                  if(data.data.data.userType==1|| data.data.data.userType=="1"){
                    toast.success(data.data.message)
                    setTimeout(()=>{
                      navigate("/admin")
                    },1000)
                  }
                  else if(data.data.data.status==true){
                    toast.success(data.data.message)
                    apiServices.singleStudent({userId:data.data.data._id}).then((data)=>{
                      sessionStorage.setItem("courseId", data.data.data.courseId?._id)
                      sessionStorage.setItem("branchId", data.data.data.branchId._id)
                    })
                      navigate("/")
                      sessionStorage.setItem("user_data", JSON.stringify(data.data.data))
                  }
                  else{
                    sessionStorage.clear()
                    setTimeout(()=>{
                      navigate("/login")
                      sessionStorage.setItem("message", "You have been blocked by Admin")
                    },1000)
                   
                  }
          }
          else{
              toast.error(data.data.message)
          }
      }).catch((error)=>{
          console.log(error)
          toast.error("Something went Wrong")
          setTimeout(()=>{
              setLoading(false)
          },1000)
      })
  }
    const changeEmail = (eve) => {
        console.log(eve.target.value)
        setEmail(eve.target.value)
    }
    const changePassword = (event) => {
        console.log(event.target.value)
        setPassword(event.target.value)
    }
        return(
            <>
            <div className="d-flex justify-content-center">
              <ClipLoader loading={loading} cssOverride={override} size={120}/>
            </div>
            <div className={loading?"disabled-screen-full":""}> 
              <section className="vh-100">
                <div className="container py-5 h-100">
                  <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-8 col-lg-7 col-xl-6">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                        className="img-fluid" alt="Phone image"/>
                    </div>
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                    <h1 className="login">LOGIN</h1>
                      <form onSubmit={handleForm}>
                        {/* <!-- Email input --> */}
                        <div className="form-outline mb-4">
                          <input type="email" id="form1Example13" className="form-control form-control-lg" value={email} onChange={changeEmail} />
                          <label className="form-label" for="form1Example13" >Email address</label>
                        </div>
                        {/* <!-- Password input --> */}
                        <div className="form-outline mb-4">
                          <input type="password" id="form1Example23" className="form-control form-control-lg" value={pass} onChange={changePassword}/>
                          <label className="form-label" for="form1Example23" >Password</label>
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg btn-block m-5 px-5"> Login </button>
                        <div className="d-flex justify-content-around align-items-center mb-4">
                          {/* <!-- Checkbox --> */}
                          <div className="form-check fs-5">
                            <label className="form-check-label" for="form1Example3">Don't have Acocunt? </label>
                            <Link to="/register"><span type="submit" className="text-primary ps-2"> Register Here! </span></Link>
                          </div>
                        </div>
                        {/* <!-- Submit button --> */}
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <ToastContainer/>
              </>
        )
    }
        
            
                    