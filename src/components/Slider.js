import React, { Component } from "react";
import "./Slider.css";
import pic1 from "./Classroom.jpg";
import pic2 from "./Early-Childhood-Center-HDFS.jpg";
class Slider extends Component {
  render() {
    return (
      <>
        <section class="intro">
          <div class="mission">
            <h1>Our Mission</h1>
            <p>
              Education is the backbone of a successful society. Every human
              being should have the right, privilege, and opportunity to get the
              best education possible. Unfortunately in our world, this is often
              not a reality for many impoverished people groups. Kids Я Us is a
              nonprofit educational organization located in Beirut, Lebanon. Our
              mission is to help kids everywhere grow smarter, stronger, and
              kinder. We meet children’s development needs with critical early
              education, social impact programs, and a large dose of fun!
            </p>
          </div>
          <div class="content">
            <h1>Why Kids Я Us?</h1>
            <p>
              We help parents who couldnt afford education for their children.
              We ensure children's unique needs are met and their voices are
              heard. We do whatever it takes for children — transforming their
              lives and the future we share — because we believe every child
              deserves a future.
            </p>
          </div>
          <div class="image1">
            <img src={pic1} />
            <img src={pic2} />
            <br></br>
          </div>
        </section>
      </>
    );
  }
}
export default Slider;
