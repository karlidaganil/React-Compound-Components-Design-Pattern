import React from "react";
import { useCardContext } from "./useCardContext";

const Card = ({ children }) => {
  return <div>{children}</div>;
};
const Title = () => {
  const context = useCardContext();
  return <h1>{context.name}</h1>;
};
const Body = () => {
  const context = useCardContext();
  return (
    <>
      <h3> {context.species} </h3>
      <img src={context.image} alt={context.name} />
    </>
  );
};

Card.Title = Title;
Card.Body = Body;

export default Card;
