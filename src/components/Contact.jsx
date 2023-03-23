import axios from 'axios'
import { useState } from "react"
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import { Social } from './Social';

export function Contact() {

    const[users, setUsers] = useState({
        name:"",
        email:"",
        message:""
    })

    const handleSubmit = async () => {
        try {
         
            const res = await axios.post("http://localhost:4000/send", users);
            console.log(res.data);
            alert("Message Send");
          }
          catch (error) {
            console.log(error);
          };
    }

    const handleInput = (e)=>{
        let elements = e.target.name;
        let Value = e.target.value;
        setUsers({...users,[elements]:Value});
    }





    return (
        <>
        <Navbar />
            <section className="section-1">
                <div className="back-hero">
                    <h1 className="contact-back text-light anim-left">Contact</h1>
                </div>
                <div className="container w-100 h-100 d-flex justify-content-center align-items-center flex-column hero-child">
                    <h1 className="dark-heading text-light anim-right">Contact</h1>
                    <p className="text-light fs-5 anim-up">Get in Touch</p>
                </div>
                <div className="container the-heading text-center">
                    <h1 className="text-light" data-aos="fade-up">Need a Web Developer? Someone with good skills to
                        collaborate with?</h1>
                </div>
            </section>

            <section className="sec2 d-flex justify-content-center flex-column align-items-center pt-5">
                <div className="container d-flex justify-content-center align-items-center heading-cont">
                    <h1 className="text-light" data-aos="fade-up">Feel free to Contact</h1>
                </div>
                <div className="container form-con">
                    <div className="input-group" data-aos="fade-up">
                        <input type="text" aria-label="First name"className="form-control input-1 border-0 border-bottom text-light me-5" placeholder="Your Name" name="name" value={users.name} onChange={handleInput}/>
                        <input type="email" aria-label="Last name"className="form-control input-2 border-0 border-bottom text-light" placeholder="Your Email Address" name="email" value={users.email} onChange={handleInput}/>
                    </div>
                    <div className="mb-4">
                        <textarea data-aos="fade-up" className="form-control border-0 border-bottom text-light text-area" id="exampleFormControlTextarea1"rows="10" placeholder="Message" name="message" value={users.message} onChange={handleInput}></textarea>
                    </div>
                    <div className="button d-flex align-items-center mb-4">
                    <button type="button" className="btn btn-outline-light rounded-pill" onClick={()=>handleSubmit()}>Submit</button>
                    </div>
                </div>
                <div className="container information d-flex align-items-center align-items-center justify-content-center h-100">
                    <div className="inform d-flex align-items-center justify-content-around border w-75" data-aos="fade-up">
                        <div className="address d-flex align-items-center flex-column" data-aos="fade-up">
                            <span className="material-symbols-outlined text-light pb-3">
                                location_on
                            </span>
                            <h4 className="text-light mb-3">Address</h4>
                            <span className="opacit text-light fs-5">
                                Karachi, Pakistan
                            </span>
                        </div>
                        <div className="phone d-flex align-items-center flex-column" data-aos="fade-up">
                            <span className="material-symbols-outlined text-light pb-3">
                                phone_enabled
                            </span>
                            <h4 className="text-light mb-3">Phone</h4>
                            <span className="opacit text-light fs-5">
                                03112117534
                            </span>
                        </div>
                        <div className="email d-flex align-items-center flex-column" data-aos="fade-up">
                            <span className="material-symbols-outlined text-light pb-3">
                                mail
                            </span>
                            <h4 className="text-light mb-3">Email</h4>
                            <span className="opacit text-light fs-5">
                                mshujaat@gmail.com
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-3 text-light">
        <div className="contact-end-hero">
            <h1 className="contact-end-heading">About</h1>
        </div>
        <div className="container contact-apna w-100 d-flex justify-content-center align-items-center">
            <h1 className="contact-end-main-heading">About</h1>
            <NavLink to={"/about"}  className="stretched-link text-decoration-none text-light"></NavLink>
        </div>
    </section>
    <Social />

        </>

    )
}