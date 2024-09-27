import React from 'react';
import './register.scss';
import img from '../assets/register.png';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import UserContext from '../context/UserContext';
import { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {

  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const context = useContext(UserContext);
  const { setProgress } = context;


  const handleRegister = async (e) => {
    e.preventDefault();
    setProgress(10);

    if (password !== cpassword) {
      toast.warn('Password and confirm password do not match!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    try {
      setProgress(20);
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        username,
        email,
        mobile,
        password,
        cpassword
      });
      // console.log(res.data);
      setProgress(70);
      if (res.data.success) {

        // react toastify
        toast.success('Registered successfully, login to continue!', {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });


      }
    } catch (err) {
      console.log(err);
      // react toast
      toast.error('Something went wrong, check whether email or Username already exist!', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    setProgress(100);
  }

  return (
    <div className='register' style={{overflow : "hidden"}}>
      {/* alert */}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="left">
        <img src={img} alt="far-img" />
        <img className='plant' src="https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/illustrations/objects/tree-3.png" alt="far-img" />
      </div>

      <div className="right">

        <div className="form-container">
          <span className="head">
            Welcome to KrishiConnect!👋🏻
          </span>
          <span className='head2'>
            Make your app management easy and fun!
          </span>

          <form className="myform" onSubmit={handleRegister}>
            <TextField className='inp-field' id="outlined-basic" label="Name" variant="outlined" onChange={e => setName(e.target.value)} required />
            <TextField className='inp-field' id="outlined-basic" label="Username" variant="outlined" onChange={e => setUserName(e.target.value)} required />
            <TextField type="email" className='inp-field' id="outlined-basic" label="Email" variant="outlined" onChange={e => setEmail(e.target.value)} required />
            <TextField className='inp-field' id="outlined-basic" label="Phone" variant="outlined" onChange={e => setMobile(e.target.value)} required />
            <TextField type='password' className='inp-field' id="outlined-basic" label="Password" variant="outlined" onChange={e => setPassword(e.target.value)} required />
            <TextField type='password' className='inp-field' id="outlined-basic" label="Confirm Password" variant="outlined" onChange={e => setCpassword(e.target.value)} required />

            <Button type='submit' variant="contained">
              Register
            </Button>
          </form>

          <div className="text">
            <p >Already have an account?
              <Link className='link' to={"/login"}><span> Sign in instead</span></Link>
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Register;
