import React, { useEffect, useState } from 'react'
import { ClipLoader } from "react-spinners";
import { toast } from 'react-toastify';
import apiServices from '../../services/apiServices';
import { useNavigate, useParams } from 'react-router-dom';
export default function UpdateMaterial(){
    const [loading,setLoading]=useState(true)
    const [course,setCourse]=useState()
    const [branch, setBranch]=useState()
    const [branchId,setBranchId]=useState()
    const [semester, setSemester]=useState(1)
    const [totalSem,setTotalSem]=useState()
    const [courseId,setCourseId]=useState()
    const [title, setTitle]=useState()
    const [description,setDescription]=useState()
    const [file,setFile]=useState()
    const [type, setType]=useState()
    const override={
      "display":"block",
      "margin":"0 auto",
      "position":"absolute",
      "top":"53%",
      "bottom":"50%",
      "zIndex":"1",  
    }
    const param=useParams()
    const id=param.id
    const nav=useNavigate()
        useEffect(()=>{
        let data={
            status:true
        }
        apiServices.allCourse(data).then((data)=>{
            // console.log(data)
            setTimeout(()=>{
                setLoading(false)
            },1500)
            setCourse(data.data.data)
          })
          apiServices.allBranch(data).then((data)=>{
            // console.log(data)
            setTimeout(()=>{
                setLoading(false)
            },1500)
            setBranch(data.data.data)
          })
          let data_id={
            _id:id
          }
          apiServices.singleMaterial(data_id).then((data)=>{
            // console.log(data)
            setTimeout(()=>{
                setLoading(false)
            },1500)
            setBranchId(data.data.data.branchId?._id)
            setCourseId(data.data.data.courseId?._id)
            setTitle(data.data.data.title)
            setType(data.data.data.materialType)
            setDescription(data.data.data.description)
            setFile(data.data.data.image)
            setSemester(data.data.data.semester)
          }).catch((error)=>{
            toast.error("Something went wrong!! Try again later!!")
          })
        },[])
       const getData= ()=>{
            let data1={
              courseId:courseId,
              status:true
            }
            apiServices.allBranch(data1).then((data)=>{
              setTimeout(()=>{
                  setLoading(false)
              },1500)
              setBranch(data.data.data)
            })
            let data2={
              _id:courseId
            }
            apiServices.singleCourse(data2).then((data)=>{
              console.log(data)
              if(data.data.success){
                  setTotalSem(data.data.data.totalSemesters)
              }
            })
            .catch(err=>{
              console.log(err)
            })
      }
    const save=(e)=>{
        e.preventDefault()
        let data= new FormData()
            data.append("courseId",courseId)
            data.append("branchId",branchId)
            data.append("semester",semester)
            data.append("title",title)
            data.append("description",description)
            data.append("material_image",file)
            data.append("materialType",type)
            data.append("_id",id)
        apiServices.updateMaterial(data).then((data)=>{
          setTimeout(()=>{
              setLoading(false)
          },1500)
          if(data.data.success){
              toast.success(data.data.message)
              setTimeout(()=>{
                if(sessionStorage.getItem("user_type")==1){
                    nav("/admin/view_material")
                }
                else{
                    nav("/manage_material")
                }
            },1500)

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
                        <h1 className="display-3 text-white animated slideInDown">Update</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center">
                                <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                <li className="breadcrumb-item"><a className="text-white" href="#">Update</a></li>
                                <li className="breadcrumb-item text-white active" aria-current="page">Material</li>
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
                        <h2 style={{fontSize:"50px"}}>Material</h2>
                    <div className="card text-bg-light my-5 p-5 mb-3">
                    <div className="card-body">
                        <form onSubmit={save}>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCity">Material Type</label>
                                    <select value={type} onChange={(e)=>{setType(e.target.value)}} className='form-control'>
                                        <option disabled selected value="">Select Material Type</option>
                                        <option value="notes">Notes</option>
                                        <option value="ebooks">E-books</option>
                                        <option value="questionpaper">Question Paper</option>
                                        <option value="labfiles">Lab Files</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCity">Title</label>
                                    <input type="text" className="form-control"placeholder="Enter Title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputState">Course</label>
                                    <select id="inputState" className="form-control" value={courseId} onChange={(e)=>{setCourseId(e.target.value)}} onBlur={getData} >
                                        <option disabled selected value="">Choose Course</option>
                                        {course?.map((el,index)=>(
                                        <option key={index} value={el?._id} selected={courseId==el?._id}>{el?.name}</option>
                                        ))} 
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCity">Semester</label>
                                    <input type="number" min="1" max={totalSem}className="form-control"placeholder="Enter Semester" value={semester} onChange={(e)=>{setSemester(e.target.value)}}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCity">Branch Name</label>
                                    <select id="inputState" className="form-control" value={branchId} onChange={(e)=>{setBranchId(e.target.value)}} >
                                        <option disabled selected value="">Choose Branch</option>
                                        {branch?.map((el,index)=>(
                                        <option key={index} value={el?._id} selected={branchId==el?._id}>{el?.name}</option>
                                        ))} 
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCity">File</label>
                                    <input type="file" className="form-control"placeholder="Upload File" onChange={(e)=>{setFile(e.target.files[0])}}/>
                                </div>
                                <div className="form-group col-md-12">
                                    <label htmlFor="inputCity">Description</label>
                                    <textarea className="form-control"placeholder="Enter Description" onChange={(e)=>{setDescription(e.target.value)}} value={description}/>
                                </div>
                            </div>
                            <button type="submit" className="btn w-25 btn-primary my-4">Upload</button>
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