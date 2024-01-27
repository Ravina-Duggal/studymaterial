import { useEffect, useState } from "react";
import {ClipLoader} from "react-spinners";
import {toast} from "react-toastify";
import { Link, Navigate } from "react-router-dom";
import apiServices from "../../services/apiServices";
export default function QuizResult(){
   
    const [material,setMaterial]=useState()
    const [loading,setLoading]=useState(true)
    const override={
    "display":"block",
    "margin":"0 auto",
    "position":"absolute",
    "top":"50%",
    "bottom":"50%",
    "zIndex":"1",  
    }
 useEffect(()=>{
    let data={
        userId:sessionStorage.getItem("user_id"),
    }
    apiServices.allSubmission(data).then((data)=>{
        // console.log(data)
        setTimeout(()=>{
            setLoading(false)
        },1500)
        if(data.data.success){
            setMaterial(data.data.data)
        }
        else{
            toast.error(data.data.message)
        }
    }).catch((error)=>{
        // console.log(error)
        toast.error("Something went wrong!!Try Again Later")
        setTimeout(()=>{
            setLoading(false)
        },1000)
    })
 },[loading])
 const authenticate=sessionStorage.getItem("authenticate")
 const userType=sessionStorage.getItem("user_type")
 if(!authenticate){
     sessionStorage.setItem("message", "Please Login!!")
     return <Navigate replace to="/login"/>
 }
 if(userType !=2){
     sessionStorage.setItem("message", "You don't have the right to access this page!!")
     return <Navigate replace to="/login"/>
 }
    return(
        <>
         <div className="d-flex justify-content-center">
          <ClipLoader loading={loading} cssOverride={override} size={120}/>
        </div>
        <div className={loading?"disabled-screen-full":""}> 
         {/* <!-- Header Start --> */}
        <div className="container-fluid bg-primary py-5 mb-5 page-header">
            <div className="container py-5" >
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                        <h1 className="display-3 text-white animated slideInDown">View</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center">
                                <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                <li className="breadcrumb-item"><a className="text-white" href="#">View</a></li>
                                <li className="breadcrumb-item text-white active" aria-current="page">Result</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Header End --> */}
            <div className="container my-3 py-3 text-center  animated slideInDown">
                <h1>Results</h1>
                
            </div>
            <div className="container table-responsive g-0" >
               <table className="table table-striped table-hover table-primary table-bordered animated slideInLeft" style={{boxShadow:"10px 0px 10px grey"}}>
                    <thead>
                        <tr>
                            <td>Sr No</td>
                            <td>Title</td>
                            <td>Semester</td> 
                            <td>Description</td>   
                            <td>Total Questions</td>  
                            <td>Correct Answers</td>
                        </tr>
                    </thead>
                        {material?.map((element,index)=>(
                            <tbody >
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{element?.quizId?.title}</td>
                                <td>{element?.quizId?.semester}</td>
                                <td>{element?.quizId?.description}</td>
                                <td>{element?.totalQuestions}</td>
                                <td>{element?.correctQuestions}</td>
                            </tr>
                            </tbody>
                        ))}
                </table> 
            </div>
        </div>
        </>
    )
}