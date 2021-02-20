import React from 'react';
import './Class.css';
import Class1 from '../../images/class1.jpg';
import Class2 from '../../images/class2.png';

export default function Class() {
  return (
    <section className="classes" id="classes">
      <div className="container">
        <div className="content">
          <div className="box img wow slideInLeft">
            <img src={Class2} alt="classes" />
          </div>
          <div className="box text wow slideInRight">
            <h2>Our Classes</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
            <div className="class-items">
              <div className="item wow bounceInUp">
                <div className="item-img">
                  <img src={Class1} alt="classes" />
                  <div className="price">
                    $99
                     	 </div>
                </div>
                <div className="item-text">
                  <h4>Stretching Training</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <a href="">Get Details</a>
                </div>
              </div>
              <div className="item wow bounceInUp">
                <div className="item-text">
                  <h4>Stretching Training</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <a href="">Get Details</a>
                </div>
                <div className="item-img">
                  <img src={Class1} alt="classes" />
                  <div class="price">
                    $99
                     	 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
