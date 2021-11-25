import React from "react";

const Card = (item) => {
  console.log(item);
  return (
    <div className="card-box" key={item.id}>
      <p>{item.id}</p>
    </div>
  );
};

export default Card;
