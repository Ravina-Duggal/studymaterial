import React, { useEffect, useState } from 'react'
import { ClipLoader } from "react-spinners";
import { toast } from 'react-toastify';
import apiServices from '../../services/apiServices';
import { useNavigate, useParams } from 'react-router-dom';
export default function UpdateQuiz(){
    const [loading,setLoading]=useState(true)
    const [course,setCourse]=useState()
    const [branch, setBranch]=useState()
    const [branchId,setBranchId]=useState()
    const [semester, setSemester]=useState(1)
    const [totalSem,setTotalSem]=useState()
    const [courseId,setCourseId]=useState()
    const [title, setTitle]=useState()
    const [totalques,setTotalQues]=useState()
    const [description,setDescription]=useState()
    const override={
      "display":"block",
      "margin":"0 auto",
      "position":"absolute",
      "top":"53%",
      "bottom":"50%",
      "zIndex":"1",  
    }
    const nav=useNavigate()
    const param=useParams()
    const id=param.id
    useEffect(()=>{
        let data_id={
            _id:id
        }
        apiServices.singleQuiz(data_id).then(
            (data)=>{
                setLoading(false)
                if(data.data.success){
                    toast.success(data.data.message)
                    setCourseId(data.data.data.courseId?._id)
                    setBranchId(data.data.data.branchId?._id)
                    setTitle(data.data.data.title)
                    setSemester(data.data.data.semester)
                    setTotalQues(data.data.data.totalQuestions)
                    setDescription(data.data.data.description)
                }
                else{
                    toast.error(data.data.message)
                }
            }
        ).catch(
            (error)=>{
                toast.error("Something Went Wrong!! Try again later!!")
            }
        )
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
        let data={
            courseId:courseId,
            branchId:branchId,
            semester:semester,
            title:title,
            description:description,
            totalQuestions:totalques,
            _id:id
        } 
        apiServices.updateQuiz(data).then((data)=>{
          setTimeout(()=>{
              setLoading(false)
          },1500)
            if(data.data.success){
                toast.success(data.data.message)
                setTimeout(()=>{
                    nav("/admin/view_quiz")
                })
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
                                <li className="breadcrumb-item text-white active" aria-current="page">Quiz</li>
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
                        <h2 style={{fontSize:"50px"}}>Quiz</h2>
                    <div className="card text-bg-light my-5 p-5 mb-3">
                    <div className="card-body">
                        <form onSubmit={save}>
                            <div className="row">
                            <div className="form-group col-md-6">
                                    <label htmlFor="inputCity">Title</label>
                                    <input type="text" className="form-control"placeholder="Quiz Title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCity">Total Question</label>
                                    <input type="number" className="form-control"placeholder="Total Number of Question" value={totalques} onChange={(e)=>{setTotalQues(e.target.value)}} min="1"/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCity">Description</label>
                                    <input type="text" className="form-control"placeholder="Enter Description" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputState">Course</label>
                                    <select id="inputState" className="form-control" value={courseId} onChange={(e)=>{setCourseId(e.target.value)}} onBlur={getData} >
                                        <option disabled  value="">Choose Course</option>
                                        {course?.map((el,index)=>(
                                        <option key={index} value={el?._id} selected={courseId==el?._id}>{el?.name}</option>
                                        ))} 
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCity">Semester</label>
                                    <input type="number" min="1" max={totalSem}className="form-control"placeholder="Branch Name" value={semester} onChange={(e)=>{setSemester(e.target.value)}}/>
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