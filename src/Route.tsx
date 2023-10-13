import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import Registration from './components/auth/Register';
import Navigation from './components/Navigation';
import Homepage from './pages/Homepage/Homepage';
import Profile from './components/users/Profile';


const AppRoutes = () => {
  
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/login" element={<Login/>} />
    //     <Route path="/signup" element={<Registration/>} />
    //     {/* Uncomment the following lines if you intend to use these components */}
    //     {/* <Route path="/login" element={<Login />} />
    //     <Route path="/signup" element={<Register />} />
    //     <Route path="/createpost" element={<CreatePost />} />
    //     <Route path="/profile/:id" element={<Profile />} />
    //     <Route path="/forgotpassword" element={<ForgotPassword />} />
    //     <Route path="/resetpassword/:token" element={<ResetPassword />} />
    //     <Route path="/posts/:id" element={<PostDetails />} />
    //     <Route path="/authposts" element={<AuthPosts />} /> */}
    //   </Routes>
    // </Router>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Registration/>} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </Router>

  );
};

export default AppRoutes;
