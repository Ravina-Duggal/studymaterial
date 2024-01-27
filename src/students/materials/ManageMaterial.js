import { useEffect, useState } from "react";
import {ClipLoader} from "react-spinners";
import {toast} from "react-toastify";
import { Link, Navigate } from "react-router-dom";
import apiServices, { BASE_URL_Image } from "../../services/apiServices";
export default function ManageMaterial(){

    const [material,setMaterial]=useState()
    const [loading,setLoading]=useState(true)
    const [course,setCourse]=useState()
    const [courseId,setCourseId]=useState()
    const override={
    "display":"block",
    "margin":"0 auto",
    "position":"absolute",
    "top":"50%",
    "bottom":"50%",
    "zIndex":"1",  
    }
    useEffect(()=>{
        apiServices.allCourse().then((data)=>{
            // console.log(data)
            setTimeout(()=>{
                setLoading(false)
            },1500)
            if(data.data.success){
                setCourse(data.data.data)
                toast.success(data.data.message)
            }
            else{
                toast.error(data.data.message)
            }
        })
    },[])
 useEffect(()=>{
    if(courseId==""|| courseId=="All"|| courseId==undefined){
        var data={
            userId:sessionStorage.getItem("user_id")
        }  
    }
    else{
        var data={
            courseId:courseId,
            userId:sessionStorage.getItem("user_id")
        }
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
 },[loading, courseId])
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
                        <h1 className="display-3 text-white animated slideInDown">MANAGE</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center">
                                <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                <li className="breadcrumb-item"><a className="text-white" href="#">Manage</a></li>
                                <li className="breadcrumb-item text-white active" aria-current="page">Material</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Header End --> */}
            <div className="container my-3 py-3 text-center  animated slideInDown">
                <h1>Material</h1>
                
            </div>
            <div className="container table-responsive g-0" >
                <div className="d-flex justify-content-end">
                <select className="form-control w-25 my-3" value={courseId} onChange={(e)=>{setCourseId(e.target.value)}} >
                    <option selected disabled value="">Choose Course</option>
                    <option  value="All">All</option>
                    {course?.map((el,index)=>(
                        <option  key={index} value={el?._id}>{el?.name}</option>
                    ))}
                </select>
              </div>
               <table className="table table-striped table-hover table-primary table-bordered animated slideInLeft" style={{boxShadow:"10px 0px 10px grey"}}>
                    <thead>
                        <tr>
                            <td>Sr No</td>
                            <td>Title</td>
                            <td>Material Type</td>
                            <td>Course Name</td>
                            <td>Branch Name</td>
                            <td>Semester</td> 
                            <td>File</td>
                            <td>Description</td>     
                            <td>Status</td>    
                            <td>Action</td>
                        </tr>
                    </thead>
                        {material?.map((element,index)=>(
                            <tbody >
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{element?.title}</td>
                                <td>{element?.materialType}</td>
                                <td>{element?.courseId?.name}</td>
                                <td>{element?.branchId?.name}</td>
                                <td>{element?.semester}</td>
                                <td><Link to={BASE_URL_Image+element?.image}>View</Link></td>
                                <td>{element?.description}</td>
                                <td>{element?.status?"Active":"In-active"}</td>
                                <td  >
                                <Link to={"/admin/update_material/"+element?._id}>
                                    <button className="btn btn-outline-success me-4 rounded-pill ">Edit</button>
                                </Link>
                                </td>
                            </tr>
                            </tbody>
                        ))}
                </table> 
            </div>
        </div>
        </>
    )
}