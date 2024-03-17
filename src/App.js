import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box4 from "./components/Box4";


export default function App() {
  return (
    <div className="App">
      <Header/>
      <Box1/>
      <Box2/>
      <Box4/>
      <Footer/>
    </div>
  );
}

