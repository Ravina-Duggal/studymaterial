import { useEffect, useState } from "react"
import { useParams, Link} from "react-router-dom"
import apiServices, { BASE_URL_Image } from "../../services/apiServices"
import { toast } from "react-toastify"
import {ClipLoader} from "react-spinners"
import Iframe from "react-iframe"

export default function SingleContent(){
    const param=useParams()
    const id=param.id
    const [mydata,setMydata]=useState()
    const [loading,setLoading]=useState(true)
    const override={
        "display":"block",
        "margin":"0 auto",
        "position":"absolute",
        "top":"50%",
        "bottom":"50%",
        "zIndex":"1",  
      }
    useEffect(()=>{
        let data={
            _id:id
        }
        apiServices.singleMaterial(data).then(data=>{
            setTimeout(()=>{
                setLoading(false)
            },1000)
            if(data.data.success)
            {
                toast.success(data.data.message)
                setMydata(data.data.data)
            }
            else 
            {
                toast.error(data.data.message)
            }
        }).catch(
            (error)=>{toast.error("Something went wrong!!")
                setTimeout(()=>{
                    setLoading(false)
                },1000)
            })
    },[])
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
                                    <li className="breadcrumb-item text-white active" aria-current="page">Material</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        {/* <!-- Header End --> */}
            <div className="container my-3 py-3 text-center  animated slideInDown">
                <h1 className="text-uppercase">{mydata?.title}</h1>
            </div>
            <div className="container p-5" >
                <div className="card">
                    <div className="row" >
                        
                        <div className="col-md-12 p-4 text-capitalize" style={{borderRadius:"5px !important"}}>
                            <h1>{mydata?.title}</h1>
                            <p>Course : {mydata?.courseId?.name}</p>
                            <p>Branch- {mydata?.branchId?.name} Semesters: {mydata?.semester}</p>
                            <p>{mydata?.description}</p>
                            <Link to={BASE_URL_Image+mydata?.image} download>
                                <button className="btn btn-info  mx-auto d-block" >Download</button>
                            </Link>
                            {/* <Iframe
                            url={BASE_URL_Image+mydata?.image}
                            width="100%"
                            height="600px"
                            ></Iframe> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}