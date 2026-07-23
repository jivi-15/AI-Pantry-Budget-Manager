import { useEffect, useState } from "react";

import api from "../api/axiosConfig";

import Layout from "../components/Layout";

import "../styles/budgetAdvice.css";



function BudgetAdvice(){


    const [advice,setAdvice] = useState([]);

    const [loading,setLoading] = useState(true);

    const [error,setError] = useState("");





    useEffect(()=>{

        fetchAdvice();

    },[]);







    const fetchAdvice = async()=>{


        try{


            setLoading(true);

            setError("");



            const response =

                await api.get(
                    "/ai/budget-advice"
                );



            setAdvice(
                response.data
            );



        }
        catch(error){


            console.log(error);


            setError(
                "Failed to load AI advice"
            );


        }
        finally{


            setLoading(false);


        }


    };







    return(


        <Layout>


            <div className="advisor-page">





            {

            loading ?


            (

                <div className="page-loader">

                    ⏳ Generating AI advice...

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

                    AI Budget Advisor 💰🤖

                </h1>





                <p className="subtitle">


                    Smart recommendations based on your spending habits.


                </p>









                {

                advice.length === 0 ?


                (

                    <div className="empty-box">

                        No advice available yet 💡

                    </div>


                )


                :


                (


                <div className="advisor-grid">





                {


                advice.map((item,index)=>(



                    <div

                        className="advisor-card"

                        key={index}

                    >





                        <h2>

                            📊 {item.category}

                        </h2>








                        <div className="amount-box">


                            Spending:


                            <strong>

                                ₹{item.amount}

                            </strong>


                        </div>








                        <h3>

                            🤖 AI Suggestion

                        </h3>






                        <p className="advice-text">


                            {item.advice}


                        </p>







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



export default BudgetAdvice;