
import React from "react";
import NavBar from "./Components/Navbar/NavBar";
import "./App.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {originals,action,advanture,drama,animation,comedy}from './Urls'

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url={originals}title='Netflix Orginals'/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={advanture} title='Advanture' isSmall/>
      <RowPost url={animation} title='Animation' isSmall/>
      <RowPost url={comedy} title='Comedy' isSmall/>
      <RowPost url={drama} title='Drama' isSmall/>
    </div>
  );
}

export default App;
