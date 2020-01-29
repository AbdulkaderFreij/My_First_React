import React, { Component } from "react";
import './Slider2.css';
// import pic1 from "/home/abdulkader/Desktop/mysecondreact/src/components/Classroom.jpg";
// import pic2 from "/home/abdulkader/Desktop/mysecondreact/src/components/Early-Childhood-Center-HDFS.jpg";
import pic3 from './Early-Childhood-Center-HDFS.jpg';

class Slider2 extends Component {
  render() {
    return (
      <>
        <section id="news">
        <div class="items">
            <div class="item">
                <h1>Kindergarten Math Activities</h1>
                <h2 id="trip-1">Use our free, fun math activities for kindergarteners to teach them some basic but
                    important math concepts!</h2>
                <img id="img" src={pic3} alt="mountain" />
            </div>
            <div class="join">
                <h1 class="must-have">Let’s Play Hopscotch</h1>
                <p class="details">Kids can learn to count numbers from 1 to 10 while playing hopscotch. They can have
                    fun while they learn with this counting activity.</p>
                <h1 class="must-have">Park the Car</h1>
                <p class="details">Kids love to play with their toys. With this math activity, you can bring in their
                    love for their toy cars.
                </p>
                <h1 class="must-have">Fish in the Bowl</h1>
                <p class="details">This is a fun counting activity where kids can fish out colorful fish from a fish
                    bowl as they learn to recognize numbers and grow more familiar with them.</p>
                <h1 class="must-have">The Number Puzzle</h1>
                <p class="details">Kids can learn to count and begin to use their problem solving skills with this easy number puzzle.</p>
            </div>
        </div>
    </section>
      </>
    );
  }
}
export default Slider2;
