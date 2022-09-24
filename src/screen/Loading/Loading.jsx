import React from "react";
// import spinner from "../../Assets/Images/Loader/loader.gif";
function Loading() {
  return (
    <div className="min-h-screen">
      <div className="container_image  ">
        <img
          alt="loading"
          src={"https://www.linkpicture.com/q/050505-32-colors.gif"}
          className="w-1/2"
        />
      </div>
    </div>
  );
}

export default Loading;
