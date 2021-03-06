import React from "react";
import santaCruzImg from "../images/santacruz.png";

const Main = () => {
  return (
    <>
      <div className="row main-banner">
        <div className="col-12">
          <img
            src={santaCruzImg}
            alt="Image of Its beach in Santa Cruz California"
          />
        </div>
      </div>
      <div className="row main-text">
        <p>
          Hello, my name is Cody Boaz. I currently work as a Front End Developer
          in Santa Cruz, California. I have a passion for building web
          applications and learning new technologies. I am a graduate of
          California State Monterey Bay where I studied Computer Science with a
          focus in Software Engineering. I hope you enjoy my portfolio!
        </p>
      </div>
    </>
  );
};

export default Main;
