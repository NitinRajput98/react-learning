import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const Title = () => (
  <h1 className="head" tabIndex="5">
    This is a heading created using JSX.
  </h1>
);

// Functional Component
const HeadingComponent = () => {
  return (
    <div id="container">
      {Title()}
      <Title />
      <Title></Title>
      <h1 className="heading">This is React Functional Component.</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
