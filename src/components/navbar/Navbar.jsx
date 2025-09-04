import "./navbar.scss";
import {motion} from "framer-motion"
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
    return(
        <div className="navbar" >
            <Sidebar/>
            <div className="wrapper">
                <div className="social">
                    <a href="https://www.linkedin.com/in/khaisar-begum-99a823174/" target="_blank"><img src="linkedIn.JPG" alt="" /></a>
                    <a href="https://github.com/KhaisarSofwareDeveloper/" target="_blank"><img src="gitlab.JPG" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar