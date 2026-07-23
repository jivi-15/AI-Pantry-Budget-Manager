import { useEffect, useState } from "react";

import api from "../api/axiosConfig";

import {
    PieChart,
    Pie,
    Tooltip,
    Legend,
    Cell
} from "recharts";

import Layout from "../components/Layout";
import "../styles/budget.css";



function Budget(){


    const [summary,setSummary] = useState(null);

    const [categoryData,setCategoryData] = useState([]);

    const [loading,setLoading] = useState(true);

    const [error,setError] = useState("");





    useEffect(()=>{

        loadBudgetData();

    },[]);






    const loadBudgetData = async()=>{


        try{


            setLoading(true);

            setError("");



            const summaryResponse =
                await api.get(
                    "/expenses/monthly-summary"
                );


            const categoryResponse =
                await api.get(
                    "/expenses/category-summary"
                );



            setSummary(
                summaryResponse.data
            );


            setCategoryData(
                categoryResponse.data
            );



        }
        catch(error){


            console.log(error);


            setError(
                "Failed to load budget data"
            );


        }
        finally{


            setLoading(false);


        }


    };







    return(


        <Layout>


            <div className="budget-page">





            {

            loading ?


            (

                <div className="page-loader">

                    ⏳ Loading budget dashboard...

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





                <h1>

                    Budget Dashboard 📊

                </h1>




                <p className="subtitle">

                    Track your spending and understand your habits.

                </p>







                {

                summary &&


                <div className="budget-cards">





                    <div className="budget-card">


                        <h3>
                            📅 Month
                        </h3>


                        <h2>
                            {summary.month}
                        </h2>


                    </div>







                    <div className="budget-card">


                        <h3>
                            💰 Total Expense
                        </h3>


                        <h2>
                            ₹{summary.totalExpense}
                        </h2>


                    </div>







                    <div className="budget-card">


                        <h3>
                            📈 Highest Spending
                        </h3>


                        <h2>
                            {summary.highestSpendingCategory}
                        </h2>


                    </div>




                </div>


                }








                <div className="chart-container">



                    <h2>
                        Expense Distribution
                    </h2>





                    {

                    categoryData.length > 0 ?


                    (

                    <PieChart

                        width={450}

                        height={400}

                    >



                        <Pie

                            data={categoryData}

                            dataKey="amount"

                            nameKey="category"

                            cx="50%"

                            cy="50%"

                            outerRadius={130}

                            label

                        >




                        {

                        categoryData.map(

                            (item,index)=>(


                                <Cell

                                    key={index}

                                />


                            )

                        )

                        }



                        </Pie>




                        <Tooltip/>

                        <Legend/>




                    </PieChart>


                    )


                    :


                    (

                        <p>
                            No category data available
                        </p>

                    )


                    }



                </div>







                <div className="ai-tip">



                    🤖 AI Budget Advice



                    <p>


                    {

                    summary ?


                    `Your highest spending category is ${summary.highestSpendingCategory}. Try planning purchases before spending.`


                    :


                    "Add expenses to get personalized advice."


                    }



                    </p>



                </div>





            </>


            )


            }





            </div>


        </Layout>


    );

}


export default Budget;