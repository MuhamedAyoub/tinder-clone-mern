import { useState } from "react";
import TinderCards from "../components/dashboard/TinderCard";
import ChatBox from "../components/dashboard/ChatArea";

const Dashboard = () => {
  const [lastDirection, setLastDirection] = useState();

  return (
    <div className="dashboard">
      <ChatBox />
      <div className="swiper-container">
        <TinderCards setLastDirection={setLastDirection} />
        <div>{lastDirection && <p>You swiped {lastDirection}</p>}</div>
      </div>
    </div>
  );
};

export default Dashboard;
