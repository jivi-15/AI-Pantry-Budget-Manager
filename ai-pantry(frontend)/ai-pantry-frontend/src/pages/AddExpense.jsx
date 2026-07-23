import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../api/axiosConfig";

import Layout from "../components/Layout";

import "../styles/addExpense.css";



function AddExpense(){


    const navigate = useNavigate();



    const [expense,setExpense] = useState({

        itemName:"",
        category:"",
        amount:"",
        purchaseDate:""

    });



    const [loading,setLoading] = useState(false);

    const [error,setError] = useState("");







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



            await api.post(

                "/expenses",

                expense

            );



            alert("Expense added successfully");



            navigate("/expenses");



        }
        catch(error){


            console.log(error);


            setError(
                "Failed to add expense"
            );


        }
        finally{


            setLoading(false);


        }


    };







    return(


        <Layout>


            <div className="add-expense-page">



                <div className="expense-form-card">





                    <h1>

                        Add Expense 💰

                    </h1>



                    <p>

                        Track your spending and manage your budget.

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

                            placeholder="Example: Vegetables"

                            value={expense.itemName}

                            onChange={handleChange}

                            required

                        />






                        <label>
                            Category
                        </label>


                        <input

                            name="category"

                            placeholder="Example: Grocery"

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

                            placeholder="Enter amount"

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







                        <button
                            disabled={loading}
                        >

                        {

                            loading ?

                            "Saving..."

                            :

                            "Save Expense"

                        }


                        </button>




                    </form>





                </div>


            </div>


        </Layout>


    );

}



export default AddExpense;