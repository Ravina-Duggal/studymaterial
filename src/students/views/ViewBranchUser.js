import { useEffect, useState } from "react";
import {ClipLoader} from "react-spinners";
import {toast} from "react-toastify";
import apiServices from "../../services/apiServices";
import { Link } from "react-router-dom";
export default function ViewBranchUser(props){
    const [branch,setBranch]=useState()
 const [loading,setLoading]=useState(true)
 const override={
    "display":"block",
    "margin":"0 auto",
    "position":"absolute",
    "top":"50%",
    "bottom":"50%",
    "zIndex":"1",  
  }
  const id=props.cid
 useEffect(()=>{
    let data={
        courseId:id,
        status:true
    }
    apiServices.allBranch(data).then((data)=>{
        // console.log(data)
        setTimeout(()=>{
            setLoading(false)
        },1500)
        if(data.data.success){
            setBranch(data.data.data)
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

    return(
        <>
   
            <div className="container my-3 py-3 text-center  animated slideInDown">
                <h1>Branch</h1>
            </div>
            <div className="container" >
                <div className="row">
                    {branch?.map((el,index)=>(
                        <div className="col-md-4 ">
                            <div className="card p-4" style={{borderRadius:"5px !important"}}>
                                <h1>{el?.name}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
      
        </>
    )
}