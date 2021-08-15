import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

import { useState, useEffect } from "react";
import axios from "axios";

export default function register() {
    //* Object Definition
    const router = useRouter();

    //* Setting States
    const [data, setdata] = useState({
        first_name: "",
        last_name: "",
        email_id: "",
        password: "",
        phone_number: "",
        repeat_password: "",
    });

    const onFirstNameChange = (e) => {
        setdata({ ...data, first_name: e.target.value });
    };
    const onLastNameChange = (e) => {
        setdata({ ...data, last_name: e.target.value });
    };
    const onEmailChange = (e) => {
        setdata({ ...data, email_id: e.target.value });
    };
    const onPasswordChange = (e) => {
        setdata({ ...data, password: e.target.value });
    };
    const onRepeatPasswordChange = (e) => {
        setdata({ ...data, repeat_password: e.target.value });
    };
    const onPhoneChange = (e) => {
        setdata({ ...data, phone_number: e.target.value });
    };

    //* Handling Registration
    const handleRegistration = async (event) => {
        event.preventDefault();

        if (data.password != data.repeat_password) {
            alert("Password & Repeat Password are not matching.");
        } else {
            await axios
                .post(
                    "https://feasta-postgres.herokuapp.com/auth/regestration/",
                    data
                )
                .then((result) => {
                    if (result.data.status_code == 200) {
                        //? Registration Successful
                        setdata({
                            first_name: "",
                            last_name: "",
                            email_id: "",
                            password: "",
                            phone_number: "",
                            repeat_password: "",
                        });

                        router.push("/login");
                    } else {
                        alert(result.data.response_msg);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    //* Prefetching Login Page
    useEffect(() => {
        router.prefetch("/login");

        return {};
    }, []);

    return (
        <>
            <Head>
                <title>{"Register"}</title>
            </Head>
            <div className="container h-auto">
                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        {/* Nested Row within Card Body */}
                        <div className="row">
                            <div className="col-lg-5 d-none d-lg-block bg-register-image" />
                            <div className="col-lg-7">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">
                                            Create an Account!
                                        </h1>
                                    </div>
                                    <form
                                        className="user"
                                        onSubmit={handleRegistration}
                                    >
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input
                                                    type="text"
                                                    className="form-control form-control-user"
                                                    id="exampleFirstName"
                                                    value={data.first_name}
                                                    onChange={onFirstNameChange}
                                                    placeholder="First Name"
                                                    autoComplete="first_name"
                                                    required
                                                />
                                            </div>
                                            <div className="col-sm-6">
                                                <input
                                                    type="text"
                                                    className="form-control form-control-user"
                                                    id="exampleLastName"
                                                    value={data.last_name}
                                                    onChange={onLastNameChange}
                                                    placeholder="Last Name"
                                                    autoComplete="last_name"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className="form-control form-control-user"
                                                id="exampleInputEmail"
                                                value={data.email_id}
                                                onChange={onEmailChange}
                                                aria-describedby="emailHelp"
                                                placeholder="Email"
                                                autoComplete="email_id"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control form-control-user"
                                                id="exampleInputEmail"
                                                value={data.phone_number}
                                                onChange={onPhoneChange}
                                                placeholder="Contact"
                                                autoComplete="contact"
                                                required
                                            />
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input
                                                    type="password"
                                                    className="form-control form-control-user"
                                                    id="exampleInputPassword"
                                                    value={data.password}
                                                    onChange={onPasswordChange}
                                                    placeholder="Password"
                                                    autoComplete="password"
                                                    required
                                                />
                                            </div>
                                            <div className="col-sm-6">
                                                <input
                                                    type="password"
                                                    className="form-control form-control-user"
                                                    id="exampleRepeatPassword"
                                                    value={data.repeat_password}
                                                    onChange={
                                                        onRepeatPasswordChange
                                                    }
                                                    placeholder="Repeat Password"
                                                    autoComplete="repeat_password"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <input
                                            type="submit"
                                            value="Register Account"
                                            className="btn btn-primary btn-user btn-block"
                                        />
                                    </form>
                                    <hr />
                                    <div className="text-center">
                                        <a
                                            className="small"
                                            href="forgot-password.html"
                                        >
                                            Forgot Password?
                                        </a>
                                    </div>
                                    <br />
                                    <div className="text-center">
                                        Already have an account?
                                        <Link href="/login">
                                            <a> Login</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
