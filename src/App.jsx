import ProtectedRoute from './ProtectedRoute';

import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Tracker from './pages/Tracker';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100 p-6">
     <nav className="mb-6 space-x-4">
  <Link to="/">Home</Link>
  {!isLoggedIn && <Link to="/login">Login</Link>}
  {!isLoggedIn && <Link to="/register">Register</Link>}
  {isLoggedIn && <Link to="/dashboard">Dashboard</Link>}
  {isLoggedIn && <Link to="/tracker">Tracker</Link>} 
</nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<ProtectedRoute isLoggedIn={isLoggedIn}> <Dashboard onLogout={() => setIsLoggedIn(false)} /> </ProtectedRoute>}/>
        <Route path="/tracker" element={ <ProtectedRoute isLoggedIn={isLoggedIn}> <Tracker /> </ProtectedRoute> }/>
      </Routes>
    </div>
  )
}

export default App
