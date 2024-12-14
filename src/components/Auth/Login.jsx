// // eslint-disable-next-line no-unused-vars
// import React from "react";

// const Login = () => {
//   return (
//     <div >
//       <section className="bg-gray-50 dark:bg-gray-900">
//         <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
//           {/* <a
//             href="#"
//             class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
//           >
//             <img
//               class="w-8 h-8 mr-2"
//               src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
//               alt="logo"
//             />
//             Flowbite
//           </a> */}
//           <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
//             <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//               <h1 className="text-xl font-bold  text-gray-900 md:text-2xl">
//                 Sign in to your account
//               </h1>
//               <form className="space-y-4 md:space-y-6" action="#">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block mb-2 text-sm font-medium text-gray-900 "
//                   >
//                     Your email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 "
//                     placeholder="name@company.com"
//                     required=""
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="password"
//                     className="block mb-2 text-sm font-medium text-gray-900 "
//                   >
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     name="password"
//                     id="password"
//                     placeholder="••••••••"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg  block w-full p-2.5 "
//                     required=""
//                   />
//                 </div>
//                 {/* <div class="flex items-center justify-between">
//                   <div class="flex items-start">
//                     <div class="flex items-center h-5">
//                       <input
//                         id="remember"
//                         aria-describedby="remember"
//                         type="checkbox"
//                         class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
//                         required=""
//                       />
//                     </div>
//                     <div class="ml-3 text-sm">
//                       <label
//                         for="remember"
//                         class="text-gray-500 dark:text-gray-300"
//                       >
//                         Remember me
//                       </label>
//                     </div>
//                   </div>
//                   <a
//                     href="#"
//                     class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
//                   >
//                     Forgot password?
//                   </a>
//                 </div> */}
//                 <button
//                   type="submit"
//                   className="w-full text-white bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
//                 >
//                   Sign in
//                 </button>
//                 <p className="text-sm font-light text-gray-500 ">
//                   Don’t have an account yet?{" "}
//                   <a
//                     href="/registration"
//                     className="font-medium text-blue-500 hover:underline"
//                   >
//                     Sign up
//                   </a>
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Login;




// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import {login_url} from "../../config"

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        `${login_url}`, // Replace with your API endpoint
        formData
      );

      // Assuming the API returns a token and user details on successful login
      if (response.data) {
        setSuccess("Login successful!");
        localStorage.setItem("token", response.data.token); // Save token
        localStorage.setItem("user", JSON.stringify(response.data.user)); // Save user info

        // Redirect to dashboard or home page
        window.location.href = "/dashboard";
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold text-gray-900 md:text-2xl">
                Sign in to your account
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
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={handleChange}
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
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                {success && <p className="text-green-500 text-sm">{success}</p>}
                <button
                  type="submit"
                  className={`w-full text-white bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={loading}
                >
                  {loading ? "Signing in..." : "Sign in"}
                </button>
                <p className="text-sm font-light text-gray-500">
                  Don’t have an account yet?{" "}
                  <a
                    href="/registration"
                    className="font-medium text-blue-500 hover:underline"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
