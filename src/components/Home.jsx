import Typed from "typed.js";
import { useEffect, useRef } from "react";
import Navbar from "./Navbar";

export function Home() {
    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ["Code Cool", "Design Websites", "Build Websites"],
        startDelay: 1000,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 100,
        cursorChar: "|"
      });
  
      // Destropying
      return () => {
        typed.destroy();
      };
    }, []);

    return (
        <>
        <Navbar/>
            <section className="home-section" data-aos="fade-up">
                <div className="home-parent d-flex justify-content-center align-items-center">
                    <div className="home-child-1 container-fluid px-lg-5 px-md-5 px-sm-5 px-4 ms-lg-3 ms-md-3 mt-lg-5">
                        <h1 className="home-heading text-light anim-right">I <span ref={el} className="type" ></span></h1>
                        <p className="w-50 fs-4 para text-light anim-up">Hi, I’m Muhammad Shujaat, I’m a Full Stack Web Developer. Explore My Work on
                            GitHub.
                        </p>
                        <a href="https://github.com/mshujaat10" className="outline-primary">GitHub Profile</a>
                    </div>
                </div>
            </section>
        </>
    )
}