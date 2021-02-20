import React from 'react'
// import { BrowserRouter as Link } from "react-router-dom";

export default function Nav({props}) {
  return (
    <div id="nav" className={props}>
      <ul>
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Services</a></li>
        <li><a>Classes</a></li>
        <li><a>Schedule</a></li>
        <li><a>Price</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
  )
}
