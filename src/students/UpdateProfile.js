import apiServices from "../services/apiServices"
import { useState,useEffect } from "react"
import { Navigate } from "react-router-dom";
import {ClipLoader} from "react-spinners"
import { toast} from "react-toastify";
export default function UpdateProfile(){
 
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const [course,setCourse]=useState()
    const [courseId,setCourseId]=useState()
    const [branch,setBranch]=useState()
    const [branchId,setBranchId]=useState()
    const [semester,setSemester]=useState(1)
    const [contact,setContact]=useState()
    const [rno,setRno]=useState()
    const [loading,setLoading]=useState(true)
    const override={
      "display":"block",
      "margin":"0 auto",
      "position":"absolute",
      "top":"53%",
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
          setCourse(data.data.data)
        })
        let data_id={
            userId:sessionStorage.getItem("user_id")
      }
      apiServices.allBranch(data).then((data)=>{
        setBranch(data.data.data)
      })
      apiServices.singleStudent(data_id).then((data)=>{
        setTimeout(()=>{
            setLoading(false)
        },1500)
        if(data.data.success){
            toast.success(data.data.message)
            setBranchId(data.data.data.branchId)
            setCourseId(data.data.data.courseId)
            setName(data.data.data.name)
            setContact(data.data.data.contact)
            setEmail(data.data.data.email)
            // setPassword(data.data.data.password)
            setRno(data.data.data.rollNo)
            setSemester(data.data.data.semester)
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
         
    }
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
    const save=(e)=>{
      e.preventDefault()
      let data={
      name:name,
      rollNo:rno,
      contact:contact,
      email:email,
      password:password,
      courseId:courseId,
      branchId:branchId
      }
      apiServices.updateProfile(data).then((data)=>{
        setTimeout(()=>{
            setLoading(false)
        },1500)
        if(data.data.success){
            toast.success(data.data.message)
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
          <div className="d-flex justify-content-center">
          <ClipLoader loading={loading} cssOverride={override} size={120}/>
        </div>
        <div className={loading?"disabled-screen-full":""}>  
          <section className="h-100">
            <div className="container py-5 h-100  animated slideInDown">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col">
                  <div className="card card-registration my-4">
                    <div className="row g-0">
                      <div className="col-xl-10 offset-md-1">
                        <div className="card-body p-md-5 text-black">
                          <h3 className="mb-5 text-uppercase  text-primary">Update Your Profile</h3>
                          <form onSubmit={save}>
                          <div className="row">
                            <div className="col-md-6 mb-4">
                              <div className="form-outline">
                                <input type="text" id="form3Example1m" className="form-control form-control-lg" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                                <label className="form-label" for="form3Example1m">Student name</label>
                              </div>
                            </div>
                            <div className="col-md-6 mb-4">
                              <div className="form-outline">
                                <input type="text" id="form3Example1n" className="form-control form-control-lg" value={rno} onChange={(e)=>{setRno(e.target.value)}}/>
                                <label className="form-label" for="form3Example1n">Roll No.</label>
                              </div>
                            </div>
                            <div className="col-md-6 mb-4">
                              <div className="form-outline">
                                <input type="text" id="form3Example1n" className="form-control form-control-lg" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                                <label className="form-label" for="form3Example1n">Email</label>
                              </div>
                            </div>
                            <div className="col-md-6 mb-4">
                              <div className="form-outline">
                                <input type="text" id="form3Example1n" className="form-control form-control-lg" value={password} required onChange={(e)=>{setPassword(e.target.value)}} />
                                <label className="form-label" for="form3Example1n">Password</label>
                              </div>
                            </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-outline mb-4">
                              <input type="number" id="form3Example8" className="form-control form-control-lg" value={contact} onChange={(e)=>{setContact(e.target.value)}} />
                              <label className="form-label" for="form3Example8">Contact</label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-outline mb-4">
                              <select id="inputState" className="form-control  form-control-lg" value={courseId} onChange={(e)=>{setCourseId(e.target.value)}} onBlur={getData} >
                                <option disabled  value="">Choose Course</option>
                                  {course?.map((el,index)=>(
                                  <option key={index} value={el?._id} selected={courseId==el?._id}>{el?.name}</option>
                                  ))} 
                              </select>
                              <label className="form-label" for="form3Example90">Course</label>
                            </div>
                          </div>
                          <div className="col-md-12 mb-4">
                            <div className="form-outline mb-4">
                              <select id="inputState" className="form-control  form-control-lg" value={branchId} onChange={(e)=>{setBranchId(e.target.value)}} >
                                  <option disabled value="">Choose Branch</option>
                                  {branch?.map((el,index)=>(
                                  <option key={index} value={el?._id} selected={branchId==el?._id}>{el?.name}</option>
                                  ))} 
                              </select>
                              <label className="form-label" for="form3Example99">Branch</label>
                            </div>
                          </div>
                        </div>
                          <div className="d-flex justify-content-center pt-3">
                            {/* <button type="button" className="btn btn-primary btn-lg ms-2">RESET</button> */}
                            <button type="submit" className="btn btn-primary btn-lg w-25">REGISTER</button>
                          </div>
                        </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        
        </>
    )
}