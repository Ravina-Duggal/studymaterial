import apiServices from "../services/apiServices"
import { Link } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import { ClipLoader } from "react-spinners";
import {toast} from "react-toastify"
export default function Adminhome(){
    const override={
        "display":"block",
        "margin":"0 auto",
        "position":"absolute",
        "top":"50%",
        "bottom":"50%",
        "zIndex":"1",
    }
    const [loading,setLoading]=useState(true)
    const [data,setData]=useState()
    useEffect(()=>{
      apiServices.dashboard().then((data)=>{
      console.log(data)
      setTimeout(()=>{
        setLoading(false)
      },1500)
      if(data.data.success){
        setData(data.data)
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
    },[])
    return(
       <>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        <div className="container my-3 p-3  animated slideInDown">
            <div className="row">
                <div className="col-sm-6 col-md-6  mb-3 wow ">
                    <div className="card shadow ">
                        <div className="card-body">
                            <div className="d-flex align-items-center position-relative pb-3">
                                <div className="flex-shrink-0">
                                    <img className="img-md rounded-circle" src="/assets/img/Teacher2.png" alt="Profile Picture" loading="lazy" style={{width:"227px"}}/>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <a href="#" className="h5 stretched-link btn-link">Total Courses </a>
                                    <h1 className="text-muted m-0">{data?.totalCourses}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-6  mb-3">
                    <div className="card shadow">
                        <div className="card-body">

                            {/* <!-- Profile picture and short information --> */}
                            <div className="d-flex align-items-center position-relative pb-3">
                                <div className="flex-shrink-0">
                                    <img className="img-sm rounded-circle" src="/assets/img/Students.jpeg" alt="Profile Picture" loading="lazy"/>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <a href="#" className="h5 stretched-link btn-link">Total Students</a>
                                    <h1 className="text-muted m-0">{data?.totalStudents}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container  animated slideInDown">
            <div className="row">
                <div className="col-sm-6 col-md-6  mb-3">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="d-flex align-items-center position-relative pb-3">
                                <div className="flex-shrink-0">
                                    <img className="img-md rounded-circle" src="/assets/img/notes.jpeg" alt="Profile Picture" loading="lazy" style={{height:"215px"}}/>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <a href="#" className="h5 stretched-link btn-link">Uploaded Notes </a>
                                    <h1 className="text-muted m-0">{data?.totalNotes}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-6  mb-3 ">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="d-flex align-items-center position-relative pb-3">
                                <div className="flex-shrink-0">
                                    <img className="img-sm rounded-circle" src="/assets/img/Quiz.png" alt="Profile Picture" loading="lazy"/>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <a href="#" className="h5 stretched-link btn-link">Uploaded Quiz</a>
                                    <h1 className="text-muted m-0">{data?.totalQuizes}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
       </> 
    )
}