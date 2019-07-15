import React, { useState, useEffect } from "react";
import "./App.css";
import Title from "./Components/Title";
import axios from "axios";
import styled from "styled-components";

function App() {
  const [nasa, setNasa] = useState([]);

  const fetchPics = () => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(nasa => {
        console.log(nasa);
        setNasa(nasa.data);
      })
      .catch(err => console.log("OUCH :("));
  };

  useEffect(() => {
    fetchPics();
  }, []);

  return (
    <Container className="App">
      <Title />
      <div className="Pic">
        <img src={nasa.hdurl} width={"480px"} />
      </div>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
`;

export default App;

