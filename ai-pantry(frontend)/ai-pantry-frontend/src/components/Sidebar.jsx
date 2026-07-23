import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/sidebar.css";

function Sidebar() {

    const location = useLocation();
    const navigate = useNavigate();

    const menu = [
        { name: "🏠 Dashboard", path: "/dashboard" },
        { name: "🥗 Pantry", path: "/pantry" },
        { name: "⏰ Expiry Alerts", path: "/expiry-alerts" },
        { name: "💰 Expenses", path: "/expenses" },
        { name: "📊 Budget", path: "/budget" },
        { name: "🍳 Recipes", path: "/recipes" },
        { name: "🤖 AI Advisor", path: "/budget-advice" }
    ];


    const handleLogout = () => {

        localStorage.removeItem("token");

        navigate("/");

    };


    return (

        <div className="sidebar">

            <h2 className="logo">
                🌿 AI Pantry
            </h2>

            <ul>

                {
                    menu.map((item) => (

                        <li
                            key={item.path}
                            className={
                                location.pathname === item.path
                                    ? "active"
                                    : ""
                            }
                        >

                            <Link to={item.path}>
                                {item.name}
                            </Link>

                        </li>

                    ))
                }

            </ul>

            <button
                className="logout-btn"
                onClick={handleLogout}
            >
                🚪 Logout
            </button>

        </div>

    );

}

export default Sidebar;