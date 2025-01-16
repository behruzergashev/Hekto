import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./components/Footer.css";

const firebaseConfig = {
  apiKey: "AIzaSyDXUkJeKV00IRjRIFHjP4Rt1vfwNfz0uR4",
  authDomain: "reactregistr.firebaseapp.com",
  projectId: "reactregistr",
  storageBucket: "reactregistr.appspot.com",
  messagingSenderId: "644746729272",
  appId: "1:644746729272:web:7d11dd68709dad537413cd",
  measurementId: "G-DRJBHNLGG8",
};

const app = initializeApp(firebaseConfig);
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
        console.error("Firebase Error:", error);
        setAlertMessage(`Error: ${error.message}`);
        setTimeout(() => setAlertMessage(""), 3000);
      });
  };

  return (
    <footer className="footer">
      {alertMessage && (
        <div className="alert">
          {alertMessage}
        </div>
      )}
      <div className="foodiv">
        <div className="foomain">
          <div className="fooleft">
            <div className="fooora">
              <h2>Hekto</h2>
              <form onSubmit={handleSignUp} style={{ marginBottom: "20px" }}>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{ padding: "10px", marginBottom: "10px" }}
                />
                <br />
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{ padding: "10px", marginBottom: "10px" }}
                />
                <br />
                <button type="submit" className="btncha_1" style={{ padding: "10px 20px" }}>
                  Sign Up
                </button>
              </form>
              <p>Contact Info: 17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
          </div>
          <div className="fooright">
            <div className="foo1">
              <h1>Categories</h1>
              <p>Laptops & Computers</p>
              <p>Cameras & Photography</p>
              <p>Smart Phones & Tablets</p>
              <p>Video Games & Consoles</p>
              <p>Waterproof Headphones</p>
            </div>
            <div className="foo2">
              <h1>Customer</h1>
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
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="border1">
            <FaFacebook className="i" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="border1">
            <FaTwitter className="i" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="border1">
            <FaInstagram className="i" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
