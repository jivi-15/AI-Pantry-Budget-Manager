import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../api/axiosConfig";
import ExpenseChart from "../components/ExpenseChart";

import Layout from "../components/Layout";
import "../styles/expenses.css";


function Expenses(){


    const [expenses,setExpenses] = useState([]);

    const [loading,setLoading] = useState(true);

    const [error,setError] = useState("");


    const navigate = useNavigate();





    useEffect(()=>{

        fetchExpenses();

    },[]);






    const fetchExpenses = async()=>{


        try{


            setLoading(true);

            setError("");



            const response =
                await api.get(
                    "/expenses"
                );



            setExpenses(response.data);



        }
        catch(error){


            console.log(error);


            setError(
                "Failed to load expenses"
            );


        }
        finally{


            setLoading(false);


        }


    };






    const totalExpense =
        expenses.reduce(

            (sum,expense)=>

                sum + expense.amount,

            0

        );







    return(


        <Layout>


            <div className="expense-page">





            {

            loading ?


            (

                <div className="page-loader">

                    ⏳ Loading expenses...

                </div>

            )


            :


            error ?


            (

                <div className="error-box">

                    ⚠️ {error}

                </div>

            )


            :


            (

            <>





                <div className="expense-header">



                    <h1>

                        Expenses 💰

                    </h1>



                    <button

                        className="add-expense-btn"

                        onClick={() =>
                            navigate("/add-expense")
                        }

                    >

                        + Add Expense

                    </button>



                </div>







                <div className="expense-summary">


                    <h3>

                        Total Spending

                    </h3>



                    <h1>

                        ₹{totalExpense}

                    </h1>



                </div>







                {

                    expenses.length > 0 &&


                    <div className="chart-box">


                        <ExpenseChart

                            expenses={expenses}

                        />


                    </div>


                }







                {

                expenses.length === 0 ?


                (

                    <div className="empty-box">

                        No expenses added yet 💰

                    </div>

                )


                :


                (

                <div className="expense-grid">



                {

                expenses.map((expense)=>(



                    <div

                        className="expense-card"

                        key={expense.id}

                    >



                        <h2>

                            🛒 {expense.itemName}

                        </h2>




                        <p>

                            <b>
                                Category:
                            </b>

                            {" "}

                            {expense.category}

                        </p>




                        <p>

                            <b>
                                Amount:
                            </b>

                            {" "}

                            ₹{expense.amount}

                        </p>




                        <p>

                            <b>
                                Date:
                            </b>

                            {" "}

                            {expense.purchaseDate}

                        </p>





                        <button

                            className="edit-btn"

                            onClick={() =>
                                navigate(
                                `/edit-expense/${expense.id}`
                                )
                            }

                        >

                            ✏️ Edit

                        </button>




                    </div>



                ))

                }



                </div>


                )


                }



            </>


            )


            }





            </div>


        </Layout>


    );

}


export default Expenses;