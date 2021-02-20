import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="content">
          <div className="box form wow slideInLeft">
            <form>
              <input type="text" placeholder="Enter Name" />
              <input type="text" placeholder="Enter Email" />
              <input type="text" placeholder="Enter Mobile" />
              <textarea placeholder="Enter Message"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
          <div className="box text wow slideInRight">
            <h2>Get Connected with Gym</h2>
            <p className="title-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <div className="info">
              <ul>
                <li><span className="fa fa-map-marker"></span> Gali no 2, House no 11, Karachi</li>
                <li><span className="fa fa-phone"></span> +92 3121135555 </li>
                <li><span className="fa fa-envelope"></span> info@bodyimagegym.com</li>
              </ul>
            </div>
            <div className="social">
              <a href=""><span className="fa fa-facebook"></span></a>
              <a href=""><span className="fa fa-linkedin"></span></a>
              <a href=""><span className="fa fa-skype"></span></a>
              <a href=""><span className="fa fa-youtube-play"></span></a>
            </div>

            <div className="copy">
              PowerBy &copy; The WebShala
                  </div>
          </div>
        </div>
      </div>
    </section>
  )
}
