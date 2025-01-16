import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import orqarasm from '../assets/orqaimg.png';
import Footer from '../Footer';
import axios from 'axios';

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = document.querySelector('.input-name').value;
    const email = document.querySelector('.input-email').value;
    const subject = document.querySelector('.input-subject').value;
    const message = document.querySelector('.input-message').value;


    const botToken = '8031668820:AAGLOeAH7qCAUQE3HguFi5viy0Twt2maEJU';
    const chatId = '5574222139'; 

    const text = `New Contact Form Submission:\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;

    try {

      const response = await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: text,
      });

      if (response.status === 200) {
 
      } else {

      }
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <div>
      <nav className="breadcrumb">
        <h1 className="title">Contact Us</h1>
        <ul className="breadcrumb-list">
          <li><Link to="/">Home</Link></li>
          <li className="breadcrumb-separator">/</li>
          <li><Link to="/pages">Pages</Link></li>
          <li className="breadcrumb-separator">/</li>
          <li className="breadcrumb-active">Contact Us</li>
        </ul>
      </nav>

      <div className="headercontact">
        <div className="headermain">
          <div className="mainleft">
            <h1>Information About us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est.</p>
            <div className="ta">
              <div className="tak"></div>
              <div className="tak2"></div>
              <div className="tak3"></div>
            </div>
          </div>
          <div className="mainright">
            <h1>Contact Way</h1>
            <div className="kokqizil">
              <div className="kok">
                <div className="kokdiv"></div>
                <div className='plar'>
                  <p>Tel: 877-67-88-99</p>
                  <p>E-Mail: shop@store.com</p>
                </div>
              </div>
              <div className="qizil">
                <div className="qizildiv"></div>
                <div className='plar'>
                  <p>Support Forum</p>
                  <p>For over 24hr</p>
                </div>
              </div>
            </div>
            <div className="sariqyashil">
              <div className="sariq">
                <div className="sariqdiv"></div>
                <div className='plar'>
                  <p>20 Margaret st, London</p>
                  <p>Great Britain, 3NM98-LK</p>
                </div>
              </div>
              <div className="yashil">
                <div className="yashildiv"></div>
                <div className='plar'>
                  <p>Free standard shipping</p>
                  <p>on all orders.</p>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header2main">
        <div className="main2">
          <div className="left2">
            <h1>Get In Touch</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor.</p>
            <form className="inoutlar" onSubmit={handleSubmit}>
              <div className="sendt">
                <input type="text" className="input-name" placeholder="Your Name" required />
                <input type="email" className="input-email" placeholder="Your Email" required />
              </div>
              <input type="text" className="input-subject" placeholder="Subject" required />
              <textarea className="input-message" placeholder="Type Your Message" required></textarea>
              <button type="submit" className="btn-send">Send Mail</button>
            </form>
          </div>
          <div className="mainright">
            <img src={orqarasm} alt="" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
