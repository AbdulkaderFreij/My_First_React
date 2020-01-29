import React, { Component } from "react";
import './Slider3.css'
class Slider3 extends Component {
  render() {
    return (
      <>
        <div class="container">
  <form id="contact" method="post">
    <h3>Quick Contact</h3>
    <h4>Contact us today, and get reply with in 24 hours!</h4>
    <fieldset>
      <input placeholder="Your name" type="text"  required autofocus/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" required/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Phone Number" type="tel"  required/>
    </fieldset>
    <fieldset>
      <textarea placeholder="Type your Message Here...." required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit">Submit</button>
    </fieldset>
  </form>
</div>
      </>
    );
  }
}
export default Slider3;