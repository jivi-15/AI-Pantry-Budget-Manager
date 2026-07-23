import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import api from "../api/axiosConfig";

import Layout from "../components/Layout";

import "../styles/editPantry.css";



function EditPantryItem(){


    const { id } = useParams();

    const navigate = useNavigate();



    const [item,setItem] = useState({

        name:"",
        category:"",
        quantity:"",
        expiryDate:""

    });



    const [loading,setLoading] = useState(false);

    const [error,setError] = useState("");







    useEffect(()=>{

        fetchItem();

    },[]);







    const fetchItem = async()=>{


        try{


            const response = await api.get(

                `/pantry/items/${id}`

            );



            setItem(response.data);



        }
        catch(error){


            console.log(error);

            setError(
                "Failed to load item"
            );


        }


    };








    const handleChange=(e)=>{


        setItem({

            ...item,

            [e.target.name]:e.target.value

        });


    };








    const updateItem=async(e)=>{


        e.preventDefault();



        try{


            setLoading(true);

            setError("");



            await api.put(

                `/pantry/items/${id}`,

                item

            );



            alert("Item updated successfully");



            navigate("/pantry");



        }
        catch(error){


            console.log(error);


            setError(
                "Failed to update item"
            );


        }
        finally{


            setLoading(false);


        }


    };








    return(


        <Layout>


            <div className="edit-page">



                <div className="edit-card">





                    <h1>

                        Edit Pantry Item ✏️

                    </h1>



                    <p>

                        Update your pantry information.

                    </p>







                    {

                    error &&

                    <div className="error-box">

                        ⚠️ {error}

                    </div>

                    }







                    <form onSubmit={updateItem}>


                        <label>
                            Item Name
                        </label>


                        <input

                            name="name"

                            value={item.name}

                            onChange={handleChange}

                            required

                        />








                        <label>
                            Category
                        </label>


                        <input

                            name="category"

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

                            value={item.quantity}

                            onChange={handleChange}

                            required

                        />








                        <label>
                            Expiry Date
                        </label>


                        <input

                            type="date"

                            name="expiryDate"

                            value={item.expiryDate}

                            onChange={handleChange}

                            required

                        />








                        <button disabled={loading}>


                            {

                            loading ?

                            "Updating..."

                            :

                            "Update Item"

                            }


                        </button>



                    </form>



                </div>



            </div>


        </Layout>


    );

}



export default EditPantryItem;