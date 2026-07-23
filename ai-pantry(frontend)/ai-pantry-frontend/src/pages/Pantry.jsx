import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../api/axiosConfig";
import "../styles/pantry.css";
import Layout from "../components/Layout";


function Pantry(){

    const [items,setItems] = useState([]);

    const [loading,setLoading] = useState(true);

    const [error,setError] = useState("");

    const navigate = useNavigate();



    useEffect(()=>{

        fetchItems();

    },[]);





    const fetchItems = async()=>{

        try{

            setLoading(true);

            setError("");

            const response =
                await api.get(
                    "/pantry/items"
                );


            setItems(response.data);


        }
        catch(error){

            console.log(error);

            setError(
                "Failed to load pantry items"
            );

        }
        finally{

            setLoading(false);

        }

    };





    const deleteItem = async(id)=>{

        try{

            await api.delete(
                `/pantry/items/${id}`
            );


            alert(
                "Item deleted"
            );


            fetchItems();


        }
        catch(error){

            console.log(error);

            alert(
                "Delete failed"
            );

        }

    };





    if(loading){

    return(

        <Layout>

            <div className="page-loader">
                ⏳ Loading pantry...
            </div>

        </Layout>

    );

}





    if(error){

    return(

        <Layout>

            <div className="error-box">
                ⚠️ {error}
            </div>

        </Layout>

    );

}





    return(

    <Layout>

        <div className="pantry-page">


            <h1>
                My Pantry 🥗
            </h1>


            <p className="subtitle">
                Manage your food items and reduce waste.
            </p>


            {
                items.length === 0 ?


                (

                    <div className="empty-box">

                        No pantry items added yet 🍽️

                    </div>

                )


                :


                (

                    <div className="pantry-grid">

                    {
                        items.map((item)=>(

                            <div
                                className="pantry-card"
                                key={item.id}
                            >

                                <h2>
                                    {item.name}
                                </h2>


                                <p>
                                    Category:
                                    <b> {item.category}</b>
                                </p>


                                <p>
                                    Quantity:
                                    <b>
                                        {item.quantity} {item.unit}
                                    </b>
                                </p>


                                <p>
                                    Expiry:
                                    <b>
                                        {item.expiryDate}
                                    </b>
                                </p>


                                <div className="button-group">


                                    <button
                                        className="delete-btn"
                                        onClick={()=>
                                            deleteItem(item.id)
                                        }
                                    >
                                        Delete
                                    </button>


                                    <button
                                        className="edit-btn"
                                        onClick={()=>
                                            navigate(
                                                `/edit-pantry/${item.id}`
                                            )
                                        }
                                    >
                                        Edit
                                    </button>


                                </div>


                            </div>

                        ))
                    }

                    </div>

                )

            }


        </div>

    </Layout>

);
}


export default Pantry;