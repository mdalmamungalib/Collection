import React, { useState } from "react";
import "./AnimetedButton.css";

const AnimatedButton = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setClicked(true);

    setTimeout(() => setClicked(false), 3500);
  };

  return (
    <div className="Body">
      <a
        className={`btn ${clicked ? "btn--clicked" : ""}`}
        href="#"
        title="Animated Button"
        onClick={handleClick}
      >
        Button
      </a>
      <span className={`color color--blue ${clicked ? "expanded" : ""}`} data-value="1"></span>
      <span className={`color color--orange ${clicked ? "expanded" : ""}`} data-value="1"></span>
      <span className={`color color--green ${clicked ? "expanded" : ""}`} data-value="1"></span>
      <span className={`color color--white ${clicked ? "expanded" : ""}`} data-value="1"></span>
    </div>
  );
};

export default AnimatedButton;
