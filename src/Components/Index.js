import { Link } from "react-router-dom";

export default function Index(){
    return(
        <>
{/* <!-- Carousel Start -->*/}
<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" >
   <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
     <button type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner animated slideInDown">
     <div className="carousel-item active">
      <img src="/assets/img/Banner.jpg" className="d-block w-100" alt="..." style={{height:"600px"}}/>
      <div className="carousel-caption d-none d-md-block">
        {/* <h5>First slide label</h5> */}
        <Link to="/Register">
        <button className="btn btn-primary py-3 px-5 mt-2"style={{backgroundColor:"primary",width:"300px",fontSize:"35px",borderRadius:"10px"}}>JOIN US</button>
        </Link>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/assets/img/group.jpg" className="d-block w-100" alt="..." style={{height:"600px"}}/>
      <div className="carousel-caption d-none d-md-block">
        {/* <h5>Second slide label</h5> */}
        <Link to="/Register">
        <button className="btn btn-primary py-3 px-5 mt-2"style={{backgroundColor:"primary",width:"300px",fontSize:"35px",borderRadius:"10px"}}>JOIN US</button>
        </Link>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
 {/* <!-- Carousel End -->*/}
    
    
        {/* <!-- Service Start -->*/}
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-4">
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item text-center pt-3">
                            <div className="p-4">
                                <i className="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
                                <h5 className="mb-3">Senior Students</h5>
                                <p>Only those students that are verify by the admin are uploading the data</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item text-center pt-3">
                            <div className="p-4">
                                <i className="fa fa-3x fa-globe text-primary mb-4"></i>
                                <h5 className="mb-3">Question Papers</h5>
                                <p>Previous year question papers are provided to the students for their better prepration</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item text-center pt-3">
                            <div className="p-4">
                                <i className="fa fa-3x fa-home text-primary mb-4"></i>
                                <h5 className="mb-3"> Quiz</h5>
                                <p>Quiz's are uploaded students can attempt quiz to check their progress </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="service-item text-center pt-3">
                            <div className="p-4">
                                <i className="fa fa-3x fa-book-open text-primary mb-4"></i>
                                <h5 className="mb-3">E-Books</h5>
                                <p>E-Books are uploaded in this web application for the Students and Teachers also</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Service End -->*/}
    
    
     {/* {/* <!-- About Start --> */}
     <div className="container-xxl py-5">
        <div className="container">
            <div className="row ">
                <div className="col-sm-6 wow fadeInUp" data-wow-delay="0.1s" style={{minHeight:"400px"}}>
                    <div className="position-relative h-100">
                        <img className="img-fluid position-absolute w-100 h-100" src="/assets/img/about.jpg" alt="" style={{objectFit:"cover",marginLeft:"-320px"}}/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
                    <h1 className="mb-4">Welcome to STUDY HUB</h1>
                    <p className="mb-4 text-start">This web application help the students to take Notes,  E-Books,  Previous year Question Papers for their any kind of prepration.</p>
                    <div className="row gy-2 gx-4 mb-4 text-start">
                    <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Senior Students</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Notes</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Quiz's</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>E-Books</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Download</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Question Papers</p>
                        </div>
                    
                        </div>
                        <Link to="/Register">
                        <button className="btn btn-primary py-3 px-5 mt-2">JOIN US</button>
                        </Link>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About End --> */}

    
       {/* <!-- Categories Start -->*/}
        <div className="container-xxl py-5 category">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Categories</h6>
                    <h1 className="mb-5">Courses Categories</h1>
                </div>
                <div className="row g-3">
                    <div className="col-lg-7 col-md-6">
                        <div className="row g-3">
                            <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                                <a className="position-relative d-block overflow-hidden" href="">
                                    <img className="img-fluid" src="/assets/img/cat-1.jpg" alt=""/>
                                    <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin:"1px"}}>
                                        <h5 className="m-0">B.Tech</h5>
                                        {/* <small className="text-primary">49 Courses</small> */}
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                                <a className="position-relative d-block overflow-hidden" href="">
                                    <img className="img-fluid" src="/assets/img/cat-2.jpg" alt=""/>
                                    <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: "1px"}}>
                                        <h5 className="m-0">BCA/BSC.IT</h5>
                                        {/* <small className="text-primary">49 Courses</small> */}
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                            <a className="position-relative d-block overflow-hidden" href="">
                                    <img className="img-fluid" src="/assets/img/cat-3.jpg" alt=""/>
                                    <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: "1px"}}>
                                        <h5 className="m-0">MCA</h5>
                                        {/* <small className="text-primary">49 Courses</small> */}
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" style={{minHeight:"350px"}}>
                        <a className="position-relative d-block h-100 overflow-hidden" href="">
                            <img className="img-fluid h-100" src="/assets/img/cat-4.jpg" alt="" style={{objectFit:"cover"}}/>
                            <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{margin: "1px"}}>
                                <h5 className="m-0">B.COM</h5>
                                {/* <small className="text-primary"></small> */}
                            </div>
                        </a>
                    </div>
                </div>
        {/*<!-- Categories Start -->*/}  
    
       {/* <!-- Courses Start -->*/}  
       <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center text-primary px-3">Courses</h6>
                <h1 className="mb-5">Popular Courses</h1>
            </div>
            <div className="row g-4 justify-content-center">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="course-item bg-light">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid" src="/assets/img/course-1.jpg" alt=""/>
                            <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{borderRadius: "30px 0 0 30px"}}>Read More</a>
                                <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{borderRadius: "30px 0 0 30px"}}>Join Now</a>
                            </div>
                        </div>
                        <div className="text-center p-4 pb-0">
                            {/* <h3 className="mb-0">$149.00</h3> */}
                            <div className="mb-3">
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small>(123)</small>
                            </div>
                            <h5 className="mb-4">Bca/Mca</h5>
                        </div>
                        {/* <div className="d-flex border-top">
                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2"></i>John Doe</small>
                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2"></i>1.49 Hrs</small>
                            <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>30 Students</small>
                        </div> */}
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="course-item bg-light">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid" src="/assets/img/course-2.jpg" alt=""/>
                            <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{borderRadius: "30px 0 0 30px"}}>Read More</a>
                                <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{borderRadius: "30px 0 0 30px"}}>Join Now</a>
                            </div>
                        </div>
                        <div className="text-center p-4 pb-0">
                            {/* <h3 className="mb-0">$149.00</h3> */}
                            <div className="mb-3">
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small>(123)</small>
                            </div>
                            <h5 className="mb-4">B.tech/M.tech</h5>
                        </div>
                        {/* <div className="d-flex border-top">
                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2"></i>John Doe</small>
                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2"></i>1.49 Hrs</small>
                            <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>30 Students</small>
                        </div> */}
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="course-item bg-light">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid" src="/assets/img/course-3.jpg" alt=""/>
                            <div className="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4">
                                <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3 border-end" style={{borderRadius: "30px 0 0 30px"}}>Read More</a>
                                <a href="#" className="flex-shrink-0 btn btn-sm btn-primary px-3" style={{borderRadius: "30px 0 0 30px"}}>Join Now</a>
                            </div>
                        </div>
                        <div className="text-center p-4 pb-0">
                            {/* <h3 className="mb-0">$149.00</h3> */}
                            <div className="mb-3">
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small className="fa fa-star text-primary"></small>
                                <small>(123)</small>
                            </div>
                            <h5 className="mb-4">B.com/M.com</h5>
                        </div>
                        {/* <div className="d-flex border-top">
                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-user-tie text-primary me-2"></i>John Doe</small>
                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-clock text-primary me-2"></i>1.49 Hrs</small>
                            <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>30 Students</small>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
       {/* <!-- Courses End -->*/}
    
    
       {/* <!-- Team Start -->*/}
        {/* <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Instructors</h6>
                    <h1 className="mb-5">Expert Instructors</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item bg-light">
                            <div className="overflow-hidden">
                                <img className="img-fluid" src="/assets/img/team-1.jpg" alt=""/>
                            </div>
                            <div className="position-relative d-flex justify-content-center" style={{marginTop:"-23px"}}>
                                <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                    <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4">
                                <h5 className="mb-0">Instructor Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item bg-light">
                            <div className="overflow-hidden">
                                <img className="img-fluid" src="/assets/img/team-2.jpg" alt=""/>
                            </div>
                            <div className="position-relative d-flex justify-content-center" style={{marginTop:"-23px"}}>
                                <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                    <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4">
                                <h5 className="mb-0">Instructor Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-item bg-light">
                            <div className="overflow-hidden">
                                <img className="img-fluid" src="/assets/img/team-3.jpg" alt=""/>
                            </div>
                            <div className="position-relative d-flex justify-content-center" style={{marginTop:"-23px"}}>
                                <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                    <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4">
                                <h5 className="mb-0">Instructor Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="team-item bg-light">
                            <div className="overflow-hidden">
                                <img className="img-fluid" src="/assets/img/team-4.jpg" alt=""/>
                            </div>
                            <div className="position-relative d-flex justify-content-center" style={{marginTop:"-23px"}}>
                                <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                    <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4">
                                <h5 className="mb-0">Instructor Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
       {/* <!-- Team End -->*/}
    
    
       {/* <!-- Testimonial Start -->*/}
        {/* <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="text-center">
                    <h6 className="section-title bg-white text-center text-primary px-3">Testimonial</h6>
                    <h1 className="mb-5">Our Students Say!</h1>
                </div>
                <div className="owl-carousel testimonial-carousel position-relative">
                    <div className="testimonial-item text-center">
                        <img className="border rounded-circle p-2 mx-auto mb-3" src="assets/img/testimonial-1.jpg" style={{width:"80px",height:"80px"}}/>
                        <h5 className="mb-0">Client Name</h5>
                        <p>Profession</p>
                        <div className="testimonial-text bg-light text-center p-4">
                        <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        </div>
                    </div>
                    <div className="testimonial-item text-center">
                        <img className="border rounded-circle p-2 mx-auto mb-3" src="img/testimonial-2.jpg" style={{width:"80px", height: "80px"}}/>
                        <h5 className="mb-0">Client Name</h5>
                        <p>Profession</p>
                        <div className="testimonial-text bg-light text-center p-4">
                        <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        </div>
                    </div>
                    <div className="testimonial-item text-center">
                        <img className="border rounded-circle p-2 mx-auto mb-3" src="assets/img/testimonial-3.jpg" style={{width:"80px", height:"80px"}}/>
                        <h5 className="mb-0">Client Name</h5>
                        <p>Profession</p>
                        <div className="testimonial-text bg-light text-center p-4">
                        <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        </div>
                    </div>
                    <div className="testimonial-item text-center">
                        <img className="border rounded-circle p-2 mx-auto mb-3" src="assets/img/testimonial-4.jpg" style={{width:"80px", height:"80px"}}/>
                        <h5 className="mb-0">Client Name</h5>
                        <p>Profession</p>
                        <div className="testimonial-text bg-light text-center p-4">
                        <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        {/*<!-- Testimonial End -->*/}
       </div>
       </div>     
    </>
    )
}