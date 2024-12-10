import { loginWithGoogle } from "../services/authService";

function Login() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-600">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-white mb-6">
          Welcome to My Customer service app
        </h1>
        <p className="text-lg text-gray-100 mb-8">
          Sign in to continue 
        </p>
        <button
          className="bg-white text-blue-500 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
          onClick={loginWithGoogle}
        >
          Login with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
