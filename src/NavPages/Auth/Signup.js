import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import {toast} from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();

    const handleSubmit= async(event)=>{
        event.preventDefault();
        // console.log(name, email, password, phone);
        // toast.success('Registered Successfully');
        try {
            const res = await axios.post("http://localhost:8080/user/signup", {name, email, password, phone}) ;
            if(res && res.data.success){  // In the res variable we get a data object which will contain the response sent from the backend
                // alert(res.data.message); 
                toast.success(res.data.message);
                navigate('/login');
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
      <Layout title={"Ecommerce App- signup"}>
        <div className="form-container">
          <h1 className="signup-head my-4">Signup Page</h1>
          <form className="my-3" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(event)=> setName(event.target.value)}
                className="form-control"
                id="exampleInputName"
                aria-describedby="emailHelp"
                placeholder="Enter your name"
                required
              />
            </div>
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
            <div className="mb-3">
              <label htmlFor="exampleInputPhone" className="form-label">
                Phone
              </label>
              <input
                type="text"
                value={phone}
                onChange={(event)=> setPhone(event.target.value)}
                className="form-control"
                id="exampleInputPhone"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-dark ">
                     Signup
                </button>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Signup;
