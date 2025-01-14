import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="bg-white ">
      <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div className="wf-ull lg:w-1/2">
          <p className="text-sm font-medium text-gray-500">404 error</p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            Page not found
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Sorry, the page you are looking for doesn't exist.
          </p>

          <div className="flex items-center mt-6 gap-x-3">
            <Link
              to="/"
              className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-gray-500 rounded-lg shrink-0 sm:w-auto hover:bg-gray-600"
            >
              Go Home
            </Link>
          </div>
        </div>

        <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
          <img
            className=" w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover "
            src="https://img.freepik.com/free-vector/404-error-abstract-concept-illustration_335657-2243.jpg?t=st=1736335269~exp=1736338869~hmac=4d7577d095433ed4c6c1f009c3c95c3552ce817d458e4d10d0be0490299019ec&w=826"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Error;
