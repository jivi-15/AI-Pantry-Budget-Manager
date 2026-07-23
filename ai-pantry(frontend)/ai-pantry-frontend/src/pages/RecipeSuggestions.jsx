import { useEffect, useState } from "react";

import api from "../api/axiosConfig";

import Layout from "../components/Layout";

import "../styles/recipes.css";



function RecipeSuggestions(){


    const [recipes,setRecipes] = useState([]);

    const [loading,setLoading] = useState(true);

    const [error,setError] = useState("");





    useEffect(()=>{

        fetchRecipes();

    },[]);






    const fetchRecipes = async()=>{


        try{


            setLoading(true);

            setError("");



            const response =

                await api.get(
                    "/ai/recipes"
                );



            setRecipes(
                response.data
            );



        }
        catch(error){


            console.log(error);


            setError(
                "Failed to load recipes"
            );


        }
        finally{


            setLoading(false);


        }


    };







    return(


        <Layout>


            <div className="recipe-page">





            {

            loading ?


            (

                <div className="page-loader">

                    ⏳ Finding recipes...

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

                    AI Recipe Suggestions 🍳🤖

                </h1>




                <p className="subtitle">

                    Smart recipes based on your pantry items.

                </p>








                {

                recipes.length === 0 ?


                (

                    <div className="empty-box">

                        No recipes available yet 🍽️

                    </div>

                )


                :


                (

                <div className="recipe-grid">





                {

                recipes.map(

                (recipe,index)=>(



                    <div

                        className="recipe-card"

                        key={index}

                    >





                        <h2>

                            🍲 {recipe.recipeName}

                        </h2>





                        <p>

                            {recipe.description}

                        </p>







                        <h3>

                            ✅ Available Ingredients

                        </h3>




                        <div className="ingredients">


                        {

                        recipe.usedIngredients.map(

                            (item,i)=>(


                                <span key={i}>

                                    {item}

                                </span>


                            )

                        )

                        }


                        </div>









                        <h3>

                            ⚠️ Missing Ingredients

                        </h3>





                        <div className="ingredients missing">



                        {

                        recipe.missingIngredients.map(

                            (item,i)=>(


                                <span key={i}>

                                    {item}

                                </span>


                            )

                        )

                        }



                        </div>






                    </div>


                )

                )

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



export default RecipeSuggestions;