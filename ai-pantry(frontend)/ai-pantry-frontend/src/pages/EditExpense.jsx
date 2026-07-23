import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import api from "../api/axiosConfig";

import Layout from "../components/Layout";

import "../styles/editExpense.css";



function EditExpense(){


    const { id } = useParams();

    const navigate = useNavigate();



    const [expense,setExpense] = useState({

        itemName:"",
        category:"",
        amount:"",
        purchaseDate:""

    });



    const [loading,setLoading] = useState(false);

    const [error,setError] = useState("");







    useEffect(()=>{

        fetchExpense();

    },[]);







    const fetchExpense = async()=>{


        try{


            const response = await api.get(

                `/expenses/${id}`

            );


            setExpense(response.data);



        }
        catch(error){


            console.log(error);

            setError(
                "Failed to load expense"
            );


        }


    };








    const handleChange=(e)=>{


        setExpense({

            ...expense,

            [e.target.name]:e.target.value

        });


    };








    const handleSubmit=async(e)=>{


        e.preventDefault();



        try{


            setLoading(true);

            setError("");



            await api.put(

                `/expenses/${id}`,

                expense

            );



            alert(
                "Expense updated successfully"
            );



            navigate("/expenses");



        }
        catch(error){


            console.log(error);


            setError(
                "Update failed"
            );


        }
        finally{


            setLoading(false);


        }


    };








    return(


        <Layout>



            <div className="edit-expense-page">



                <div className="edit-expense-card">





                    <h1>

                        Edit Expense ✏️

                    </h1>



                    <p>

                        Update your spending details.

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

                            name="itemName"

                            value={expense.itemName}

                            onChange={handleChange}

                            required

                        />








                        <label>
                            Category
                        </label>


                        <input

                            name="category"

                            value={expense.category}

                            onChange={handleChange}

                            required

                        />








                        <label>
                            Amount
                        </label>


                        <input

                            name="amount"

                            type="number"

                            value={expense.amount}

                            onChange={handleChange}

                            required

                        />








                        <label>
                            Purchase Date
                        </label>


                        <input

                            name="purchaseDate"

                            type="date"

                            value={expense.purchaseDate}

                            onChange={handleChange}

                            required

                        />








                        <button disabled={loading}>


                            {

                            loading ?

                            "Updating..."

                            :

                            "Update Expense"

                            }


                        </button>



                    </form>



                </div>



            </div>



        </Layout>


    );

}



export default EditExpense;