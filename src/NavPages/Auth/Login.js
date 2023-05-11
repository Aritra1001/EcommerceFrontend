import React, { useState } from "react";
import axios from "axios";
import {toast} from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import Layout from '../../components/Layout/Layout';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit= async(event)=>{
        event.preventDefault();
        // console.log(name, email, password, phone);
        // toast.success('Registered Successfully');
        try {
            const res = await axios.post("http://localhost:8080/user/login", { email, password}) ;
            if(res && res.data.success){  // In the res variable we get a data object which will contain the response sent from the backend
                // alert(res.data.message); 
                toast.success(res.data.message);
                navigate('/');
            }
            else{
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        }
    }

  return (
    <>
        <Layout title={'Ecommerce App- login'}>
        <div className="signup my-3">
          <h1 className="signup-head">Login Page</h1>
          <form className="my-3" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail" className="form-label">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(event)=> setEmail(event.target.value)}
                className="form-control"
                id="exampleInputEmail"
                aria-describedby="emailHelp"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(event)=> setPassword(event.target.value)}
                className="form-control"
                id="exampleInputPassword"
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        </Layout>
    </>
  )
}

export default Login