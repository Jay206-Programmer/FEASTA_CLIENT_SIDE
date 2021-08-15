import Layout from "../component/Layout";

import Head from "next/head";

export default function blog() {
    return (
        <>
            <Head>
                <title>Blog Details</title>
            </Head>
            <Layout>
                {/* Start blog details */}
                <div className="blog-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="heading-title text-center">
                                    <h2>Blog</h2>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-8 col-lg-8 col-12">
                                <div className="blog-inner-details-page">
                                    <div className="blog-inner-box">
                                        <div className="side-blog-img">
                                            <img
                                                className="img-fluid"
                                                src="images/inner-blog-img.jpg"
                                                alt=""
                                            />
                                            <div className="date-blog-up">
                                                27 Fab
                                            </div>
                                        </div>
                                        <div className="inner-blog-detail details-page">
                                            <h3>
                                                Duis feugiat neque sed dolor
                                                cursus, sed lacinia nisl
                                                pretium.
                                            </h3>
                                            <ul>
                                                <li>
                                                    <i className="zmdi zmdi-account" />
                                                    Posted By :{" "}
                                                    <span>Rubel Ahmed</span>
                                                </li>
                                                <li>|</li>
                                                <li>
                                                    <i className="zmdi zmdi-time" />
                                                    Time : <span>11.30 am</span>
                                                </li>
                                            </ul>
                                            <p>
                                                Vestibulum quis ultricies enim.
                                                Quisque eu sapien a erat congue
                                                lacinia bibendum ac massa. Morbi
                                                vehicula aliquet libero sit amet
                                                dictum. Integer vel mauris non
                                                magna consequat porttitor. Nulla
                                                facilisi. Suspendisse posuere,
                                                elit eu fringilla congue, turpis
                                                magna tempor odio, a placerat
                                                magna tortor a mauris. Phasellus
                                                lobortis turpis dui, eget mollis
                                                ex vestibulum auctor. Nunc
                                                viverra leo ut accumsan aliquet.
                                                Maecenas aliquam dolor eget
                                                felis bibendum blandit.
                                            </p>
                                            <p>
                                                Nunc iaculis, massa eget
                                                pellentesque mollis, nulla
                                                mauris aliquam eros, vitae
                                                condimentum leo nisl ut purus.
                                                Etiam nibh diam, vehicula non
                                                tincidunt id, consequat nec ex.
                                                Praesent vulputate sapien non
                                                tellus ultrices hendrerit.
                                                Vestibulum ante ipsum primis in
                                                faucibus orci luctus et ultrices
                                                posuere cubilia Curae; Vivamus
                                                pellentesque arcu erat.
                                                Curabitur dapibus fringilla
                                                porta. Sed in neque sit amet
                                                ante feugiat blandit. Nulla
                                                fringilla purus diam, cursus
                                                venenatis diam luctus nec.
                                            </p>
                                            <blockquote>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Sed non feugiat lacus. Nunc
                                                    nisi velit, consectetur
                                                    vitae ex porttitor, placerat
                                                    scelerisque mauris.
                                                    Phasellus sit amet tincidunt
                                                    metus, quis tempus ex.
                                                    Quisque in lorem ut mi
                                                    ullamcorper suscipit eu nec
                                                    purus. Nam maximus sagittis
                                                    iaculis.
                                                </p>
                                            </blockquote>
                                            <p>
                                                Vestibulum quis ultricies enim.
                                                Quisque eu sapien a erat congue
                                                lacinia bibendum ac massa. Morbi
                                                vehicula aliquet libero sit amet
                                                dictum. Integer vel mauris non
                                                magna consequat porttitor. Nulla
                                                facilisi. Suspendisse posuere,
                                                elit eu fringilla congue, turpis
                                                magna tempor odio, a placerat
                                                magna tortor a mauris.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="blog-comment-box">
                                        <h3>Comments</h3>
                                        <div className="comment-item">
                                            <div className="comment-item-left">
                                                <img
                                                    src="images/avt-img.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="comment-item-right">
                                                <div className="pull-left">
                                                    <a href="#">Rubel Ahmed</a>
                                                </div>
                                                <div className="pull-right">
                                                    <i
                                                        className="fa fa-clock-o"
                                                        aria-hidden="true"
                                                    />
                                                    Time : <span>11.30 am</span>
                                                </div>
                                                <div className="des-l">
                                                    <p>
                                                        Morbi lacinia ultrices
                                                        lorem id tincidunt. Cras
                                                        id dui risus.
                                                        Pellentesque consectetur
                                                        id mi sed pharetra.
                                                        Proin imperdiet gravida
                                                        nisl, sit amet varius
                                                        urna. In auctor.
                                                    </p>
                                                </div>
                                                <a
                                                    href="#"
                                                    className="right-btn-re"
                                                >
                                                    <i
                                                        className="fa fa-reply"
                                                        aria-hidden="true"
                                                    />{" "}
                                                    Reply
                                                </a>
                                            </div>
                                        </div>
                                        <div className="comment-item children">
                                            <div className="comment-item-left">
                                                <img
                                                    src="images/avt-img.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="comment-item-right">
                                                <div className="pull-left">
                                                    <a href="#">Admin</a>
                                                </div>
                                                <div className="pull-right">
                                                    <i
                                                        className="fa fa-clock-o"
                                                        aria-hidden="true"
                                                    />
                                                    Time : <span>1.30 pm</span>
                                                </div>
                                                <div className="des-l">
                                                    <p>
                                                        Morbi lacinia ultrices
                                                        lorem id tincidunt. Cras
                                                        id dui risus.
                                                        Pellentesque consectetur
                                                        id mi sed pharetra.
                                                        Proin imperdiet gravida
                                                        nisl, sit amet varius
                                                        urna. In auctor.
                                                    </p>
                                                </div>
                                                <a
                                                    href="#"
                                                    className="right-btn-re"
                                                >
                                                    <i
                                                        className="fa fa-reply"
                                                        aria-hidden="true"
                                                    />{" "}
                                                    Reply
                                                </a>
                                            </div>
                                        </div>
                                        <div className="comment-item">
                                            <div className="comment-item-left">
                                                <img
                                                    src="images/avt-img.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="comment-item-right">
                                                <div className="pull-left">
                                                    <a href="#">Rubel Ahmed</a>
                                                </div>
                                                <div className="pull-right">
                                                    <i
                                                        className="fa fa-clock-o"
                                                        aria-hidden="true"
                                                    />
                                                    Time : <span>11.30 am</span>
                                                </div>
                                                <div className="des-l">
                                                    <p>
                                                        Morbi lacinia ultrices
                                                        lorem id tincidunt. Cras
                                                        id dui risus.
                                                        Pellentesque consectetur
                                                        id mi sed pharetra.
                                                        Proin imperdiet gravida
                                                        nisl, sit amet varius
                                                        urna. In auctor.
                                                    </p>
                                                </div>
                                                <a
                                                    href="#"
                                                    className="right-btn-re"
                                                >
                                                    <i
                                                        className="fa fa-reply"
                                                        aria-hidden="true"
                                                    />{" "}
                                                    Reply
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comment-respond-box">
                                        <h3>Leave your comment </h3>
                                        <div className="comment-respond-form">
                                            <form
                                                id="commentrespondform"
                                                className="comment-form-respond row"
                                                method="post"
                                            >
                                                <div className="col-lg-6 col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <input
                                                            id="name_com"
                                                            className="form-control"
                                                            name="name"
                                                            placeholder="Name"
                                                            type="text"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            id="email_com"
                                                            className="form-control"
                                                            name="email"
                                                            placeholder="Your Email"
                                                            type="email"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <textarea
                                                            className="form-control"
                                                            id="textarea_com"
                                                            placeholder="Your Message"
                                                            rows={2}
                                                            defaultValue={""}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <button className="btn btn-submit">
                                                        Submit comment
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-12 blog-sidebar">
                                <div className="right-side-blog">
                                    <h3>Search</h3>
                                    <div className="blog-search-form">
                                        <input
                                            name="search"
                                            placeholder="Search blog"
                                            type="text"
                                        />
                                        <button className="search-btn">
                                            <i
                                                className="fa fa-search"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                    <h3>Categories</h3>
                                    <div className="blog-categories">
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <span>Food</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span>Pizza</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span>Drink</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span>Lorem Sit</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span>Burger</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span>Music</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3>Recent Post</h3>
                                    <div className="post-box-blog">
                                        <div className="recent-post-box">
                                            <div className="recent-box-blog">
                                                <div className="recent-img">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/post-img-01.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="recent-info">
                                                    <ul>
                                                        <li>
                                                            <i className="zmdi zmdi-account" />
                                                            Posted By :{" "}
                                                            <span>
                                                                Rubel Ahmed
                                                            </span>
                                                        </li>
                                                        <li>|</li>
                                                        <li>
                                                            <i className="zmdi zmdi-time" />
                                                            Time :{" "}
                                                            <span>
                                                                11.30 am
                                                            </span>
                                                        </li>
                                                    </ul>
                                                    <h4>
                                                        Duis feugiat neque sed
                                                        dolor cursus, sed
                                                        lacinia nisl pretium.
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="recent-box-blog">
                                                <div className="recent-img">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/post-img-02.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="recent-info">
                                                    <ul>
                                                        <li>
                                                            <i className="zmdi zmdi-account" />
                                                            Posted By :{" "}
                                                            <span>
                                                                Rubel Ahmed
                                                            </span>
                                                        </li>
                                                        <li>|</li>
                                                        <li>
                                                            <i className="zmdi zmdi-time" />
                                                            Time :{" "}
                                                            <span>
                                                                11.30 am
                                                            </span>
                                                        </li>
                                                    </ul>
                                                    <h4>
                                                        Duis feugiat neque sed
                                                        dolor cursus, sed
                                                        lacinia nisl pretium.
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="recent-box-blog">
                                                <div className="recent-img">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/post-img-03.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="recent-info">
                                                    <ul>
                                                        <li>
                                                            <i className="zmdi zmdi-account" />
                                                            Posted By :{" "}
                                                            <span>
                                                                Rubel Ahmed
                                                            </span>
                                                        </li>
                                                        <li>|</li>
                                                        <li>
                                                            <i className="zmdi zmdi-time" />
                                                            Time :{" "}
                                                            <span>
                                                                11.30 am
                                                            </span>
                                                        </li>
                                                    </ul>
                                                    <h4>
                                                        Duis feugiat neque sed
                                                        dolor cursus, sed
                                                        lacinia nisl pretium.
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="recent-box-blog">
                                                <div className="recent-img">
                                                    <img
                                                        className="img-fluid"
                                                        src="images/post-img-01.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="recent-info">
                                                    <ul>
                                                        <li>
                                                            <i className="zmdi zmdi-account" />
                                                            Posted By :{" "}
                                                            <span>
                                                                Rubel Ahmed
                                                            </span>
                                                        </li>
                                                        <li>|</li>
                                                        <li>
                                                            <i className="zmdi zmdi-time" />
                                                            Time :{" "}
                                                            <span>
                                                                11.30 am
                                                            </span>
                                                        </li>
                                                    </ul>
                                                    <h4>
                                                        Duis feugiat neque sed
                                                        dolor cursus, sed
                                                        lacinia nisl pretium.
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <h3>Recent Tag</h3>
                                    <div className="blog-tag-box align-content-center">
                                        <ul className="list-inline tag-list">
                                            <li className="list-inline-item">
                                                <a href="#">Food</a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#">Drink</a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#">Nature</a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#">Italian</a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#">Bootstrap4</a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#">Fashion</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End details */}
            </Layout>
        </>
    );
}
