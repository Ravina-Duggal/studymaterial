import { useEffect, useState } from "react";
import {ClipLoader} from "react-spinners";
import {toast} from "react-toastify";
import apiServices from "../../services/apiServices";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
export default function ViewQuizUser(){
    
    const [quiz,setQuiz]=useState()
    const [ques,setQues]=useState()
 const [loading,setLoading]=useState(true)
 const [correctAns,setCorrectAns]=useState(0)
 const [reset, setResetPage]=useState(false)
 const [form,setForm]=useState(false)
 let arr_of_ques=[]
 const override={
    "display":"block",
    "margin":"0 auto",
    "position":"absolute",
    "top":"50%",
    "bottom":"50%",
    "zIndex":"1",  
  }
  const nav=useNavigate()
  const param=useParams()
  const id=param.id
  const [result,setResult]=useState(false)
 useEffect(()=>{
    let data={
        status:true,
        quizId:id
    }
    let data_id={
        _id:id
    }
    apiServices.singleQuiz(data_id).then(
        (data)=>{
            if(data.data.success){
                setQuiz(data.data.data)
            }
            else{
                toast.error(data.data.message)
            }
        }
    )
   
    apiServices.allQues(data).then((data)=>{
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
 useEffect(()=>{
    nav("/play_quiz/"+id)
    for(let i=0;i<document.getElementsByTagName('input').length;i++){
        document.getElementsByTagName('input')[i].disabled=false
    }
    setResetPage(false)
},[reset])
 const checkAnswer=(opt, ans,id, name)=>{
    // console.log(opt, ans, "name is ", name)
    if(arr_of_ques.includes(id)){
       setCorrectAns(correctAns-1)
    //    console.log(correctAns ,'dec')
    }
    else{
        arr_of_ques.push(id)
        console.log(arr_of_ques)
    }
    if(opt==ans){
        // console.log("Answer correct")
        setCorrectAns(correctAns+1)
        // console.log(correctAns)
    }
    for(let i=0;i<=3;i++){
        // if(document.getElementsByName(name)[i].value!=opt){
            document.getElementsByName(name)[i].disabled=true
        // }
    }
 }
    const handleForm=(e)=>{
        e.preventDefault()
    
        let data={
            totalQuestions:quiz?.totalQuestions,
            userId:sessionStorage.getItem("user_id"),
            quizId:quiz?._id,
            correctQuestions:correctAns
        }
        console.log(data)
        apiServices.submitQuiz(data).then((data)=>{
            if(data.data.success){
                toast.success(data.data.message);
                formSubmitted()
            }
            else{
                toast.error(data.data.message)
            }
        }).catch((error)=>{
            toast.error("Something went Wrong!!")
        })
    }
    const resetPage=()=>{
        setCorrectAns(0)
        setResetPage(true)
        setResult(false)
        setForm(false)
    }
    const formSubmitted=()=>{
       
        setForm(true)
    }
    const showResult=()=>{
        setResult(true)
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
                                    <li className="breadcrumb-item text-white active" aria-current="page">Quiz</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        {/* <!-- Header End --> */}
            <div className="container my-3 py-3 text-center  animated slideInDown">
                <h1 className="text-uppercase">{quiz?.title}</h1>
            </div>
            <div className="container p-5" >
                <div className="row">
                    {ques!=""?
                    <form onSubmit={handleForm}>
                    
                    {ques?.map((el,index)=>(
                    <div className="col-md-10 offset-md-1 my-3">
                        <div className="card text-start rounded-4">
                            <div className="card-header fs-3">
                                {index+1}. {el?.question}
                            </div>
                            <div className="card-body fs-4">
                                <input type="radio" className="form-check-input" name={el?.questionNo} required  value={"option1"} onBlur={(e)=>{checkAnswer(e.target.value, el?.answer,el?._id, e.target.name)}}/> <label className="ps-2">{el?.option1}</label> <br/>
                                <input type="radio" className="form-check-input" name={el?.questionNo} required value={"option2"} onBlur={(e)=>{checkAnswer(e.target.value, el?.answer,el?._id, e.target.name)}}/> <label className="ps-2">{el?.option2}</label> <br/>
                                <input type="radio"  className="form-check-input" name={el?.questionNo} required value={"option3"} onBlur={(e)=>{checkAnswer(e.target.value, el?.answer,el?._id, e.target.name)}}/> <label className="ps-2">{el?.option3}</label> <br/>
                                <input type="radio" className="form-check-input" name={el?.questionNo} required value={"option4"} onBlur={(e)=>{checkAnswer(e.target.value, el?.answer,el?._id, e.target.name)}}/> <label className="ps-2">{el?.option4}</label>
                            </div>
                        </div>
                    </div>
                    ))}
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-danger w-25 me-3" onClick={resetPage} type="reset">Reset</button>
                        <button className="btn btn-primary w-25" >Submit</button>
                    </div>
                    </form>
                    :<h1>No Data Present</h1>}
                </div>
                
                <hr/>
             
                {form?
                <div className="d-flex justify-content-center">
                    <button className="btn btn-success" onClick={showResult}>View Result</button>
                </div>:""}
                {result?
                <div className="d-flex justify-content-center my-3">
                    <div className="card p-5">
                        <h1>Total Questions: {quiz?.totalQuestions}</h1>
                        <h1>Correct Answer: {correctAns}</h1>
                    </div>
                </div>
                :""}
                
                
            </div>
            
        </div>
        </>
    )
}