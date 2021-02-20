import React from 'react';
import './Price.css';
import Price1 from '../../images/price1.jpg';
import Price2 from '../../images/price2.jpg';
import Price3 from '../../images/price3.jpg';

export default function Price() {
  return (
    <section className="price-package" id="price">
      <div className="container">
        <h2>Choose Your Package</h2>
        <p className="title-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
        <div className="content">
          <div className="box wow bounceInUp">
            <div className="inner">
              <div className="price-tag">
                $59/Month
                     </div>
              <div className="img">
                <img src={Price1} alt="price" />
              </div>
              <div className="text">
                <h3>Body Building Training</h3>
                <p>Get Free WiFi</p>
                <p>Month to Month</p>
                <p>No Time Restrictions</p>
                <p>Gym and Cardio</p>
                <p>Service Locker Rooms</p>
                <a href="" className="btn">Join Now</a>
              </div>
            </div>
          </div>
          <div className="box wow bounceInUp" data-wow-delay="0.2s">
            <div className="inner">
              <div className="price-tag">
                $69/Month
                     </div>
              <div className="img">
                <img src={Price2} alt="price" />
              </div>
              <div className="text">
                <h3>Body Building Training</h3>
                <p>Get Free WiFi</p>
                <p>Month to Month</p>
                <p>No Time Restrictions</p>
                <p>Gym and Cardio</p>
                <p>Service Locker Rooms</p>
                <a href="" className="btn">Join Now</a>
              </div>
            </div>
          </div>
          <div className="box wow bounceInUp" data-wow-delay="0.4s">
            <div className="inner">
              <div className="price-tag">
                $99/Month
                     </div>
              <div className="img">
                <img src={Price3} alt="price" />
              </div>
              <div className="text">
                <h3>Body Building Training</h3>
                <p>Get Free WiFi</p>
                <p>Month to Month</p>
                <p>No Time Restrictions</p>
                <p>Gym and Cardio</p>
                <p>Service Locker Rooms</p>
                <a href="" className="btn">Join Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
