import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
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
      </Routes>
    </Router>
  );
};

export default AppRoutes;
