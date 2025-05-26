import { useNavigate } from "react-router-dom"

export default function Login({ onLogin }) {
  const navigate = useNavigate() // 

  function handleSubmit(e) {
    e.preventDefault()
    onLogin()               // changes isLoggedIn to true (from App.jsx)
    navigate("/dashboard")  // go to Dashboard page
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Sign In
        </button>
      </form>
    </div>
  )
}
