import { useState } from "react";

const RequestsPage = () => {
  const [requests, setRequests] = useState([]);
  const [category, setCategory] = useState("General Queries");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    try {
      const response = await fetch(
        `http://localhost:5000/api/customer-service/retrieve?category=${category}`,
        {
          method: "GET",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch customer service requests");
      }
      const data = await response.json();
      setRequests(data.data); // Update the requests state with the response
    } catch (error) {
      console.error("Error fetching customer service requests:", error);
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-extrabold text-blue-700 mb-6 text-center">
        Customer Service Requests
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6"
      >
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option>General Queries</option>
          <option>Product Features Queries</option>
          <option>Product Pricing Queries</option>
          <option>Product Feature Implementation Requests</option>
        </select>
        <button
          type="submit"
          className="p-3 bg-blue-600 text-white rounded-lg font-semibold shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
        >
          Fetch Requests
        </button>
      </form>
      <div className="space-y-4">
        {requests.length > 0 ? (
          requests.map((req) => (
            <div
              key={req.id}
              className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="font-bold text-blue-800 text-lg mb-2">
                {req.title || "No Title"}
              </h3>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">Category:</span> {req.category}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Comments:</span> {req.comments}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center">
            No requests to display. Please fetch requests to see data.
          </p>
        )}
      </div>
    </div>
  );
};

export default RequestsPage;
