import React from "react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './pages/Home/Home'
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Dashboard from "./pages/Dashboard/Dashboard"
import Profile from "./pages/Profile/Profile";
import PrivateRoute from "./utils/PrivateRoutes";
function App()  {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/dashboard" element={<PrivateRoute ><Dashboard /> </PrivateRoute>}  />
        <Route exact path="/profile" element={<Profile />}  />
      </Routes>
    </Router>
  );
}
export default App;