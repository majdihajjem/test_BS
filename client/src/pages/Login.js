
import "../loginCSS.css";
import { useEffect } from "react";
import { TfiLock } from 'react-icons/tfi';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../slices/userSlice";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { errors: userErrors, isAuth } = useSelector((state) => state.user);
  useEffect(() => {
    if (isAuth) nav("/Agences");
  }, [isAuth]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitFuct = (data) => {
    dispatch(loginUser(data));
<<<<<<< HEAD
    console.log(data);
=======
    // console.log(data);
>>>>>>> 9221dbe (commit 9)
  };
  return (
    <div className="container">
	<div className="screen">
    <TfiLock style={{width:" 143px",
    height: "143px",
    color: "wheat",
    marginLeft: "111px",
    marginTop: "75px"}}/>
    <div className="screen__content">
      <Form onSubmit={handleSubmit(submitFuct)} className="login">
        <Form.Group className="mb-3">
        
          <Form.Control 
            {...register("email", {
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            })}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            {errors.email && <p>invalid email</p>}
          </Form.Text>
        </Form.Group>
        {userErrors?.includes("register") && <p>{userErrors}</p>}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            {...register("password")}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        {userErrors?.includes("password") && <p>{userErrors}</p>}
        <Button variant="primary" type="submit" className="button login__submit">
        <span className="button__text" style={{margin:"auto"}}>Log In Now</span>
        </Button>
      </Form>
    </div>
    </div>
    </div>
  );
};

export default Login;