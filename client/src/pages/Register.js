import { useEffect } from "react";
import "../loginCSS.css"
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../slices/userSlice";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { errors: userErrors, isAuth } = useSelector((state) => state.user);
  const { userInfo } = useSelector((state) => state.user);
  useEffect(() => {
    if (userInfo.role !== "admin") nav("/Agences");
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitFuct = (data) => {
    dispatch(registerUser(data));
    console.log(data);
  };
  return (
    <div className="container">
      <div className="screen">
        <AiOutlineUsergroupAdd style={{width: "150px",
    height: "150px",
    color: "wheat",
    marginLeft:"100px",
    marginTop: "35px"}}/>
      <Form onSubmit={handleSubmit(submitFuct)} className="login" style={{paddingTop:"40px"}}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            {...register("username")}
            type="text"
            placeholder="user name ..."
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            {...register("email", {
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            })}
            type="email"
            placeholder="email ..."
          />
          <Form.Text className="text-muted">
            {errors.email && <p>invalid email</p>}
          </Form.Text>
          {userErrors && <p>{userErrors}</p>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            {...register("password")}
            type="password"
            placeholder="Password ..."
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control {...register("role")} type="text" placeholder="role ..." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            {...register("agence")}
            type="text"
            placeholder="agence ..."
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="button login__submit">
        <span className="button__text" style={{margin:"auto"}}>Register Now</span>
        </Button>
      </Form>
      </div>
    </div>
  );
};

export default Register;
