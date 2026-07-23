import { useNavigate } from "react-router-dom";

import "../styles/navbar.css";


function Navbar(){


    const navigate = useNavigate();



    const handleLogout = ()=>{


        localStorage.removeItem("token");

        navigate("/");


    };





    return(


        <div className="navbar">



            <div className="nav-title">


                <h2>
                    🌿 AI Pantry & Budget Manager
                </h2>


            </div>






            <div className="nav-right">


                <span className="user">

                    👤 User

                </span>





                <button
                    className="nav-logout"
                    onClick={handleLogout}
                >

                    Logout

                </button>



            </div>




        </div>


    );

}


export default Navbar;