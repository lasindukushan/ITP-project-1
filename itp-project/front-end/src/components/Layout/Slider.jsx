import React from "react";
import M from "materialize-css";

const Slider = () => {
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".slider");
    M.Slider.init(elems, {
      indicators: false,
      height: 600,
      transition: 500,
      interval: 6000,
    });
  });

  return (
    <div class="slider">
      <ul class="slides">
        <li>
          <img src="https://raw.githubusercontent.com/Shihara-Dilshan/ITP-project/master/itp-project/front-end/public/Assets/Images/Front-image-2.jpg" />
          <div class="caption center-align">
            <h3>Jewellery</h3>
            <h5 class="light grey-text text-lighten-3">
              Find your perfect jewellery piece to mark your special moment.
            </h5>
          </div>
        </li>
        <li>
          <img src="https://raw.githubusercontent.com/Shihara-Dilshan/ITP-project/master/itp-project/front-end/public/Assets/Images/Front-image-5.jpg" />
          <div class="caption left-align">
            <h3>Rings that bind time</h3>
            <h5 class="light grey-text text-lighten-3">
              Here's our small slogan.
            </h5>
          </div>
        </li>
        <li>
          <img src="https://raw.githubusercontent.com/Shihara-Dilshan/ITP-project/master/itp-project/front-end/public/Assets/Images/Front-image-3.jpg" />
          <div class="caption right-align">
            <h3>Clasped with class</h3>
            <h5 class="light grey-text text-lighten-3">
              Stylish bracelets that put you in a class of your own.
            </h5>
          </div>
        </li>
        <li>
          <img src="https://raw.githubusercontent.com/Shihara-Dilshan/ITP-project/master/itp-project/front-end/public/Assets/Images/Front-image-6.jpg" />
          <div class="caption center-align">
            <h3>Hanging art</h3>
            <h5 class="light grey-text text-lighten-3">
              Pendants that are modern art or spiritual symbols, includes a
              range of Dhammachackras and Crosses.
            </h5>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Slider;