import { BrowserRouter, Routes, Route } from "react-router-dom";


// Pages

import Login from "./pages/Login";
import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";

import Pantry from "./pages/Pantry";

import AddPantryItem from "./pages/AddPantryItem";

import ExpiryAlerts from "./pages/ExpiryAlerts";

import Expenses from "./pages/Expenses";

import Budget from "./pages/Budget";

import RecipeSuggestions from "./pages/RecipeSuggestions";

import BudgetAdvice from "./pages/BudgetAdvice";

import AddExpense from "./pages/AddExpense";

import EditPantryItem from "./pages/EditPantryItem";

import EditExpense from "./pages/EditExpense";



// If you have these pages uncomment them

// import AddExpense from "./pages/AddExpense";
// import EditExpense from "./pages/EditExpense";
// import EditPantry from "./pages/EditPantry";



function App(){


    return(


        <BrowserRouter>


            <Routes>


                {/* Authentication */}


                <Route

                    path="/"

                    element={<Login />}

                />



                <Route

                    path="/register"

                    element={<Register />}

                />






                {/* Main Application */}



                <Route

                    path="/dashboard"

                    element={<Dashboard />}

                />





                <Route

                    path="/pantry"

                    element={<Pantry />}

                />





                <Route

                    path="/add-pantry"

                    element={<AddPantryItem />}

                />

                <Route
                    path="/edit-pantry/:id"
                    element={<EditPantryItem />}
                />





                <Route

                    path="/expiry-alerts"

                    element={<ExpiryAlerts />}

                />





                <Route

                    path="/expenses"

                    element={<Expenses />}

                />


                <Route
                    path="/add-expense"
                    element={<AddExpense />}
                />

                <Route
                    path="/edit-expense/:id"
                    element={<EditExpense />}
                />





                <Route

                    path="/budget"

                    element={<Budget />}

                />





                <Route

                    path="/recipes"

                    element={<RecipeSuggestions />}

                />





                <Route

                    path="/budget-advice"

                    element={<BudgetAdvice />}

                />





                {/* Add Expense */}

                {/*
                <Route
                    path="/add-expense"
                    element={<AddExpense />}
                />
                */}





                {/* Edit Expense */}

                {/*
                <Route
                    path="/edit-expense/:id"
                    element={<EditExpense />}
                />
                */}





                {/* Edit Pantry */}

                {/*
                <Route
                    path="/edit-pantry/:id"
                    element={<EditPantry />}
                />
                */}





            </Routes>


        </BrowserRouter>


    );


}


export default App;