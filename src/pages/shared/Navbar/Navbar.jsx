// src/components/Navbar.jsx
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'text-blue-500 font-semibold' : 'text-gray-700';

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-gray-800">
        Finance AI
      </Link>

      <div className="space-x-4">
        <Link to="/dashboard" className={isActive('/dashboard')}>Dashboard</Link>
        <Link to="/transactions" className={isActive('/transactions')}>Transactions</Link>
        <Link to="/insights" className={isActive('/insights')}>Insights</Link>
        <Link to="/budget" className={isActive('/budget')}>Budget</Link>
        <Link to="/settings" className={isActive('/settings')}>Settings</Link>
      </div>
    </nav>
  );
};

export default Navbar;