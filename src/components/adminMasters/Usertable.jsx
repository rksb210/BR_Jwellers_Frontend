// eslint-disable-next-line no-unused-vars
import React from "react";

const Usertable = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] w-[100%]">
      <div className="relative overflow-x-auto w-[60%]">
        <div className="text-center text-lg font-bold my-4">User Table</div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                EmailId
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Location
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Abhi
              </th>
              <td className="px-6 py-4">Abhi@gmail.com</td>
              <td className="px-6 py-4">7895264320</td>
              <td className="px-6 py-4">Gurugram</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Raj
              </th>
              <td className="px-6 py-4">raj@gmail.com</td>
              <td className="px-6 py-4">9823654120</td>
              <td className="px-6 py-4">Delhi</td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Kishore
              </th>
              <td className="px-6 py-4">kk@gmail.com</td>
              <td className="px-6 py-4">9564287462</td>
              <td className="px-6 py-4">Noida</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Usertable;
