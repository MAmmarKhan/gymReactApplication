import React from 'react';
import './About.css';
import About1 from "../../images/about1.jpg";
import About2 from "../../images/about2.jpg";
import About3 from "../../images/about3.jpg";

export default function About() {
  return (
    <section className="about" id="about"> 
      <div className="container">
        <div className="content">
          <div className="box">
            <div className="inner">
              <div className="img">
                <img src={About1} alt="about"/>                
              </div>
              <div className="text"> 
                <h4>Best Training</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="inner">
              <div className="img">
                <img src={About2} alt="about"/>
              </div>
              <div className="text"> 
                <h4>Free Consultation</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="inner">
              <div className="img">
                <img src={About3} alt="about"/>
              </div>
              <div className="text"> 
                <h4>Build Perfect Body</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
