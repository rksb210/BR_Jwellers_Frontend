// // eslint-disable-next-line no-unused-vars
// import React from "react";

// const Registration = () => {
//   return (
//     <section className="bg-gray-50 dark:bg-gray-900">
//   <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//       {/* <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
//           <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
//           Flowbite    
//       </a> */}
//       <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
//           <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//               <h1 className="text-xl font-bold  text-gray-900 md:text-2xl dark:text-white">
//                   Create an account
//               </h1>
//               <form className="space-y-4 md:space-y-6" action="#">
//                   <div>
//                       <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
//                       <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="name@company.com" required=""/>
//                   </div>
//                   <div>
//                       <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
//                       <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " required=""/>
//                   </div>
//                   {/* <div>
//                       <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
//                       <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
//                   </div> */}
//                   {/* <div class="flex items-start">
//                       <div class="flex items-center h-5">
//                         <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
//                       </div>
//                       <div class="ml-3 text-sm">
//                         <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
//                       </div>
//                   </div> */}
//                   <button type="submit" className="w-full text-white bg-blue-600 hover:bg-primary-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">Create an account</button>
//                   <p className="text-sm font-light text-gray-500 dark:text-gray-400">
//                       Already have an account? <a href="/login" className="font-medium text-blue-500 hover:underline">Login here</a>
//                   </p>
//               </form>
//           </div>
//       </div>
//   </div>
// </section>
//   );
// };

// export default Registration;



// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import {registration_url} from "../../config"

const Registration = () => {
  // State for user inputs
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // State for feedback messages
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      // Make POST request to registration API
      const response = await axios.post(`${registration_url}`, formData);
      setMessage(response.data.message);
      setError(""); // Clear any previous errors
    } catch (err) {
      // Handle errors
      setMessage("");
      setError(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Create an account
              </button>
            </form>
            {message && <p className="text-green-500 mt-3">{message}</p>}
            {error && <p className="text-red-500 mt-3">{error}</p>}
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <a href="/login" className="font-medium text-blue-500 hover:underline">
                Login here
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
