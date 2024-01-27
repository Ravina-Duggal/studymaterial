import { useEffect, useState } from "react";
import {ClipLoader} from "react-spinners";
import {toast} from "react-toastify";
import apiServices from "../../services/apiServices";
import { Link, Navigate, useParams } from "react-router-dom";
export default function ViewUploadedContent(){
    
    const [material,setMaterial]=useState()
 const [loading,setLoading]=useState(true)
 const param=useParams()
 const type=param.type
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
        status:true,
        materialType:type,
        branchId:sessionStorage.getItem('branchId'),
        courseId:sessionStorage.getItem("courseId")
    }
    apiServices.allMaterial(data).then((data)=>{
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
                                <ol className="breadcrumb justify-content-center text-uppercase">
                                    <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">{}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        {/* <!-- Header End --> */}
            <div className="container my-3 py-3 text-center  animated slideInDown">
                <h1 className="text-uppercase">{type}</h1>
            </div>
            <div className="container p-5" >
                <div className="row">
                {material?.map((el,index)=>(
                    <div className="col-md-4 ">
                        <div className="card p-4" style={{borderRadius:"5px !important"}}>
                            <h1>{el?.title}</h1>
                            <p>Course : {el?.courseId?.name}</p>
                            <p>Branch- {el?.branchId?.name} Semesters: {el?.semester}</p>
                            <p>{el?.description}</p>
                            <Link to={"/view_single_content/"+el?._id}>
                                <button className="btn btn-info  mx-auto d-block" >View</button>
                            </Link>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
        </>
    )
}