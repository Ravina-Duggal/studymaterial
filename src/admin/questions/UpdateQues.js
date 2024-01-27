import React, { useEffect, useState } from 'react'
import { ClipLoader } from "react-spinners";
import { toast } from 'react-toastify';
import apiServices from '../../services/apiServices';
import { useNavigate, useParams } from 'react-router-dom';
export default function UpdateQues(){
    const [loading,setLoading]=useState(true)
    const [quiz,setQuiz]=useState()
    const [quizId,setQuizId]=useState()
    const [totalNumber,setTotalNumber]=useState()
    const [number, setNumber]=useState()
    const [question,setQuestion]=useState()
    const [answer,setAnswer]=useState()
    const [opt1, setOpt1]=useState()
    const [opt2,setOpt2]=useState()
    const [opt3,setOpt3]=useState()
    const [opt4,setOpt4]=useState()
    const nav=useNavigate()
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
    useEffect(()=>{
        let data={
            status:true
        }
        apiServices.allQuiz(data).then((data)=>{
            // console.log(data)
            setTimeout(()=>{
                setLoading(false)
            },1500)
            setQuiz(data.data.data)
          })
          let data1={
            _id:id
          }
          apiServices.singleQues(data1).then((data)=>{
            console.log(data)
            if(data.data.success){
                setQuestion(data.data.data.question)
                setAnswer(data.data.data.answer)
                setOpt1(data.data.data.option1)
                setOpt2(data.data.data.option2)
                setOpt3(data.data.data.option3)
                setOpt4(data.data.data.option4)
                setQuizId(data.data.data.quizId?._id)
                setNumber(data.data.data.questionNo)
            }
          })
          .catch(err=>{
            console.log(err)
          })
        },[])
        useEffect(()=>{},[quizId])
       const getData= (e)=>{
        let data2={
            _id:quizId
          }
          console.log(data2)
            apiServices.singleQuiz(data2).then((data)=>{
            //   console.log(data)
              if(data.data.success){
                  setTotalNumber(data.data.data.totalQuestions)
              }
            })
            .catch(err=>{
              console.log(err)
            })
      }
    const save=(e)=>{
        e.preventDefault()
        let data={
            quizId:quizId,
            questionNo:number,
            question:question,
            option1:opt1,
            option2:opt2,
            option3:opt3,
            option4:opt4,
            answer:answer,
            _id:id
        } 
        apiServices.updateQues(data).then((data)=>{
          setTimeout(()=>{
              setLoading(false)
          },1500)
          if(data.data.success){
              toast.success(data.data.message)
                setTimeout(()=>{
                    nav("/admin/view_ques")
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
                        <h1 className="display-3 text-white animated slideInDown">ADD</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center">
                                <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                <li className="breadcrumb-item"><a className="text-white" href="#">Add</a></li>
                                <li className="breadcrumb-item text-white active" aria-current="page">Quiz-Question</li>
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
                                    <label htmlFor="inputCity">Quiz</label>
                                    <select id="inputState" className="form-control" value={quizId} onChange={(e)=>{setQuizId(e.target.value)}} onBlur={getData} >
                                        <option disabled selected value="">Choose Quiz</option>
                                        {quiz?.map((el,index)=>(
                                        <option key={index} value={el?._id} selected={quizId==el?._id}>{el?.title}</option>
                                        ))} 
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCity">Question No</label>
                                    <input type="number" className="form-control"placeholder="Enter Number of Question" value={number} onChange={(e)=>{setNumber(e.target.value)}} min="1" max={totalNumber}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCity">Question</label>
                                    <input type="text" className="form-control"placeholder="Enter question" value={question} onChange={(e)=>{setQuestion(e.target.value)}}/>
                                </div>
                               
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCity">Option 1</label>
                                    <input type="text" className="form-control"placeholder="Enter Option 1" value={opt1} onChange={(e)=>{setOpt1(e.target.value)}}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCity">Option 2</label>
                                    <input type="text" className="form-control"placeholder="Enter Option 2" value={opt2} onChange={(e)=>{setOpt2(e.target.value)}}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCity">Option 3</label>
                                    <input type="text" className="form-control"placeholder="Enter Option 3" value={opt3} onChange={(e)=>{setOpt3(e.target.value)}}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCity">Option 4</label>
                                    <input type="text" className="form-control"placeholder="Enter Option 4" value={opt4} onChange={(e)=>{setOpt4(e.target.value)}}/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputState">Answer</label>
                                    <select className='form-control' value={answer} onChange={(e)=>{setAnswer(e.target.value)}}>
                                        <option selected disabled value="">Choose Answer</option>'
                                        <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                        <option value="option4">Option 4</option>
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