import React from "react";
const CardContext = React.createContext(null);

const useCardContext = () => {
  const context = React.useContext(CardContext);
  return context;
};

export { useCardContext, CardContext };
