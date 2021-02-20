import React from 'react';
import './Gallery.css';
import Gallery1 from '../../images/gallery1.jpg';
import Gallery2 from '../../images/gallery2.jpg';
import Gallery3 from '../../images/gallery3.jpg';
import Gallery4 from '../../images/gallery4.jpg';

export default function Gallery() {
  return (
    <section class="gallery" id="gallery">
      <h2>Workout Gallery</h2>
      <div class="content">
        <div class="box wow slideInLeft">
          <img src={Gallery1} alt="gallery" />
        </div>
        <div class="box wow slideInRight">
          <img src={Gallery2} alt="gallery" />
        </div>
        <div class="box wow slideInLeft">
          <img src={Gallery3} alt="gallery" />
        </div>
        <div class="box wow slideInRight">
          <img src={Gallery4} alt="gallery" />
        </div>
      </div>
    </section>
  )
}
