import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../components/Layout";
import api from "../api/axiosConfig";
import "../styles/dashboard.css";


function Dashboard(){


    const navigate = useNavigate();


    const [pantryCount,setPantryCount] = useState(0);

    const [expiryCount,setExpiryCount] = useState(0);

    const [monthlyExpense,setMonthlyExpense] = useState(0);

    const [highestCategory,setHighestCategory] = useState("-");

    const [loading,setLoading] = useState(true);

    const [error,setError] = useState("");





    useEffect(()=>{

        fetchDashboardData();

    },[]);






    const fetchDashboardData = async()=>{


        try{


            setLoading(true);


            const pantryResponse =
                await api.get(
                    "/pantry/items"
                );


            setPantryCount(
                pantryResponse.data.length
            );





            const budgetResponse =
                await api.get(
                    "/expenses/monthly-summary"
                );


            setMonthlyExpense(
                budgetResponse.data.totalExpense || 0
            );


            setHighestCategory(
                budgetResponse.data.highestSpendingCategory || "-"
            );





            const expiryResponse =
                await api.get(
                    "/pantry/items/expiry-alerts"
                );


            setExpiryCount(
                expiryResponse.data.length
            );



        }
        catch(error){


            console.log(error);

            setError(
                "Unable to load dashboard"
            );


        }
        finally{


            setLoading(false);


        }


    };






    return(


        <Layout>


            <div className="dashboard">


            {
                loading ?


                (

                    <div className="page-loader">

                        ⏳ Loading Dashboard...

                    </div>

                )


                : error ?


                (

                    <div className="error-box">

                        ⚠️ {error}

                    </div>

                )


                :


                (

                <>


                    <h1>
                        Welcome to AI Pantry 🌿
                    </h1>


                    <p className="subtitle">

                        Manage food, expenses and reduce waste intelligently.

                    </p>





                    <div className="cards">


                        <div className="card">

                            <h3>
                                🥗 Pantry Items
                            </h3>

                            <h1>
                                {pantryCount}
                            </h1>

                        </div>





                        <div className="card">

                            <h3>
                                ⏰ Expiring Soon
                            </h3>

                            <h1>
                                {expiryCount}
                            </h1>

                        </div>





                        <div className="card">

                            <h3>
                                💰 Monthly Expense
                            </h3>

                            <h1>
                                ₹{monthlyExpense}
                            </h1>

                        </div>





                        <div className="card">

                            <h3>
                                📊 Top Category
                            </h3>

                            <h1>
                                {highestCategory}
                            </h1>

                        </div>



                    </div>






                    <div className="quick-actions">


                        <h2>
                            Quick Actions ⚡
                        </h2>



                        <div className="action-buttons">


                            <button
                                onClick={()=>navigate("/pantry")}
                            >
                                🥗 My Pantry
                            </button>


                            <button
                                onClick={()=>navigate("/add-pantry")}
                            >
                                ➕ Add Pantry Item
                            </button>





                            <button
                                onClick={()=>navigate("/expenses")}
                            >

                                💰 Expenses

                            </button>





                            <button
                                onClick={()=>navigate("/recipes")}
                            >

                                🍳 Generate Recipe

                            </button>





                            <button
                                onClick={()=>navigate("/budget")}
                            >

                                📊 Budget

                            </button>


                        </div>


                    </div>




                </>

                )

            }



            </div>


        </Layout>


    );

}



export default Dashboard;