import Link from "next/link";
import { useRouter } from "next/router";

import { useState, useEffect } from "react";

export default function Layout({ children }) {
    // ? Defining Objects
    const router = useRouter();

    // ? Defining Variables
    const [user, setuser] = useState("");

    // ? Setting Up Variables
    useEffect(() => {
        setuser(
            localStorage.getItem("user_name")
                ? JSON.parse(localStorage.getItem("user_name")).user_name
                : ""
        );
    }, []);

    // ? Defining Methods
    const handleLogout = () => {
        var locallogin = JSON.stringify({ login: false });
        localStorage.setItem("login", locallogin);

        router.push("/login");
    };

    return (
        <>
            <header className="top-navbar">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <Link href="/">
                            <a className="navbar-brand">
                                <img
                                    src="images/logo.png"
                                    alt=""
                                    width="50%"
                                    height="50%"
                                />
                            </a>
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbars-rs-food"
                            aria-controls="navbars-rs-food"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbars-rs-food"
                        >
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link href="/">
                                        <a
                                            className="nav-link"
                                            href="index.html"
                                        >
                                            Home
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/menu">
                                        <a className="nav-link">Menu</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/about">
                                        <a className="nav-link">About</a>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link href="/timeline">
                                        <a className="nav-link">Timeline</a>
                                    </Link>
                                </li>
                                {/* <li><Link href="/blog"><a className="dropdown-item">Blog Details</a></Link></li> */}
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        onClick={handleLogout}
                                    >
                                        Log Out
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <Link href="/cart">
                                        <a className="nav-link">
                                            <i
                                                className="fa fa-fw fa-cart-arrow-down"
                                                style={{
                                                    color: "var(--feastasec)",
                                                }}
                                            ></i>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            <div className="container"> {children} </div>

            <div>
                <footer className="footer-area bg-f">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <h3>About Us</h3>
                                <p>
                                    Integer cursus scelerisque ipsum id
                                    efficitur. Donec a dui fringilla, gravida
                                    lorem ac, semper magna. Aenean rhoncus ac
                                    lectus a interdum. Vivamus semper posuere
                                    dui.
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h3>Subscribe</h3>
                                <div className="subscribe_form">
                                    <form className="subscribe_form">
                                        <input
                                            name="EMAIL"
                                            id="subs-email"
                                            className="form_input"
                                            placeholder="Email Address..."
                                            type="email"
                                        />
                                        <button
                                            type="submit"
                                            className="submit"
                                        >
                                            SUBSCRIBE
                                        </button>
                                        <div className="clearfix" />
                                    </form>
                                </div>
                                <ul className="list-inline f-social">
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <i
                                                className="fa fa-facebook"
                                                aria-hidden="true"
                                            />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <i
                                                className="fa fa-twitter"
                                                aria-hidden="true"
                                            />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <i
                                                className="fa fa-linkedin"
                                                aria-hidden="true"
                                            />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <i
                                                className="fa fa-google-plus"
                                                aria-hidden="true"
                                            />
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="#">
                                            <i
                                                className="fa fa-instagram"
                                                aria-hidden="true"
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h3>Contact information</h3>
                                <p className="lead">
                                    Ipsum Street, Lorem Tower, MO, Columbia,
                                    508000
                                </p>
                                <p className="lead">
                                    <a href="#">+01 2000 800 9999</a>
                                </p>
                                <p>
                                    <a href="#"> info@admin.com</a>
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h3>Opening hours</h3>
                                <p>
                                    <span className="text-color">Monday: </span>
                                    Closed
                                </p>
                                <p>
                                    <span className="text-color">
                                        Tue-Wed :
                                    </span>{" "}
                                    9:Am - 10PM
                                </p>
                                <p>
                                    <span className="text-color">
                                        Thu-Fri :
                                    </span>{" "}
                                    9:Am - 10PM
                                </p>
                                <p>
                                    <span className="text-color">
                                        Sat-Sun :
                                    </span>{" "}
                                    5:PM - 10PM
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <p className="company-name">
                                        All Rights Reserved. ?? FEASTA 2021{" "}
                                        <a href="#">
                                            Canteen Management System
                                        </a>{" "}
                                        Design By :
                                        <a href="https://html.design/">
                                            FEASTA
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* End Footer */}

                <a href="#" id="back-to-top" title="Back to top">
                    <i
                        className="fa fa-1x fa-paper-plane-o"
                        aria-hidden="true"
                    />
                </a>
            </div>
        </>
    );
}
