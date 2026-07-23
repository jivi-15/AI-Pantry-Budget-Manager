import { useEffect, useState } from "react";
import api from "../api/axiosConfig";


function AiSuggestions(){


    const [suggestions,setSuggestions] = useState([]);



    useEffect(()=>{

        fetchSuggestions();

    },[]);



    const fetchSuggestions = async()=>{

        try{

            const response =
                await api.get("/ai/suggestions");


            setSuggestions(response.data);


        }
        catch(error){

            console.log(error);

        }

    };



    return(

        <div>


            <h1>
                AI Food Waste Assistant 🤖
            </h1>



            {
                suggestions.map(
                    (item,index)=>(


                    <div key={index}>


                        <h2>
                            {item.itemName}
                        </h2>


                        <p>
                            Status:
                            {item.expiryStatus}
                        </p>


                        <p>
                            Suggestion:
                            {item.suggestion}
                        </p>


                        <hr/>


                    </div>


                    )
                )
            }



        </div>

    );

}


export default AiSuggestions;