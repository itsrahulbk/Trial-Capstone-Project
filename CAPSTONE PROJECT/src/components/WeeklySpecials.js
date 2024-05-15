import React from 'react';
import './WeeklySpecials.css';

const WeeklySpecials = () => {
  return (
    <section className="weekly-specials">
      <h2>This Week's Specials!</h2>
      <div className="specials-grid">
        <div className="special-item">
          <img src="/images/greek-salad.jpg" alt="Greek Salad" />
          <h3>Greek Salad</h3>
          <p>The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
          <button>Order Now</button>
        </div>
        <div className="special-item">
          <img src="/images/bruschetta.jpg" alt="Bruschetta" />
          <h3>Bruschetta</h3>
          <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
          <button>Order Now</button>
        </div>
        <div className="special-item">
          <img src="/images/lemon-dessert.jpg" alt="Lemon Dessert" />
          <h3>Lemon Dessert</h3>
          <p>This comes straight from grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.</p>
          <button>Order Now</button>
        </div>
      </div>
    </section>
  );
};

export default WeeklySpecials;
