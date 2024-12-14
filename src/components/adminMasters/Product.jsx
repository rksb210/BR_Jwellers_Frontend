import { useState, useEffect } from "react";
import axios from "axios";
import {  product_url,get_category_url } from "../../config";

const Product = () => {
  const [categories, setCategories] = useState([]); // To store category options
  const [formData, setFormData] = useState({
    category: "",
    productName: "",
    productDescription: "",
  });

  useEffect(() => {
    // Fetch categories on component mount
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${get_category_url}`);
        console.log("response:",response)
        setCategories(response.data.data); 
      } catch (error) {
        console.error("Error fetching categories:", error);
        // alert("Failed to load categories.");
      }
    };

    fetchCategories();
  }, []);

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
      const response = await axios.post(`${product_url}`, formData);
      console.log("Response:", response.data);
      alert("Product submitted successfully!");
      setFormData({category:'',productDescription:'',productName:''})
    } catch (error) {
      console.error("Error submitting product:", error.response?.data || error.message);
      alert("Failed to submit product.");
    }
  };
console.log(categories)
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
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.category}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4">
          <label
            htmlFor="productName"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Enter product name"
            required
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="productDescription"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Product Description
          </label>
          <textarea
            id="productDescription"
            name="productDescription"
            value={formData.productDescription}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Enter product description"
            rows="4"
          />
        </div>

        <div className="flex justify-center items-center mt-4">
          <button
            type="submit"
            className="text-white bg-blue-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Product;
