import React, { useState } from 'react'
import { ClipLoader } from "react-spinners";
import { toast } from 'react-toastify';
import apiServices from '../../services/apiServices';
export default function AddCourse(){
    const [loading,setLoading]=useState(false)
    const [course,setCourse]=useState()
    const [semester, setSemester]=useState()
    const override={
      "display":"block",
      "margin":"0 auto",
      "position":"absolute",
      "top":"50%",
      "bottom":"50%",
      "zIndex":"1",  
    }
    const save=(e)=>{
      e.preventDefault()
      let data={
        name:course,
        totalSemesters:semester
      } 
      apiServices.addCourse(data).then((data)=>{
        setTimeout(()=>{
            setLoading(false)
        },1500)
        if(data.data.success){
            toast.success(data.data.message)
            setCourse("")
            setSemester("")
          }
        else{
            toast.error(data.data.message)
        }
    }).catch((error)=>{
        // console.log(error)
        toast.error("Something went wrong")
        setTimeout(()=>{
            setLoading(false)
        },1500)
    })
    }
    return(
        <>
            <div className="container-fluid bg-primary py-5 mb-5 page-header">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-3 text-white animated slideInDown">ADD</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a className="text-white" href="#">Add</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Course</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        {/* <!-- Header End --> */}
            <div className="d-flex justify-content-center">
            <ClipLoader loading={loading} cssOverride={override} size={120}/>
            </div>
            <div className={loading?"disabled-screen-full":""}>        
                <div className="container my-3 py-5 animated slideInDown" >
                    <div className="row p-5" style={{boxShadow:"0px 0px 10px grey"}}>
                        <div className="col-md-12">
                            <h2 style={{fontSize:"50px"}}>COURSE</h2>
                            <div className="card text-bg-light my-5 p-5 mb-3">
                                <div className="card-body">
                                <form onSubmit={save}>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputPassword4">Course Name</label>
                                            <input type="text" className="form-control" id="inputPassword4" placeholder="Course Name" value={course} onChange={(e)=>{setCourse(e.target.value)}}/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputPassword4">Semester</label>
                                            <input type="number" min="1" max="10" className="form-control" id="inputPassword4" placeholder="Semester" value={semester} onChange={(e)=>{setSemester(e.target.value)}}/>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-5 mb-2 btn-lg w-25 fs-2">Upload</button>
                                </form>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}