import NavBar from "../components/NavBar";
import {Fragment} from "react";

const Home = () => {
    const authToken = false;

return (
    <Fragment>
        <NavBar />


       <div>
            <h1>Swipe Right@</h1>
            <button className="primary-button" >
            {authToken? "Sign out":"Create Account"}
            </button>
       </div>
    </Fragment>
)
}

export default Home;