import React from "react";
import classes from "./MealsSummary.module.css";
const MealsSummary = () => {
  return (
    <section className={classes.summary} >
      <h1>Delecious food, Delivered to you</h1>
      <p>
        Choose our favourite meals from our broad selecton of availabe meals,
        and enjoy your deletious lunch and dinner at home
      </p>
      <p>
        our food is made up with high-quality ingredients, just-in-time and and
        of course by experienced chef
      </p>
    </section>
  );
};

export default MealsSummary;
