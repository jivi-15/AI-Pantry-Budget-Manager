import { useState } from "react";
import api from "../api/axiosConfig";
import { useNavigate } from "react-router-dom";


function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");



  const handleLogin = async (e) => {

    e.preventDefault();


    try {

      const response = await api.post(
        "/auth/login",
        {
          email: email,
          password: password
        }
      );


      console.log("LOGIN RESPONSE:", response.data);
      console.log("TOKEN:", response.data.token);


      localStorage.setItem(
        "token",
        response.data.token
      );


      alert("Login successful");

      navigate("/dashboard");


    } catch(error) {

      console.log(error.response);

      alert("Login failed");

    }

  };



  return (

    <div>

      <h1>Login</h1>


      <form onSubmit={handleLogin}>


        <input

          type="email"

          placeholder="Enter Email"

          value={email}

          onChange={(e)=>
            setEmail(e.target.value)
          }

        />


        <br/><br/>


        <input

          type="password"

          placeholder="Enter Password"

          value={password}

          onChange={(e)=>
            setPassword(e.target.value)
          }

        />


        <br/><br/>


        <button type="submit">

          Login

        </button>


      </form>


    </div>

  );
}


export default Login;