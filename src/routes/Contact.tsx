import React from "react";
import ReactGA from "react-ga";
const Contact = () => {
  const handleClick = () => {
    fetch("https://jsonplaceholder.typicode.com/tods/1")
      .then((response) => {
        if (!response.ok) throw response;
        return response.json();
      })
      .then((json) => console.log(json))
      .catch((error) => {
        console.log(error);
        ReactGA.exception({
          description: "An error occured while api fetch",
          fatal: true,
        });
      });
    ReactGA.event({
      category: "Button Clicked",
      action: "Do something clicked",
      label: `Do Something Clicked in contact page`,
      metric1: 1,
    });
  };

  return (
    <div>
      Contact <button onClick={handleClick}>DO SOMETHING</button>
    </div>
  );
};

export default Contact;
