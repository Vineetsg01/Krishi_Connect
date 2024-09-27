import React, {useState} from "react";
import "./contact.scss";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import EmailIcon from "@mui/icons-material/Email";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    // react toastify
    toast.success('Thank You, We have received your message!', {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    setName("");
    setEmail("");
    setMessage("");
  }

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");

  return (
    <div className="contact">
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

      <div className="bg-image">
        <h1 className="text">Contact Us</h1>
      </div>
      <div className="address-map">
        <div className="address">
          <h2 className="head">Contact Us</h2>
          <p className="contact-info">
            If you would like to know more about our policies, you can consult
            our Terms and Conditions. You will also be able to follow your order
            (tracking number will be provided in an e-mail after ordering). You
            wish to return some items?
          </p>
          <div>
            <div className="box">
              <div className="icon">
                <RoomOutlinedIcon style={{ width: "40px", height: "40px" }} />
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>B-519,Gomti Nagar, Lucknow, Uttar Pradesh, India</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <PhoneAndroidIcon style={{ width: "40px", height: "40px" }} />
              </div>
              <div className="text">
                <h3>Mobile No.</h3>
                <p>9789567890</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <AccessAlarmIcon style={{ width: "40px", height: "40px" }} />
              </div>
              <div className="text">
                <h3>Open Hours</h3>
                <p>
                  Monday to Friday 09:30 - 17:30 <br />
                  Saturday & Sunday 10:00 - 15:00
                </p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <EmailIcon style={{ width: "40px", height: "40px" }} />
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>krishiconnect@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56961.30882833135!2d80.96261307829344!3d26.837350384751815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd49fc60a843%3A0x92fc72e19b623f6a!2sGomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1716140242360!5m2!1sen!2sin"
            width="800"
            height="550"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="contact-form">
        <h2>Contact Form</h2>
        <div className="line"></div>
        <form action="" onSubmit={handleSubmit}>
          <div className="input">
            <div className="name">
              <label htmlFor="">Name</label>
              <div>
                <input value={name} type="text" placeholder="Enter Name" onChange={e => setName(e.target.value)} required />
              </div>
            </div>
            <div className="email">
              <label htmlFor="">Email</label>
              <div>
                <input value={email} type="text" placeholder="Enter Email" onChange={e => setEmail(e.target.value)} required />
              </div>
            </div>
          </div>
          <div className="text-area">
            <label htmlFor="">Your Message</label>
            <textarea value={message} placeholder="Enter Your Message" onChange={e => setMessage(e.target.value)} required/>
          </div>
          <div className="button">
            <button type="submit" className="btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;