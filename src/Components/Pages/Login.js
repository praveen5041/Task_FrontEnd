import React from 'react'
import { Col, Container, Form, Button, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import  { useState } from "react";
import {useLoginUserMutation} from '../Api'
//import { ApiContext } from '../ApiContext';
import '../Pages/Login.css'
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
   // const { socket } = useContext(ApiContext);
    const [loginUser, { isLoading, error }] = useLoginUserMutation();
    function handleLogin(e) {
        e.preventDefault();
        // login logic
        loginUser({ email, password }).then(({ data }) => {
            if (data) {
                // socket work
               //socket.emit("new-user");
                // navigate to the chat
                navigate("/chat");
            }
        });
    }
  return (
    
    <div className='log'>
        {/* <Col md={5} className="login__bg"></Col> */}
        {/* <Col  className="d-flex align-items-center justify-content-center flex-direction-column"> */}
            <Form  className='log' onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    {error && <p className="alert alert-danger">{error.data}</p>}
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                    {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    {isLoading ? <Spinner animation="grow" /> : "Login"}
                </Button>
                <div className="py-4">
                    <p className="text-center">
                        Don't have an account ? <Link to="/signup">Signup</Link>
                    </p>
                </div>
            </Form>
        {/* </Col> */}
        </div>
 
  )
}

export default Login