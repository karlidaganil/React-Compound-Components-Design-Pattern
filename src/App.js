import "./App.css";
import Card from "./Card";
import React, { useState, useEffect } from "react";
import { CardContext } from "./useCardContext";
import axios from "axios";

const App = () => {
  const [initialState, setInitialState] = useState({});
  const fetchData = React.useCallback(() => {
    axios.get("https://rickandmortyapi.com/api/character/1").then((res) => {
      setInitialState(res.data);
    });
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="App">
      <CardContext.Provider value={initialState}>
        <Card>
          <Card.Title></Card.Title>
          <Card.Body></Card.Body>
        </Card>
      </CardContext.Provider>
    </div>
  );
};

export default App;
