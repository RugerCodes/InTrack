import { useNavigate } from 'react-router-dom'

export default function Dashboard({ onLogout }) {
  const navigate = useNavigate()

  function handleLogout() {
    onLogout() // Set isLoggedIn = false
    navigate('/') // Send user back to homepage
  }

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Welcome to your Dashboard ✅</h1>
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
      >
        Logout
      </button>
    </div>
  )
}
