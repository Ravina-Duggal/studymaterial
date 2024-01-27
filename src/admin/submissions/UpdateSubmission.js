import { useEffect, useState } from "react"
import { ClipLoader } from "react-spinners";
import { toast } from 'react-toastify';
import apiServices from '../../services/apiServices';
import { useNavigate, useParams } from "react-router-dom";
export default function UpdateSubmission(){
    const [loading,setLoading]=useState(true)
    const [totalques,setTotalques]=useState()
    const [correct,setCorrect]=useState()
    const [quiz,setQuiz]=useState()
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
            _id:id,
        }
        apiServices.singleSubmission(data).then(
            (data)=>{
                setLoading(false)
                if(data.data.success){
                    toast.success(data.data.message)
                    setTotalques(data.data.data.totalQuestions)
                    setCorrect(data.data.data.correctQuestions)
                    setQuiz(data.data.data.quizId.title)
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
        totalQuestions:totalques,
        correctQuestions:correct,
        _id:id
      } 
      apiServices.updateSubmission(data).then((data)=>{
        if(data.data.success){
            toast.success(data.data.message)
            setTimeout(()=>{
                navigate("/admin/view_submission")
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
                                    <li className="breadcrumb-item text-white active" aria-current="page">Marks</li>
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
                            <h2 style={{fontSize:"50px"}}>Update Marks</h2>
                            <div className="card text-bg-light my-5 p-5 mb-3">
                                <div className="card-body">
                                <form onSubmit={save}>
                                    <div className="row">
                                        <div className="form-group col-md-10 offset-md-1">
                                            <label htmlFor="inputPassword4">Quiz</label>
                                            <input type="text" className="form-control" id="inputPassword4" placeholder="Quiz Name" value={quiz}  readOnly/>
                                        </div>
                                        <div className="form-group col-md-10 offset-md-1">
                                            <label htmlFor="inputPassword4">Total Questions</label>
                                            <input type="text" className="form-control" id="inputPassword4" placeholder="Total Questions" value={totalques} onChange={(e)=>{setTotalques(e.target.value)}}/>
                                        </div>
                                        <div className="form-group col-md-10 offset-md-1">
                                            <label htmlFor="inputPassword4">Correct Answers</label>
                                            <input type="number" min="1" max="10" className="form-control" id="inputPassword4" placeholder="Correct Answers" value={correct} onChange={(e)=>{setCorrect(e.target.value)}}/>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-5 mb-2 btn-lg w-25 fs-2">Update</button>
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