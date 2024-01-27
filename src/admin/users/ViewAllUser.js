import { useEffect, useState } from "react";
import {ClipLoader} from "react-spinners";
import {toast} from "react-toastify";
import { Link } from "react-router-dom";
import apiServices  from "../../services/apiServices";
export default function ViewAllUser(){
    const [material,setMaterial]=useState()
    const [course,setCourse]=useState()
    const [loading,setLoading]=useState(true)
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
        var datas={}  
    }
    else{
        var datas={
            courseId:courseId
        }
    }
    apiServices.allStudent(datas).then((data)=>{
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
 },[loading,courseId])
 const changeStatus=(id,status)=>{
    setLoading(true)
    if(status==true){
     var upstatus=false
    }
    else{
     var upstatus=true
    }
    let data={
      _id:id, 
      status:upstatus
    }
    apiServices.changeStatusStudent(data).then((data)=>{
      // console.log(data)
      setTimeout(()=>{
          setLoading(false)
      },1000)
      if(data.data.success){
          toast.success(data.data.message)
      }
      else{
          toast.error(data.data.message)
      }
  }).catch((error)=>{
      // console.log(error)
      toast.error("Something went wrong!!Try Again Later")
      setTimeout(()=>{
          setLoading(false)
      },1500)
  })
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
                                <li className="breadcrumb-item text-white active" aria-current="page">Users</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Header End --> */}
       
            <div className="container my-3 py-3 text-center  animated slideInDown">
                <h1>USERS</h1>
                
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
                            <td>Name</td>
                            <td>Email</td>
                            <td>Course Name</td>
                            <td>Branch Name</td>
                            <td>Roll No</td>
                            <td>Contact</td>     
                            <td>Status</td>    
                            <td>Action</td>
                        </tr>
                    </thead>
                    
                        {material?.map((element,index)=>(
                            <tbody >
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{element?.name}</td>
                                <td>{element?.email}</td>
                                <td>{element?.courseId?.name}</td>
                                <td>{element?.branchId?.name}</td>
                                <td>{element?.rollNo}</td>
                                <td>{element?.contact}</td>
                                <td>{element?.userId?.status?"Active":"In-active"}</td>
                                <td >
                                <button type="submit" className='btn btn-outline-danger rounded-pill' onClick={()=>{changeStatus(element?.userId?._id,element?.userId?.status)}}>Change Status</button>
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