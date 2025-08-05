import React from 'react';
import { Building2, UserCog } from 'lucide-react';
import companyLogo from '../images/autologo-removebg-preview.png';


const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
<div className="logo">
  <img
    src={companyLogo}
    alt="Company Logo"
    className="w-26 h-10 object-contain"
  />
</div>
            {/* <div>
              <h1 className="text-xl font-bold text-gray-900">AdminPanel</h1>
              <p className="text-xs text-gray-500">Management System</p>
            </div> */}
          </div>
          
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <UserCog className="w-4 h-4" />
            <span>Admin Login</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;