import { useEffect, useState } from "react";
import {ClipLoader} from "react-spinners";
import {toast} from "react-toastify";
import apiServices from "../../services/apiServices";
import { Link } from "react-router-dom";
// import ViewBranchUser from "./ViewBranchUser";
export default function ViewCourseUser(){
    const [course,setCourse]=useState()
 const [loading,setLoading]=useState(true)
 const [courseId,setCourseId]=useState()
 const [branch,setBranch]=useState()
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
        status:true
    }
    apiServices.allCourse(data).then((data)=>{
        // console.log(data)
        setTimeout(()=>{
            setLoading(false)
        },1500)
        if(data.data.success){
            setCourse(data.data.data)
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
 useEffect(()=>{
    if(courseId!=null||courseId!=''|| courseId!=undefined){
        var data1={
            courseId:courseId,
            status:true
        }
    }
    else{
        var data1={
            status:true
        }
    }
 
    apiServices.allBranch(data1).then((data)=>{
        // console.log(data)
        setTimeout(()=>{
            setLoading(false)
        },1500)
        if(data.data.success){
            setBranch(data.data.data)
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
 },[loading,courseId])
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
                                <li className="breadcrumb-item"><a className="text-white" href="#">Manage</a></li>
                                <li className="breadcrumb-item text-white active" aria-current="page">Course</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div> 
        </div>
        {/* <!-- Header End --> */}
            
            <div className="container-fluid p-5" >
                <div className="row">
                    <div className="col-md-7">
                        <div className="container my-3 py-3 text-center  animated slideInDown">
                            <h1>Courses</h1>
                        </div>
                        <div className="row">
                        {course?.map((el,index)=>(
                            <div className="col-md-4 ">
                                <div className="card p-4 shadow m-3" style={{borderRadius:"5px !important"}}>
                                    <h1>{el?.name}</h1>
                                    <p>Semesters: {el?.totalSemesters}</p>
                                    <button className="btn btn-info  mx-auto d-block" onClick={(e)=>{setCourseId(el?._id)}}>View</button>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className="col-md-5" >
                        <div className="card py-5" style={{boxShadow:"10px 0px 10px grey"}}>
                            <div className="container my-3 py-3 text-center  animated slideInDown">
                                <h1>Branch</h1>
                            </div>
                            <div className="container" >
                                <div className="row">
                                    {branch?.map((el,index)=>(
                                        <div className="col-md-4 my-2  ">
                                            <Link to="/view_material_type">
                                                <div className="card p-4 shadow" style={{borderRadius:"5px !important"}}>
                                                    <h1>{el?.name}</h1>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
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