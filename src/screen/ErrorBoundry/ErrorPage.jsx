import React from "react";
import "./Style/Error.css";
function ErrorMessage() {
  return (
    <div>
      <div class="numContainer">
        <div class="bit"></div>
        <div class="num four">
          <p>5</p>
          <hr />
        </div>
        <div class="bit"></div>
        <div class="bit"></div>
        <div class="num five">
          <p>0</p>
          <hr />
        </div>
        <div class="bit"></div>
        <div class="bit"></div>
        <div class="num nine">
          <p>0</p>
          <hr />
        </div>
        <div className="-mt-4">
          <div class="bit"></div>
          <p></p>

          <p className="text-xl">
            Whoops. Something ain't right. We're on it. In the meantime, you can
            contact us if you have an urgent request.
          </p>
        </div>
        <button className="button mt-3 text-gray-800">
          <a href="mailto:cache@aftrdrk.io" title="Contact us">
            {" "}
            Contact us
          </a>
        </button>
      </div>
    </div>
  );
}

export default ErrorMessage;
