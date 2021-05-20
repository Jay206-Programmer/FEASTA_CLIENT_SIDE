import Layout from '../component/Layout'

import Head from 'next/head'
import router, { useRouter } from 'next/router'
// import Image from 'next/image'

import { useState,useEffect } from 'react'

export default function Home() {

  const router = useRouter()

  // ? Defining Variables
  const [user, setuser] = useState("")
    
  // ? Setting Up Variables
  useEffect(() => {
      setuser(localStorage.getItem("user_name")?JSON.parse(localStorage.getItem("user_name")).user_name:"")
      
      router.prefetch('/menu')
  }, [])
  
  return (
        <>
        <Head>
          <title>FEASTA</title>
        </Head>
        <Layout>
            
            <div className="about-section-box">
              <div >
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 text-center shadow-lg mb-5 pt-3 pl-4 pr-4">
                    <div className="inner-column mb-0 mt-3 text-center">
                      <h1 className="">Welcome To <span className="">FEASTA, {user}</span></h1>
                      <hr style={{color:"var(--feasta-sec)"}}/>
                      <h4 className="d-flex justify-content-center">Little Story</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor suscipit feugiat. Ut at pellentesque ante, sed convallis arcu. Nullam facilisis, eros in eleifend luctus, odio ante sodales augue, eget lacinia lectus erat et sem. </p>
                      <p>Sed semper orci sit amet porta placerat. Etiam quis finibus eros. Sed aliquam metus lorem, a pellentesque tellus pretium a. Nulla placerat elit in justo vestibulum, et maximus sem pulvinar.</p>
                      <a className="btn btn-lg btn-circle btn-outline-new-white" href="#">Reservation</a>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src="images/about-img.jpg" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
            {/* End About */}
            <hr/>
            {/* Start QT */}
            <div className="mt-5 qt-box qt-background mb-5 shadow-lg">
              <div>
                <div className="row">
                  <div className="col-md-8 ml-auto mr-auto text-center">
                    <p className="lead ">
                      " If you're not the one cooking, stay out of the way and compliment the chef. "
                    </p>
                    <span className="lead">Michael Strahan</span>
                  </div>
                </div>
              </div>
            </div>

            <hr/>
            <div className="pt-5 gallery-box pb-1">
              <div className=" container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="heading-title text-center">
                      <h2>Gallery</h2>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                    </div>
                  </div>
                </div>
                <div className="tz-gallery">
                  <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4">
                      <a className="lightbox" href="images/gallery-img-01.jpg">
                        <img className="img-fluid" src="images/gallery-img-01.jpg" alt="Gallery Images" />
                      </a>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4">
                      <a className="lightbox" href="images/gallery-img-02.jpg">
                        <img className="img-fluid" src="images/gallery-img-02.jpg" alt="Gallery Images" />
                      </a>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4">
                      <a className="lightbox" href="images/gallery-img-03.jpg">
                        <img className="img-fluid" src="images/gallery-img-03.jpg" alt="Gallery Images" />
                      </a>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                      <a className="lightbox" href="images/gallery-img-04.jpg">
                        <img className="img-fluid" src="images/gallery-img-04.jpg" alt="Gallery Images" />
                      </a>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4">
                      <a className="lightbox" href="images/gallery-img-05.jpg">
                        <img className="img-fluid" src="images/gallery-img-05.jpg" alt="Gallery Images" />
                      </a>
                    </div> 
                    <div className="col-sm-6 col-md-4 col-lg-4">
                      <a className="lightbox" href="images/gallery-img-06.jpg">
                        <img className="img-fluid" src="images/gallery-img-06.jpg" alt="Gallery Images" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr/>
            {/* Start Customer Reviews */}
            <div className="customer-reviews-box pt-4">
              <div>
                <div className="row shadow-lg pt-5" >
                  <div className="col-lg-12">
                    <div className="heading-title text-center">
                      <h2>Customer Reviews</h2>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                    </div>
                  </div>
                </div>
                <div className="row mt-5 pb-5 shadow-lg">
                  <div className="col-md-8 text-center ml-auto mr-auto">
                    <div id="reviews" className="carousel slide" data-ride="carousel">
                      <div className="carousel-inner mt-4">
                        <div className="carousel-item text-center active">
                          <div className="row-cols-5">
                            <i className="fa fa-fw fa-star" style={{color:"yellow"}}></i>
                            <i className="fa fa-fw fa-star" style={{color:"yellow"}}></i>
                            <i className="fa fa-fw fa-star" style={{color:"yellow"}}></i>
                            <i className="fa fa-fw fa-star" style={{color:"yellow"}}></i>
                            <i className="fa fa-fw fa-star" style={{color:"yellow"}}></i>
                            </div>
                          <h5 className="mt-4 mb-0"><strong className="text-warning text-uppercase">Paul Mitchel</strong></h5>
                          <h6 className="text-dark m-0">Web Developer</h6>
                          <p className="m-0 pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
                        </div>
                        <div className="carousel-item text-center">
                          <div className="row-cols-5">
                            <i className="fa fa-fw fa-star" style={{color:"yellow"}}></i>
                            <i className="fa fa-fw fa-star" style={{color:"yellow"}}></i>
                            <i className="fa fa-fw fa-star"></i>
                            <i className="fa fa-fw fa-star"></i>
                            <i className="fa fa-fw fa-star"></i>
                          </div>
                          <h5 className="mt-4 mb-0"><strong className="text-warning text-uppercase">Steve Fonsi</strong></h5>
                          <h6 className="text-dark m-0">Web Designer</h6>
                          <p className="m-0 pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
                        </div>
                        <div className="carousel-item text-center">
                          <div className="row-cols-5">
                            <i className="fa fa-fw fa-star" style={{color:"yellow"}}></i>
                            <i className="fa fa-fw fa-star" style={{color:"yellow"}}></i>
                            <i className="fa fa-fw fa-star" style={{color:"yellow"}}></i>
                            <i className="fa fa-fw fa-star"></i>
                            <i className="fa fa-fw fa-star"></i>
                          </div>
                          <h5 className="mt-4 mb-0"><strong className="text-warning text-uppercase">Daniel vebar</strong></h5>
                          <h6 className="text-dark m-0">Seo Analyst</h6>
                          <p className="m-0 pt-3 card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
                        </div>
                      </div>
                      <a className="carousel-control-prev" href="#reviews" role="button" data-slide="prev" style={{backgroundColor:"white",color:"var(--feasta)",opacity:"30%"}}>
                        <i className="fa fa-angle-left" aria-hidden="true" />
                        {/* <span className="sr-only">Previous</span> */}
                      </a>
                      <a className="carousel-control-next" href="#reviews" role="button" data-slide="next" style={{backgroundColor:"white",color:"var(--feasta)",opacity:"30%"}}>
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        {/* <span className="sr-only">Next</span> */}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        </Layout>
        </>
  )
}
