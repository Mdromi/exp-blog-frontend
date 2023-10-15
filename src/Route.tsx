<<<<<<< HEAD

import React, {ReactNode} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import Registration from './components/auth/Register';
import Navigation from './components/Navigation';
import Homepage from './pages/Homepage/Homepage';
import Profile from './components/users/Profile';
import Dashboard from './containers/Dashboard/Dashboard';
import UserProfile from './components/users/UserProfile';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div>
    <Navigation />
    {children}
  </div>
);
=======
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
>>>>>>> 8947cd2743747b3cf99989f3a5e0f3f638eb4201


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
<<<<<<< HEAD
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route index element={<Homepage />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Registration />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="create-profile" element={<UserProfile />} />
              </Routes>
            </Layout>
          }
        />
=======
        <Route path="/login" element={<Login/>} />
        {/* Uncomment the following lines if you intend to use these components */}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/authposts" element={<AuthPosts />} /> */}
>>>>>>> 8947cd2743747b3cf99989f3a5e0f3f638eb4201
      </Routes>
    </Router>
  );
};

export default AppRoutes;
<<<<<<< HEAD

=======
>>>>>>> 8947cd2743747b3cf99989f3a5e0f3f638eb4201
