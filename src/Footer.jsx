import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

import "./components/Footer.css"
const firebaseConfig = {
  apiKey: "AIzaSyDXUkJeKV00IRjRIFHjP4Rt1vfwNfz0uR4",
  authDomain: "reactregistr.firebaseapp.com",
  projectId: "reactregistr",
  storageBucket: "reactregistr.firebasestorage.app",
  messagingSenderId: "644746729272",
  appId: "1:644746729272:web:7d11dd68709dad537413cd",
  measurementId: "G-DRJBHNLGG8",
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const Footer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
    
        setAlertMessage("Registration Successful!");
        setTimeout(() => setAlertMessage(""), 3000); 
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
   
        setAlertMessage(`Error: ${error.message}`);
        setTimeout(() => setAlertMessage(""), 3000);
      });
  };

  return (
    <footer
className="footer"
    >
    <div className="foodiv">
        <div className="foomain">
            <div className="fooleft">
          <div className="fooora">
          <h2 >Hekto</h2>
      {alertMessage && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            zIndex: 1000,
          }}
        >
          {alertMessage}
        </div>
      )}
      <form onSubmit={handleSignUp} style={{ marginBottom: "20px" }}>
        <input
          type="email"
          placeholder="Enter Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required

        />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
   
          }}
        />
        <br />
        <button
          type="submit"
          className="btncha_1"
        >
          Sign Up
        </button>
      </form>
      <p >
        Contact Info: 17 Princess Road, London, Greater London NW1 8JR, UK
      </p>
            </div>
          </div>
            <div className="fooright">
           <div className="foo1">
<h1>Catagories</h1>
<p>Laptops & Computers</p>
<p>Cameras & Photography</p>
<p>Smart Phones & Tablets</p>
<p>Video Games & Consoles</p>
<p>Waterproof Headphones</p>
           </div>
           <div className="foo2">
<h1>Customer </h1>
<p>My Account</p>
<p>Discount</p>
<p>Returns</p>
<p>Orders History</p>
<p>Order Tracking</p>
           </div>
           <div className="foo3">
<h1>Pages</h1>

<p>Browse the Shop</p>
<p>Category</p>
<p>Pre-Built Pages</p>
<p>Visual Composer Elements</p>
<p>WooCommerce Pages</p>
           </div>
            </div>
        </div>
    </div>
    <div className="past">
       <div className="past1">
        <p>©Webecy - All Rights Reserved</p>
       </div>
       <div className="past2">
        <div className="border1">

        </div>
        <div className="border1">

</div>
<div className="border1">

</div>
       </div>
    </div>
    </footer>
  );
};

export default Footer;
