import { useState } from "react";
import axios from "axios";
import { category_url } from "../../config";

const Category = () => {
  const [formData, setFormData] = useState({ category: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${category_url}`, formData);
      console.log("Response:", response.data);
      // alert("Data submitted successfully!");
    } catch (error) {
      console.error(
        "Error submitting data:",
        error.response?.data || error.message
      );
      // alert("Failed to submit data.");
    }
  };

  return (
    <div className="flex justify-center items-center h-[100vh] w-[100%]">
      <form onSubmit={handleSubmit} className="w-[40%]">
        <div>
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
            placeholder=""
            required
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="text-white bg-blue-700  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  my-4"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Category;
