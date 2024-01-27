import { Link, Navigate } from "react-router-dom"

export default function ViewMaterialUser(){
    const authenticate=sessionStorage.getItem("authenticate")
    if(!authenticate){
        sessionStorage.setItem("message", "Please Login!!")
        return <Navigate replace to="/login"/>
    }
    return(
        <>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        <div className="container my-3 p-3  animated slideInDown">
            <div className="row">
                <div className="col-sm-6 col-md-6  mb-3">
                    <div className="card  shadow">
                        <div className="card-body">
                            <div className="d-flex align-items-center position-relative pb-3">
                                <div className="flex-shrink-0">
                                    <img className="img-md rounded-circle" src="/assets/img/Teacher2.png" alt="Profile Picture" loading="lazy" style={{width:"227px"}}/>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <Link to="/uploaded_content/notes"><h1 className="text-info m-0">Notes</h1></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-6  mb-3">
                    <div className="card  shadow">
                        <div className="card-body">
                            {/* <!-- Profile picture and short information --> */}
                            <div className="d-flex align-items-center position-relative pb-3">
                                <div className="flex-shrink-0">
                                    <img className="img-sm rounded-circle" src="/assets/img/Students.jpeg" alt="Profile Picture" loading="lazy"/>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <Link to="/uploaded_content/ebooks"><h1 className="text-info m-0">E-books</h1></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container  animated slideInDown">
            <div className="row">
                <div className="col-sm-6 col-md-6  mb-3">
                    <div className="card  shadow">
                        <div className="card-body">
                            <div className="d-flex align-items-center position-relative pb-3">
                                <div className="flex-shrink-0">
                                    <img className="img-md rounded-circle" src="/assets/img/notes.jpeg" alt="Profile Picture" loading="lazy" />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <Link to="/uploaded_content/questionpaper"><h1 className="text-info m-0">Question Paper</h1></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-6  mb-3">
                    <div className="card  shadow">
                        <div className="card-body">
                            <div className="d-flex align-items-center position-relative pb-3">
                                <div className="flex-shrink-0">
                                    <img className="img-sm rounded-circle" src="/assets/img/Quiz.png" alt="Profile Picture" loading="lazy"/>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <Link to="/uploaded_content/labfiles"><h1 className="text-info m-0">Lab Files</h1></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
        </>
    )

}