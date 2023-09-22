import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../slices/userSlice";
const NavigationBar = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.user);
  const { userInfo } = useSelector((state) => state.user);
  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
<<<<<<< HEAD
    <Navbar bg="dark" variant="dark" style={{maxHeight:"70px",position:"sticky",opacity:0.5}}>
=======
    <Navbar
      bg="dark"
      variant="dark"
      style={{ maxHeight: "70px", position: "sticky" }}
    >
>>>>>>> 9221dbe (commit 9)
      <Container>
        <Navbar.Brand>BSGA</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/">Home</Link>
          <Link to="/Products">Products</Link>
          <Link to="/Agences">Agences</Link>
<<<<<<< HEAD
          {isAuth ? (
            <>
            {(userInfo.role === "admin")&&(<Link to="/Register">Register</Link>)}
              <button onClick={logoutHandler} style={{background: "none",border: "none"}}>Logout</button>
            </>
          ) : (
            <Link to="/Login" style={{marginLeft: "433px"}}>Login</Link>
=======
          {isAuth && userInfo.role === "admin" && (
            <Link to="/userManagement">Management</Link>
          )}
          {isAuth ? (
            <>
              {userInfo.role === "admin" && (
                <Link to="/Register">Register</Link>
              )}
              <button
                onClick={logoutHandler}
                style={{ background: "none", border: "none" }}
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/Login" style={{ marginLeft: "433px" }}>
              Login
            </Link>
>>>>>>> 9221dbe (commit 9)
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
