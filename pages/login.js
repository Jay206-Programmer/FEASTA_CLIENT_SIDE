import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Login() {

    //* Object Definition
    const router = useRouter()

    //* Setting States
    const [data, setdata] = useState({
        email_id:'',
        password:''
    });

    const onEmailChange = (e)=>{setdata({...data,email_id:e.target.value})}
    const onPasswordChange = (e)=>{setdata({...data,password:e.target.value})}

    //* To Check Login
    const handleLogin = async (event) => {
        event.preventDefault()

        await axios.post("https://feasta-postgres.herokuapp.com/auth/login/",data).then((result) => {
            if(result.data.response_msg === "Login Successful"){
    
                var login = JSON.stringify({login:true})
                var user_id = JSON.stringify({user_id:result.data.user_id})
                var user_name = JSON.stringify({user_name: result.data.user_name})
                
                localStorage.setItem("user_login",login);
                localStorage.setItem("user_id",user_id);
                localStorage.setItem("user_name",user_name);

                router.push('/')
            } 
            else{
                alert(result.data.response_msg);
            }
        }).catch((err) => {
            console.log(err);
        });
    }

    //* Prefetching the dashboard Page 
    useEffect(() => {
        router.prefetch('/')

        return {}
      }, [])

    return (
        <>
            <Head>
                <title>{'Login'}</title>
            </Head>
        
            <div style={{backgroundImage:"linear-gradient(180deg, #d65106, #ef7e1d,#d65106)"}}>
                <div className="container h-auto">
                    {/* Outer Row */}
                    <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            {/* Nested Row within Card Body */}
                            <div className="row">
                            <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                            <div className="col-lg-6">
                                <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                </div>
                                <form className="user" onSubmit={handleLogin}>
                                    <div className="form-group">
                                    <input type="email" className="form-control form-control-user" id="exampleInputEmail"  onChange={onEmailChange} aria-describedby="emailHelp" placeholder="Enter Email Address..." autoComplete="email_id" required/>
                                    </div>
                                    <div className="form-group">
                                    <input type="password" className="form-control form-control-user" id="exampleInputPassword"  onChange={onPasswordChange} placeholder="Password"  autoComplete="password" required/>
                                    </div>
                                    <div className="form-group">
                                    <div className="custom-control custom-checkbox small">
                                        <input type="checkbox" className="custom-control-input" id="customCheck" />
                                        <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
                                    </div>
                                    </div>
                                    <input type="submit" className="btn btn-primary btn-user btn-block" value="Login" />
                                    
                                </form>
                                <hr />
                                <div className="text-center">
                                    <a className="small" href="forgot-password.html">Forgot Password?</a>
                                </div>
                                <br/>
                                <div className="text-center">Don't have an account yet?
                                <Link href="/register"><a>{' '}Create One</a></Link>
                                </div>
                                </div>
                            </div>
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

