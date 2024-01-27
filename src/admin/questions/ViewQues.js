import { useEffect, useState } from "react";
import {ClipLoader} from "react-spinners";
import {toast} from "react-toastify";
import apiServices from "../../services/apiServices";
import { Link, useParams } from "react-router-dom";
export default function ViewQues(){
    const [ques,setQues]=useState()
 const [loading,setLoading]=useState(true)
 const override={
    "display":"block",
    "margin":"0 auto",
    "position":"absolute",
    "top":"50%",
    "bottom":"50%",
    "zIndex":"1",  
  }
  const param=useParams()
  const id=param.id
 useEffect(()=>{
    if(id!=null || id!=undefined|| id!=""){
        var data1={
            quizId:id
        }
    }
    else{
        var data1={}
    }
    apiServices.allQues(data1).then((data)=>{
        // console.log(data)
        setTimeout(()=>{
            setLoading(false)
        },1500)
        if(data.data.success){
            setQues(data.data.data)
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
    apiServices.changeStatusQues(data).then((data)=>{
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
                                <li className="breadcrumb-item text-white active" aria-current="page">Quiz Question</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Header End --> */}
       
            <div className="container my-3 py-3 text-center  animated slideInDown">
                <h1>Quiz Question</h1>
                
            </div>
              
            <div className="container table-responsive g-0" >
               <table className="table table-striped table-hover table-primary table-bordered animated slideInLeft" style={{boxShadow:"10px 0px 10px grey"}}>
                    <thead>
                        <tr>
                            <td>Sr No</td>
                            <td>Quiz Title</td>
                            <td>Question Number</td>
                            <td>Question</td>
                            <td>Option 1</td>
                            <td>Option 2</td>
                            <td>Option 3</td>
                            <td>Option 4</td>
                            <td>Answer</td> 
                            <td>Status</td>      
                            <td>Action</td>
                        </tr>
                    </thead>
                    
                        {ques?.map((element,index)=>(
                            <tbody >
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{element?.quizId?.title}</td>
                                <td>{element?.questionNo}</td>
                                <td>{element?.question}</td>
                                <td>{element?.option1}</td>
                                <td>{element?.option2}</td>
                                <td>{element?.option3}</td>
                                <td>{element?.option4}</td>
                                <td>{element?.answer}</td>
                                <td>{element?.status?"Active":"In-active"}</td>
                                <td width="270px" >
                                <Link to={"/admin/update_ques/"+element?._id}>
                                    <button className="btn btn-outline-success me-4 rounded-pill ">Edit</button>
                                </Link>
                                <button type="submit" className='btn btn-outline-danger rounded-pill' onClick={()=>{changeStatus(element?._id,element?.status)}}>Change Status</button>
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