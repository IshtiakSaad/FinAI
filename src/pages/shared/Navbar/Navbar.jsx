// src/components/Navbar.jsx
import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AuthContext from '../../../context/AuthContext/AuthContext';

const Navbar = () => {
  const location = useLocation();
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logoutUser();
      console.log("User logged out");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const isActive = (path) => location.pathname === path ? 'text-blue-500 font-semibold' : 'text-gray-700';

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-gray-800">
        Finance AI
      </Link>

      <div className="space-x-12">
        <Link to="/dashboard" className={isActive('/dashboard')}>Dashboard</Link>
        <Link to="/transactions" className={isActive('/transactions')}>Transactions</Link>
        <Link to="/insights" className={isActive('/insights')}>Insights</Link>
        <Link to="/budget" className={isActive('/budget')}>Budget</Link>
        <Link to="/settings" className={isActive('/settings')}>Settings</Link>
      </div>

      <div>
          {user ? (
            <div className="flex items-center space-x-4">
              <img
                src={user.photoURL || "/default-profile.png"}
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <button
                onClick={handleLogout}
                className="btn btn-outline btn-sm text-blue-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="space-x-2">
              <a href="/login" className="btn btn-primary btn-sm">
                Login
              </a>
              <a href="/register" className="btn btn-secondary btn-sm">
                Register
              </a>
            </div>
          )}
        </div>
    </nav>
  );
};

export default Navbar;