import React from 'react';
import Card from './Card';
import './Content.css';

const Content = () => {
  return (
    <section className="content">
      <Card title="Our New Menu" image="/images/menu.jpg">
        Discover the latest additions to our menu, featuring a variety of delicious dishes that cater to all taste buds. From savory appetizers to delectable desserts, our new menu is sure to delight. Visit us and explore the culinary creations that our chefs have meticulously prepared.
        <a href="#menu">See our new menu</a>
      </Card>
      <Card title="Book a table" image="/images/table.jpg">
        Planning a special dinner or a casual lunch? Book a table at Little Lemon and enjoy a memorable dining experience. Whether it's a family gathering or a night out with friends, our cozy ambiance and friendly staff will make sure you have a wonderful time.
        <a href="#book">Book your table now</a>
      </Card>
      <Card title="Opening Hours" image="/images/hours.jpg">
        Check out our opening hours and plan your visit to Little Lemon. We're open throughout the week, ready to serve you the best dishes. Come by during our operating hours and enjoy a fantastic meal in a warm and welcoming atmosphere.
        <ul>
          <li>Mon - Fri: 2pm - 10pm</li>
          <li>Sat: 2pm - 11pm</li>
          <li>Sun: 2pm - 9pm</li>
        </ul>
      </Card>
    </section>
  );
};

export default Content;
