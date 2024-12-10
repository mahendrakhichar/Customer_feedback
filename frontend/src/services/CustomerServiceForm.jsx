import { useState } from "react";

const CustomerServiceForm = () => {
  const [category, setCategory] = useState("General Queries");
  const [comments, setComments] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem("userId");
      const email = localStorage.getItem("email");
      const name = localStorage.getItem("name");
      console.log("from frontend ", userId, email, name);

      if (!userId || !email || !name) {
        alert("User information is missing. Please log in again.");
        return;
      }

      const response = await fetch(
        "http://localhost:5000/api/customer-service/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
            email,
            name,
            category,
            comments,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("data is this -->", data);
        alert("Request submitted successfully!");
      } else {
        const errorData = await response.json();
        console.error("Error submitting request:", errorData);
        alert("Failed to submit request. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to submit request. Please try again.");
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-xl max-w-2xl mx-auto mt-16">
      <h2 className="text-3xl font-semibold text-blue-700 mb-6 text-center">
        Customer Service Request
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block mb-2 text-lg font-medium text-gray-700">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>General Queries</option>
            <option>Product Features Queries</option>
            <option>Product Pricing Queries</option>
            <option>Product Feature Implementation Requests</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-lg font-medium text-gray-700">
            Comments
          </label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Please provide details about your request..."
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerServiceForm;
