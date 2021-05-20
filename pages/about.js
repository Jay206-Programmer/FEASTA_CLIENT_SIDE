import Layout from '../component/Layout'

import Head from 'next/head'
// import Image from 'next/image'

import { useState,useEffect } from 'react'

export default function About() {
    // ? Defining Variables
    const [user, setuser] = useState("")
        
    // ? Setting Up Variables
    useEffect(() => {
        setuser(localStorage.getItem("user_name")?JSON.parse(localStorage.getItem("user_name")).user_name:"")
    }, [])
  
    return (
        <>
            <Head>
                <title>About</title>
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
                
            </Layout>
        </>
    )
}