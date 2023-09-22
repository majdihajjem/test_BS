import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Agences from "./pages/Agences";
import NavigationBar from "./components/Navigationbar";
import ProtectedRoute from "./components/ProtectedRoute";
<<<<<<< HEAD
function App() {
  return (
    <div>
      <NavigationBar/>
=======
import UserManagement from "./pages/UserManagement";
function App() {
  return (
    <div>
      <NavigationBar />
>>>>>>> 9221dbe (commit 9)
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/register" element={<Register />} />
<<<<<<< HEAD
=======
          <Route path="/UserManagement" element={<UserManagement />} />
>>>>>>> 9221dbe (commit 9)
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/agences" element={<Agences />} />
      </Routes>
    </div>
  );
}

export default App;
