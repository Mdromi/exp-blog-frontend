
import React, {ReactNode} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import Registration from './components/auth/Register';
import Navigation from './components/Navigation';
import Homepage from './pages/Homepage/Homepage';
import Dashboard from './containers/Dashboard/Dashboard';
import CreateProfile from './containers/create-profile/CreateProfile';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div>
    <Navigation />
    {children}
  </div>
);


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route index element={<Homepage />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Registration />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="create-profile" element={<CreateProfile />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

