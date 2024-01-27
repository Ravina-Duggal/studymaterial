import { useEffect, useState } from "react"
import { ClipLoader } from "react-spinners";
import { toast } from 'react-toastify';
import apiServices from '../../services/apiServices';
import { useNavigate, useParams } from "react-router-dom";
export default function UpdateBranch(){
    const [loading,setLoading]=useState(true)
    const [course,setCourse]=useState()
    const [branch, setBranch]=useState()
    const [courseId,setCourseId]=useState()
    const override={
      "display":"block",
      "margin":"0 auto",
      "position":"absolute",
      "top":"50%",
      "bottom":"50%",
      "zIndex":"1",  
    } 
    const navigate=useNavigate()
    const param=useParams()
    const id=param.id
    useEffect(()=>{
        let data={
            status:true
        }
        apiServices.allCourse(data).then((data)=>{
            setLoading(false)
            setCourse(data.data.data)
          })
    },[])
    useEffect(()=>{
        let data={
            _id:id,
        }
        apiServices.singleCourse(data).then(
            (data)=>{
                setLoading(false)
                if(data.data.success){
                    toast.success(data.data.message)
                    setCourseId(data.data.data.courseId?._id)
                    setBranch(data.data.data.name)
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
    },[])
  
    const save=(e)=>{
      e.preventDefault()
      setLoading(true)
      let data={
        name:branch,
        courseId:courseId,
        _id:id
      } 
      apiServices.updateBranch(data).then((data)=>{
        if(data.data.success){
            toast.success(data.data.message)
            setTimeout(()=>{
                navigate("/admin/view_branch")
            },1000)
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
                                    <li className="breadcrumb-item text-white active" aria-current="page">Branch</li>
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
                            <h2 style={{fontSize:"50px"}}>Branch</h2>
                            <div className="card text-bg-light my-5 p-5 mb-3">
                                <div className="card-body">
                                <form onSubmit={save}>
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputCity">Branch Name</label>
                                            <input type="text" className="form-control"placeholder="Branch Name" value={branch} onChange={(e)=>{setBranch(e.target.value)}}/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label htmlFor="inputState">Course</label>
                                            <select id="inputState" className="form-control" value={courseId} onChange={(e)=>{setCourseId(e.target.value)}} >
                                                <option disabled  value="">Choose Course</option>
                                                {course?.map((el,index)=>(
                                                <option key={index} value={el?._id} selected={courseId==el?._id}>{el?.name}</option>
                                                ))} 
                                            </select>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn w-25 btn-primary my-4">Update</button>
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