import React from 'react';
import './Home.css';
export default function Home() {
  return (
    <section className="home">
      <div className="container">
        <h1>It's <span>gym</span> time. Let's go</h1>
        <h1>We are ready to <span>fit</span> you.</h1>
      </div>
      <div className="go-down">
      <span className="fa fa-angle-down"></span>
      </div>
      <div className="go-down">
        <div className="fa"></div>
      </div>
    </section>
  )
}
