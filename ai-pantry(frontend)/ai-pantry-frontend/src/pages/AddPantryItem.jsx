import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../api/axiosConfig";

import Layout from "../components/Layout";

import "../styles/addPantry.css";



function AddPantryItem(){


    const navigate = useNavigate();



    const [item,setItem] = useState({

        name:"",
        category:"",
        quantity:"",
        expiryDate:""

    });



    const [loading,setLoading] = useState(false);

    const [error,setError] = useState("");







    const handleChange=(e)=>{


        setItem({

            ...item,

            [e.target.name]:e.target.value

        });


    };







    const handleSubmit=async(e)=>{


        e.preventDefault();



        try{


            setLoading(true);

            setError("");



            await api.post(

                "/pantry/items",

                item

            );



            alert("Item Added Successfully");



            navigate("/pantry");



        }
        catch(error){


            console.log(error);


            setError(
                "Failed to add pantry item"
            );


        }
        finally{


            setLoading(false);


        }


    };







    return(


        <Layout>


            <div className="add-page">



                <div className="form-card">



                    <h1>

                        Add Pantry Item 🥗

                    </h1>



                    <p>

                        Add food items and track expiry dates.

                    </p>





                    {

                    error &&

                    <div className="error-box">

                        ⚠️ {error}

                    </div>

                    }







                    <form onSubmit={handleSubmit}>




                        <label>
                            Item Name
                        </label>


                        <input

                            name="name"

                            placeholder="Enter item name"

                            value={item.name}

                            onChange={handleChange}

                            required

                        />







                        <label>
                            Category
                        </label>


                        <input

                            name="category"

                            placeholder="Example: Vegetables"

                            value={item.category}

                            onChange={handleChange}

                            required

                        />








                        <label>
                            Quantity
                        </label>


                        <input

                            name="quantity"

                            type="number"

                            placeholder="Enter quantity"

                            value={item.quantity}

                            onChange={handleChange}

                            required

                        />









                        <label>
                            Expiry Date
                        </label>


                        <input

                            name="expiryDate"

                            type="date"

                            value={item.expiryDate}

                            onChange={handleChange}

                            required

                        />








                        <button

                            disabled={loading}

                        >

                        {

                        loading ?

                        "Adding..."

                        :

                        "Add Item"

                        }


                        </button>





                    </form>



                </div>



            </div>


        </Layout>


    );

}



export default AddPantryItem;