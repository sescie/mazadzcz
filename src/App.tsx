import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MutualFunds from './pages/investments/MutualFunds';
import ETFs from './pages/investments/ETFs';
import PrivateAssets from './pages/investments/PrivateAssets';
import SustainableInvesting from './pages/investments/SustainableInvesting';
import MarketViews from './pages/insights/MarketViews';
import EconomicViews from './pages/insights/EconomicViews';
import InvestmentResearch from './pages/insights/InvestmentResearch';
import Leadership from './pages/about/Leadership';
import CorporateResponsibility from './pages/about/CorporateResponsibility';
import Careers from './pages/about/Careers';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/dashboards/Dashboard';
import DashboardLayout from './components/DashboardLayout';
import Users from './pages/dashboards/users/Users';
import Investments from './pages/dashboards/investments/Investments';



function App() {
  return (
    <Router>
    <Routes>
      {/* Dashboard Routes */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="investments" element={<Investments />} />

        {/* Add other dashboard routes here */}
      </Route>

      {/* Public Routes */}
      <Route
        path="/*"
        element={
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/investments/mutual-funds" element={<MutualFunds />} />
              <Route path="/investments/etfs" element={<ETFs />} />
              <Route path="/investments/private-assets" element={<PrivateAssets />} />
              <Route path="/investments/sustainable-investing" element={<SustainableInvesting />} />
              <Route path="/insights/market-views" element={<MarketViews />} />
              <Route path="/insights/economic-views" element={<EconomicViews />} />
              <Route path="/insights/investment-research" element={<InvestmentResearch />} />
              <Route path="/about/leadership" element={<Leadership />} />
              <Route path="/about/corporate-responsibility" element={<CorporateResponsibility />} />
              <Route path="/about/careers" element={<Careers />} />
              <Route path="/auth/login" element={<Login />} />
              <Route path="/auth/register" element={<Register />} />
              <Route path="/dashboard" element={<DashboardLayout />}/>
            </Routes>
            <Footer />
          </>
        }
      />
    </Routes>
  </Router>
);
}

export default App;