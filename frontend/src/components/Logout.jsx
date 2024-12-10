import { logoutFromGoogle } from "../services/authService";

function Logout() {
  return (
    <div className="flex justify-center items-center py-4">
      <button
        className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transform hover:scale-105 transition-all duration-300"
        onClick={logoutFromGoogle}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
