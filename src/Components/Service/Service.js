import React,{ useState } from 'react';
import './Service.css';
export default function Service() {
  const [visiblity1, setvisiblity1] = useState('accordian-container active');
  const [visiblity2, setvisiblity2] = useState('accordian-container');
  const [visiblity3, setvisiblity3] = useState('accordian-container');
  const [visiblity4, setvisiblity4] = useState('accordian-container');

  const setStyle = (divNum) => {
      if (divNum === 1) {
        setvisiblity1('accordian-container active');
        setvisiblity2('accordian-container');
        setvisiblity3('accordian-container');
        setvisiblity4('accordian-container');
      }
      if (divNum === 2) {
        setvisiblity2('accordian-container active');
        setvisiblity1('accordian-container');
        setvisiblity3('accordian-container');
        setvisiblity4('accordian-container');
      }
      if (divNum === 3) {
        setvisiblity3('accordian-container active');
        setvisiblity1('accordian-container');
        setvisiblity2('accordian-container');
        setvisiblity4('accordian-container');
      }
      if (divNum === 4) {
        setvisiblity4('accordian-container active');
        setvisiblity1('accordian-container');
        setvisiblity2('accordian-container');
        setvisiblity3('accordian-container');
      }
      
  };
  const Cards = [
    {
      id: 1,
      class_name: visiblity1,
      Heading: 'Cardiovascular Equipment',
      Body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'
    },
    {
      id: 2,
      class_name: visiblity2,
      Heading: 'Strength Training Equipment',
      Body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'
    },
    {
      id: 3,
      class_name: visiblity3,
      Heading: 'Group Fitness Class',
      Body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'
    },
    {
      id: 4,
      class_name: visiblity4,
      Heading: 'Other Services',
      Body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries'
    },    
];
  return (
    <section className="service">
      <div className="container">
        <div className="content">
          <div className="text">
            <h2>Services</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            <a href="#" className="btn">Start Now</a>
          </div>
            <div className="accordian box wow slideInRight">
              {Cards.map((card) => (
                <div key={card.id} className={card.class_name} onClick={() => setStyle(card.id)}>
 		 	  	    	<div className="head">
 		 	  	    		<h4>{card.Heading}</h4>
 		 	  	    		<span className="fa fa-angle-down"></span>
 		 	  	    	</div>
 		 	  	    	<div className="body">
 		 	  	    		<p>{card.Body}</p>
 		 	  	    	</div>
 		 	  	    </div>
              ))}              
            </div>
        </div>
      </div>
    </section>
  )
}
