import React, { useState } from 'react';
import { Company } from '../types';
import { companies, employees } from '../data/mockData';
import Header from '../components/Header';
import CompanySelector from '../components/CompanySelector';
import EmployeeSelector from '../components/EmployeeSelector';

const Dashboard: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Company Management</h1>
          <p className="text-gray-600 mt-2">Select a company and employee to manage profiles and view details</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CompanySelector
            companies={companies}
            selectedCompany={selectedCompany}
            onSelectCompany={setSelectedCompany}
          />
          
          <EmployeeSelector
            employees={employees}
            selectedCompanyId={selectedCompany?.id || null}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;