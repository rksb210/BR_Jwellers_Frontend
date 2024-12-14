import  { useEffect, useState } from "react";
import axios from "axios";
import {get_customer_url} from "../../config"

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch customers from the backend
  const fetchCustomers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${get_customer_url}`); // Replace with your API endpoint
      setCustomers(response.data.data);
    } catch (err) {
      console.error("Error fetching customers:", err.message);
      setError("Failed to load customer data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div className="flex justify-center items-center h-[100vh] w-[100%]">
      <div className="w-[40%]">
        <div className="text-center text-lg font-bold my-4">User Table</div>

        {loading && <div>Loading...</div>}
        {error && <div className="text-red-500">{error}</div>}
        {!loading && !error && customers.length === 0 && <div>No customers found.</div>}

        {!loading && !error && customers.length > 0 && (
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  S.No.
                </th>
                <th scope="col" className="px-6 py-3">
                  EmailId
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone Number
                </th>
                {/* <th scope="col" className="px-6 py-3">
                  Location
                </th> */}
              </tr>
            </thead>
            <tbody>
              {customers.map((customer,index) => (
                <tr
                  key={customer.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {index +1}
                  </th>
                  <td className="px-6 py-4">{customer.email}</td>
                  <td className="px-6 py-4">{customer.phone}</td>
                  {/* <td className="px-6 py-4">{customer.location}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Customers;
