import React from "react";

const Hoc = (Prospect) => {
  console.log(Prospect); //component
  const color = ["red", "blue", "green", "orange"];
  const randomColor = color[Math.floor(Math.random() * color.length)];

  return (props) => {
    console.log(props);
    return (
      <div style={{ color: randomColor }}>
        <Prospect />
      </div>
    );
  };
};

export default Hoc;
