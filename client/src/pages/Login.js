import React,{useContext,useState} from 'react';
import './register.scss';
import img from '../assets/login.png';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserContext from '../context/UserContext';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const context = useContext(UserContext);
  const { setUser, setProgress } = context;


  const handleLogin = async (e) => {
    e.preventDefault();
    setProgress(10);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username,
        password
      });
      // console.log(res.data);
      setProgress(70);
      if (res.data.success) {
        console.log("Login successfull");
        setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        localStorage.setItem("accessToken", res.data.accessToken);
      }
    } catch (err) {
      console.log(err);

      // react toast
      toast.error('Login with correct credentials!', {
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
        <img className='plant' src="https://demos.themeselection.com/materio-mui-nextjs-admin-template/demo-1/images/illustrations/objects/tree-2.png" alt="far-img" />

      </div>

      <div className="right">

        <div className="form-container">
          <span className="head-login">
            Welcome to KrishiConnect!👋🏻
          </span>
          <span className='head2-login'>
            Make your app management easy and fun!
          </span>

          <form className="myform-login" onSubmit={handleLogin}>
            <TextField className='inp-field' id="outlined-basic" label="Username" variant="outlined" onChange={(e) => setUsername(e.target.value)} required />
            <TextField type='password' className='inp-field' id="outlined-basic" label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} required />

            <Button variant="contained" type='submit'>
              Login
            </Button>
          </form>

          <div className="text">
            <p >New on our platform?
              <Link className='link' to='/register'><span> Create an account</span> </ Link>
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Login;