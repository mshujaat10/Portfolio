import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import { Social } from "./Social";

export function About() {
    return(
<>
<Navbar/>
<section className={`sec-1 bg-light`}>
        <div className="about-hero">
            <div className="back">
                <h2 className="text-light back-heading anim-left">About</h2>
            </div>
            <div className="sec-1-child container text-light d-flex justify-content-center align-items-center flex-column">
                <h1 className="main-heading mb-0 anim-right">About</h1>
                <p className="fs-4 anim-up">Web Developer</p>
            </div>
        </div>
        <div className="image-con w-75" data-aos="fade-up">
        </div>
    </section>

    <section className={`sec-2 bg-light`}>
        <div className={`container-lg container-fluid about-con text-center bg-light`}>
            <p className="fs-1 m-0 about-para" data-aos="fade-up">
                I have worked on different projects with pure HTML and CSS and have a great concept of Web Designing
            </p>
        </div>
    </section>

    <section className={`sec-4 bg-light`}>
        <div className="parent-con w-100">
            <div className="container-fluid ps-lg-5 ps-md-5 ps-sm-5 pe-0 d-flex portfolio">
                <div className="heading h-50 d-flex align-items-center ps-lg-5 ps-md-5 ps-sm-5 ms-4">
                    <h1>Skills</h1>
                </div>
                <div className="crd d-flex justify-content-end" data-aos="fade">
                    <div id="image-1" className="images h-100 mx-4"></div>
                    <div id="image-2" className="images h-100 mx-4"></div>
                    <div id="image-3" className="images h-100 ms-4"></div>
                    <div id="image-4" className="images h-100 ms-4"></div>
                    <div id="image-5" className="images h-100 ms-4"></div>
                </div>
            </div>
        </div>
    </section>

    <section className="sec-3">
        <div className="container d-flex justify-content-center text-light flex-column">
            <h1 className="fs-2 mb-4 mrgn-head" data-aos="fade-up">Education</h1>
            <p className="fs-2 mb-5" data-aos="fade-up">Recently i have completed Web-Developement from Learnify Academy which was a great
                experience</p>
            <hr/>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-sm-6" data-aos="fade-up">
                    <div className="card bg-dark p-5 text-light">
                        <div className="card-body">
                            <h5 className="card-title">High School</h5>
                            <p className="card-text">Ideal Career Public School.</p>
                            <span className="disabled">Matriculation: 2011-2020</span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6" data-aos="fade-up">
                    <div className="card bg-dark p-5 text-light">
                        <div className="card-body px-0">
                            <h5 className="card-title">Intermediate College</h5>
                            <p className="card-text">PSIT Landhi.</p>
                            <span className="disabled">DAE-3rd year: 2021 To present</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="ending position-relative">
            <div className="back-name">
                <h1 className="text-light end-heading">Portfolio</h1>
            </div>
            <div className="container dark-con h-100 d-flex justify-content-center align-items-center flex-column">
                <h1 className="text-light darkheading mt-5">Portfolio</h1>
                <NavLink to={"/portfolio"} className="stretched-link text-decoration-none text-light"></NavLink>
            </div>
        </div>
    </section>
    <Social/>
</>

    )
}