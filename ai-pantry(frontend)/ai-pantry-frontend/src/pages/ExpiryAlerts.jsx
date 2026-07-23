import { useEffect, useState } from "react";

import api from "../api/axiosConfig";

import Layout from "../components/Layout";

import "../styles/expiryAlerts.css";



function ExpiryAlerts(){


    const [alerts,setAlerts] = useState([]);

    const [loading,setLoading] = useState(true);

    const [error,setError] = useState("");




    useEffect(()=>{

        fetchAlerts();

    },[]);





    const fetchAlerts = async()=>{


        try{


            setLoading(true);

            setError("");



            const response = await api.get(

                "/pantry/items/expiry-alerts"

            );



            setAlerts(response.data);



        }
        catch(error){


            console.log(error);


            setError(
                "Failed to load expiry alerts"
            );


        }
        finally{


            setLoading(false);


        }


    };





    return(


        <Layout>


            <div className="expiry-page">





                {

                loading ?


                (

                    <div className="page-loader">

                        ⏳ Loading expiry alerts...

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


                <div className="expiry-header">


                    <h1>
                        Expiry Alerts ⏰
                    </h1>




                    <div className="alert-count">


                        Total Alerts:


                        <span>

                            {alerts.length}

                        </span>


                    </div>



                </div>





                {

                alerts.length === 0 ?


                (

                    <div className="empty-box">

                        🎉 No items expiring soon!

                    </div>

                )


                :


                (

                    <div className="expiry-grid">


                    {

                    alerts.map((item)=>(


                        <div

                            className="expiry-card"

                            key={item.id}

                        >



                            <h2>

                                ⚠️ {item.name}

                            </h2>




                            <p>

                                <b>
                                    Expiry Date:
                                </b>

                                {" "}

                                {item.expiryDate}

                            </p>




                            <p>

                                <b>
                                    Status:
                                </b>

                                {" "}

                                {item.status}

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


export default ExpiryAlerts;