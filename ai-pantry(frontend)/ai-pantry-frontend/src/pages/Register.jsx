import { useState } from "react";
import api from "../api/axiosConfig";


function Register() {

    const [user, setUser] = useState({
        userName: "",
        email: "",
        password: ""
    });


    const handleChange = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        });

    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await api.post(
                "/auth/register",
                user
            );

            alert(response.data);

        } catch(error) {

            console.log(error);
            alert("Registration failed");

        }
    };


    return (

        <div>

            <h2>Register</h2>


            <form onSubmit={handleSubmit}>

                <input
                    name="userName"
                    placeholder="Username"
                    onChange={handleChange}
                />


                <input
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />


                <input
                    name="password"
                    placeholder="Password"
                    type="password"
                    onChange={handleChange}
                />


                <button>
                    Register
                </button>

            </form>

        </div>

    );
}


export default Register;