import React from 'react';

// import "/assets/js/custom.js"
// import "/assets/js/index1.js"
// import "/assets/js/apexcharts.js"
// import "/assets/plugins/sidebar/sidebar.js"
// import "/assets/plugins/scroll-bar/jquery.mCustomScrollbar.concat.min.js"
// import "/assets/plugins/sidemenu/sidemenu.js"
// import "/assets/plugins/echarts/echarts.js"
// import "/assets/plugins/peitychart/jquery.peity.min.js"
// import "/assets/plugins/chart/utils.js"
// import "/assets/plugins/chart/Chart.bundle.js"
// import "/assets/plugins/rating/jquery.rating-stars.js"
// import "/assets/js/circle-progress.min.js"
// import "/assets/js/jquery.sparkline.min.js"
// import "/assets/plugins/bootstrap/js/popper.min.js"

// import "./assets/images/brand/favicon.ico"
// import "./assets/plugins/bootstrap/css/bootstrap.min.css"
// import "./assets/css/style.css"
// import "./assets/css/skin-modes.css"
// import "./assets/plugins/sidemenu/sidemenu.css"
// import "./assets/plugins/charts-c3/c3-chart.css"
// import "./assets/plugins/scroll-bar/jquery.mCustomScrollbar.css"
// import "./assets/plugins/sidebar/sidebar.css"
// import "assets/colors/color1.css"


function Index() {
    return (
        <>
            <div className="login-img">

                <div id="global-loader">
                    <img src={window.location.origin+"/assets/images/loader.svg"} className="loader-img" alt="Loader" />
                </div>


                <div className="page">
                    <div className="">
                        <div className="col col-login mx-auto">
                            <div className="text-center">
                                <img src={window.location.origin+"/assets/images/brand/logo.png"} className="header-brand-img" alt=""/>
                            </div>
                        </div>
                        <div className="container-login100">
                            <div className="wrap-login100 p-6">
                                <form className="login100-form validate-form">
								<span className="login100-form-title">
									Login
								</span>
                                    <div className="wrap-input100 validate-input"
                                         data-validate="Valid email is required: ex@abc.xyz">
                                        <input className="input100" type="text" name="email" placeholder="Email" />
                                            <span className="focus-input100"></span>
                                            <span className="symbol-input100">
										<i className="zmdi zmdi-email" aria-hidden="true"></i>
									</span>
                                    </div>
                                    <div className="wrap-input100 validate-input" data-validate="Password is required">
                                        <input className="input100" type="password" name="pass" placeholder="Password" />
                                            <span className="focus-input100"></span>
                                            <span className="symbol-input100">
										<i className="zmdi zmdi-lock" aria-hidden="true"></i>
									</span>
                                    </div>
                                    <div className="text-right pt-1">
                                        <p className="mb-0"><a href="forgot-password.html"
                                                               className="text-primary ml-1">Forgot Password?</a></p>
                                    </div>
                                    <div className="container-login100-form-btn">
                                        <a href="#" className="login100-form-btn btn-primary">
                                            Login
                                        </a>
                                    </div>
                                    <div className="text-center pt-3">
                                        <p className="text-dark mb-0">Not a member?<a href="register.html"
                                                                                      className="text-primary ml-1">Sign
                                            UP now</a></p>
                                    </div>
                                    <div className=" flex-c-m text-center mt-3">
                                        <p>Or</p>
                                        <div className="social-icons">
                                            <ul>
                                                <li><a className="btn  btn-social btn-block"><i
                                                    className="fa fa-google-plus text-google-plus"></i> Sign up with
                                                    Google</a></li>
                                                <li><a className="btn  btn-social btn-block mt-2"><i
                                                    className="fa fa-facebook text-facebook"></i> Sign in with Facebook</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

   </>
    );
}

export default Index;