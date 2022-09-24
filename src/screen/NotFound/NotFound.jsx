import React from "react";
// import Config from "../../Config/Api";

function NotFound() {
  // active:bg-blue-600 hover:bg-blue-700

  const OnClickBack = () => {
    window.location.href = "/";
  };

  // if (Config.token) {
  //   window.location.href = "/";
  // }

  return (
    <div class="min-h-screen  w-screen  flex items-center">
      <div class="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
        <div class="max-w-md text-black ">
          <div class="text-5xl font-dark font-bold">404</div>
          <p class="text-2xl md:text-3xl font-light  leading-normal">
            Sorry we couldn't find this page.{" "}
          </p>
          <p class="mb-8">
            But dont worry, you can find plenty of other things on our homepage.
          </p>

          <button
            onClick={OnClickBack}
            class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-black  "
          >
            Back to homepage
          </button>
        </div>
        <div class="max-w-lg">
          <img
            src="https://stories.freepiklabs.com/storage/14862/400-error-bad-request-bro-2833.png"
            alt="404"
            class="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
