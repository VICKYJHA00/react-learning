import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white px-4">
      <div className="text-center">

        {/* GIF */}
        <div className="flex justify-center">
          <img
            src="https://i.postimg.cc/2yrFyxKv/giphy.gif"
            alt="404 gif"
            className="w-72 md:w-96"
          />
        </div>

        {/* Content */}
        <div className="mt-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            This page is gone.
          </h1>

          <p className="text-lg mt-3 text-gray-600">
            ...maybe the page you're looking for is not found or never existed.
          </p>

          {/* Button */}
          <Link to="/">
            <button className="mt-6 px-6 py-3 rounded-xl bg-blue-600 text-white text-lg hover:bg-blue-500 transition">
              Back to home 👉
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default NotFound;