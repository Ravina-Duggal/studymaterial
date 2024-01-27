import { Link, useNavigate } from "react-router-dom";

export default function Header(){
    const user_type=sessionStorage.getItem('user_type')
    const authenticate=sessionStorage.getItem('authenticate')
    const navigate=useNavigate()
    const logout=()=>{
        window.alert("Do you really Want To Logout?");
        sessionStorage.clear()
        setTimeout(()=>{
            sessionStorage.setItem("message","Logout Successfully")
            navigate("/login")
        },500)
    }
    return(
        <>
        {/* <!-- Navbar Start --> */}
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h2 className="m-0 text-primary"><i className="fa fa-book me-3"></i>StUdY HuB</h2>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
            {authenticate && user_type==1  ?
            <>
                <li className="nav-item nav-link active">
                <Link to="/admin">Home</Link>
                </li>
                <li className="nav-item nav-link active">
                <Link to="#">Courses</Link>
                <div class="dropdown-menu fade-down m-0">
                        <Link to="/admin/add_course">
                        <a href="" class="dropdown-item">ADD 
                        </a></Link>
                        <Link to="/admin/view_course">
                        <a href="" class="dropdown-item"> Manage
                        </a></Link>
                    </div>
                </li>
                <li className="nav-item nav-link active">
                <Link to="#">Branch</Link>
                <div class="dropdown-menu fade-down m-0">
                    
                    <Link to="/admin/add_branch">
                        <a href="" class="dropdown-item">ADD 
                        </a></Link>
                        <Link to="/admin/view_branch">
                        <a href="" class="dropdown-item"> Manage
                        </a></Link>
                    
                    </div>
                </li>
                <li className="nav-item nav-link active">
                <Link to="#">Quiz</Link>
                <div class="dropdown-menu fade-down m-0">
                    
                    <Link to="/admin/add_quiz">
                        <a href="" class="dropdown-item">ADD 
                        </a></Link>
                        <Link to="/admin/view_quiz">
                        <a href="" class="dropdown-item"> Manage
                        </a></Link>
                        <Link to="/admin/view_submission">
                        <a href="" class="dropdown-item"> Results
                        </a></Link>
                    </div>
                </li>
                <li className="nav-item nav-link active">
                <Link to="#">Question</Link>
                <div class="dropdown-menu fade-down m-0">
                    
                    <Link to="/admin/add_ques">
                        <a href="" class="dropdown-item">ADD 
                        </a></Link>
                        <Link to="/admin/view_ques">
                        <a href="" class="dropdown-item"> Manage
                        </a></Link>
                    
                    </div>
                </li>
                <li className="nav-item nav-link active">
                <Link to="/admin/view_material">Material</Link>
                </li>
                <li className="nav-item nav-link active">
                <Link to="/admin/view_users">Users</Link>
                </li>
            <li className="btn py-4 px-lg-3 d-none d-lg-block g-5 text-info" onClick={logout}>LOGOUT</li>
        </>
            :authenticate ?
            <>
                <li className="nav-item nav-link active">
                <Link to="/">Home</Link>
                </li>
                {/* <li className="nav-item nav-link active">
                <Link to="/courses">Courses</Link>
                </li> */}
                 <li className="nav-item nav-link active">
                <Link to="/courses">Our Courses</Link>
                </li>
                <li className="nav-item nav-link active">
                <Link to="#">Material</Link>
                <div class="dropdown-menu fade-down m-0">
                        <Link to="/add_material">
                        <a href="" class="dropdown-item">ADD 
                        </a></Link>
                        <Link to="/manage_material">
                        <a href="" class="dropdown-item">Manage
                        </a></Link>
                    </div>
                </li>
                <li className="nav-item nav-link active">
                <Link to="#">View</Link>
                <div class="dropdown-menu fade-down m-0">
                        <Link to="/view_material_type">
                        <a href="" class="dropdown-item">Material 
                        </a></Link>
                        <Link to="/view_quiz_user">
                        <a href="" class="dropdown-item">Quiz
                        </a></Link>
                        <Link to="/view_quiz_result">
                        <a href="" class="dropdown-item">Quiz Result
                        </a></Link>
                    </div>
                </li>
                <li className="nav-item nav-link active">
                <Link to="/update_profile">Profile</Link>
                </li>
                <li className="btn py-4 px-lg-3 d-none d-lg-block g-5 text-info" onClick={logout}>LOGOUT</li>
            </>
            : <>
                <li className="nav-item nav-link active">
                <Link to="/">Home</Link>
                </li>
                <li className="nav-item nav-link active">
                <Link to="/courses">Our Courses</Link>
                </li>
                <li className="nav-item nav-link active">
                <Link to="/login">Login</Link>
                </li>
                <li className="nav-item nav-link active">
                <Link to="/register">Register</Link>
                </li>
            </>}
            </div>
        </div>
    </nav>
    {/* <!-- Navbar End --> */}

         
        
        </>
    )
}