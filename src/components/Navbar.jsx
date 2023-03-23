import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    const[showmenu, setShowMenu] = useState(false);


    return (
        <>
            {/* Modal */}
            <nav className="p-lg-5 p-md-5 p-sm-5 w-100 mt-4 fixed-top">
                <div className={`px-4 d-flex justify-content-between fw-bold fs-4 text-light nav-anim`}>
                    <NavLink to={"/"} className="text-decoration-none text-light">Portfolio</NavLink>
                    {/* Button trigger modal */}
                    <div className="d-flex align-items-center button-open">
                        <span className="fs-6 fw-light me-2 text-light">{showmenu?"Close":"Menu"}</span>
                        <span className="material-symbols-outlined open-icon border border-1 fw-light p-2 fs-2 rounded-circle nav-anim" onClick={()=>setShowMenu(!showmenu)}>
                           <a>{showmenu?"close":"more_horiz"}</a>
                        </span>
                    </div>
                </div>
            </nav>

            <div className= {showmenu ? "show" : "hide"}>
                <ul className="list-unstyled fs-1 list-animation anim-up">
                <li className="my-2"><NavLink onClick={()=>setShowMenu(false)} to={"/"} className="nav-links text-decoration-none">Home</NavLink></li>
                <li className="my-2"><NavLink onClick={()=>setShowMenu(false)} to={"/about"} className="nav-links text-decoration-none">About</NavLink></li>
                <li className="my-2"><NavLink onClick={()=>setShowMenu(false)} to={"/portfolio"} className="nav-links text-decoration-none">Portfolio</NavLink></li>
                <li className="my-2"><NavLink onClick={()=>setShowMenu(false)} to={"/contact"} className="nav-links text-decoration-none">Contact</NavLink></li>
                {/* <li className="my-2"><NavLink onClick={()=>setShowMenu(false)} to={"/get"} className="nav-links text-decoration-none">Get</NavLink></li> */}
                </ul>
            </div>


        </>
    )
}
export default Navbar;