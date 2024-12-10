import RequestsPage from "./RequestPage";
import CustomerServiceForm from "../services/CustomerServiceForm";
import Logout from "./Logout";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center relative">
      {/* Fixed Logout Button in Header */}
      <div className="absolute top-6 right-6 z-10">
        <Logout />
      </div>

      {/* Dashboard Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-12">Customer Service Page</h1>

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row w-full max-w-4xl space-y-12 lg:space-y-0 lg:space-x-12">
        {/* Large Section - Requests Overview */}
        <div className="flex-1 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Requests Overview</h2>
          <RequestsPage />
        </div>

        {/* Smaller Section - Customer Service Form */}
        <div className="flex-1 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Customer Service</h2>
          <CustomerServiceForm />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
