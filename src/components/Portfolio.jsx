import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import { Social } from "./Social";

export function Portfolio() {
    return (
        <>
        <Navbar/>
            <section className="portfolio-sec-1">
                <div className="portfolio-back-hero">
                    <h1 className="portfolio-back-heading text-light anim-left">Portfolio</h1>
                </div>
                <div className="container w-100 h-100 d-flex justify-content-center align-items-center">
                    <h1 className="portfolio-dark-heading text-light anim-right">Portfolio</h1>
                </div>
            </section>

            <section className="portfolio-sec-2">
                <div className="container-lg container-md con d-flex justify-content-center">
                    <div id="portfolio-img-1" className="image1 h-100" data-aos="fade-up">
                        <img src={require("../assets/images/weatherapp.png")} className="w-100 h-100 img-fluid" alt="" />
                        <div className="overlay h-100 w-100">
                            <div className="content">
                                <h1>Weather App</h1>
                                <p>Using JavaScript</p>
                                <a href="https://weathersearchappjs.netlify.app/" className="stretched-link" target={"_blank"} rel={"noreferrer"}></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container cont d-flex justify-content-around align-items-center mt-lg-5 mt-md-4 mt-sm-3">
                    <div id="portfolio-img-2" className="image2 imag" data-aos="fade-up">
                    <div className="overlay-2 h-100 w-100">
                            <div className="content-2">
                                <h1>Analog Clock</h1>
                                <p>Using JavaScript</p>
                                <a href="https://htmlpreview.github.io/?https://github.com/mshujaat10/Clock.js/blob/46aaa485a999a7f4e14515b96a85169c283cea52/index.html" className="stretched-link" target={"_blank"} rel={"noreferrer"}></a>
                            </div>
                        </div>
                    </div>
                    <div id="portfolio-img-3" className="image3 imag" data-aos="fade-up">
                    <div className="overlay-2 h-100 w-100">
                            <div className="content-2">
                                <h1>Calculator</h1>
                                <p>Using JavaScript</p>
                                <a href="https://htmlpreview.github.io/?https://github.com/mshujaat10/JS.Calculator/blob/96e1b6907d2aff3bf74ffcef369482e0a96d172b/index.html" className="stretched-link" target={"_blank"} rel={"noreferrer"}></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="container-lg container-md con d-flex justify-content-center">
                    <div id="portfolio-img-4" className="image1 h-100" data-aos="fade-up">
                        <div className="overlay h-100 w-100">
                            <div className="content">
                                <h1>Calculator</h1>
                                <p>Using Reactjs</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </section>

            <section className="portfolio-sec-3 text-light ">
                <div className="end-hero">
                    <h1 className="portfolio-end-heading">Contact</h1>
                </div>
                <div className="container apna w-100 d-flex justify-content-center align-items-center">
                    <h1 className="end-main-heading">Contact</h1>
                    <NavLink to={"/contact"} className="stretched-link text-decoration-none text-light"></NavLink>
                </div>
            </section>
            <Social/>
        </>

    )
}