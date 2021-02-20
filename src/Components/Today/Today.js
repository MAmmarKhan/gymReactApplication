import React from 'react';
import './Today.css';
import Gallery4 from '../../images/gallery4.jpg';

export default function Today() {
  return (
    <section className="start-today">
      <div className="container">
        <div className="content">
          <div className="box text wow slideInLeft">
            <h2>Start Your Training Today</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
            <a href="" className="btn">Start Now</a>
          </div>
          <div className="box img wow slideInRight">
            <img src={Gallery4} alt="start today" />
          </div>
        </div>
      </div>
    </section>
  )
}
