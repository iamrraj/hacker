import React from "react";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const navigate = useNavigate();

  const handleMap = () => {
    navigate("/map/");
  };
  return (
    <div className="px-10 mt-10">
      <div>
        <h1 className="text-4xl font-bold">Dashboard</h1>
      </div>
      <div className="mt-5">
        <button
          onClick={handleMap}
          className="bg-mainColor text-xl text-white px-10 py-2 rounded shadow"
        >
          Go to map
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
