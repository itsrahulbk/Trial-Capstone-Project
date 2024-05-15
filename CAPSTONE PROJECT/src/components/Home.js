import React from 'react';
import Hero from './Hero';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Hero />
      <section className="content">
        <article className="card">
          <h3>Our New Menu</h3>
          <img src="/images/menu.jpg" alt="New Menu" />
          <p>Discover the latest additions to our menu, featuring a variety of delicious dishes that cater to all taste buds. From savory appetizers to delectable desserts, our new menu is sure to delight. Visit us and explore the culinary creations that our chefs have meticulously prepared.</p>
          <a href="#menu">See our new menu</a>
        </article>
        <article className="card">
          <h3>Book a table</h3>
          <img src="/images/table.jpg" alt="Book a table" />
          <p>Planning a special dinner or a casual lunch? Book a table at Little Lemon and enjoy a memorable dining experience. Whether it's a family gathering or a night out with friends, our cozy ambiance and friendly staff will make sure you have a wonderful time.</p>
          <a href="#booking">Book your table now</a>
        </article>
        <article className="card">
          <h3>Opening Hours</h3>
          <img src="/images/hours.jpg" alt="Opening Hours" />
          <p>Check out our opening hours and plan your visit to Little Lemon. We're open throughout the week, ready to serve you the best dishes. Come by during our operating hours and enjoy a fantastic meal in a warm and welcoming atmosphere.</p>
          <ul>
            <li>Mon - Fri: 2pm - 10pm</li>
            <li>Sat: 2pm - 11pm</li>
            <li>Sun: 2pm - 9pm</li>
          </ul>
        </article>
      </section>
    </div>
  );
};

export default Home;
