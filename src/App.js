import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import NavbarComp from "./Component/HomeComp/NavbarComp";
import HomeComp from "./Component/HomeComp/HomeComp";
import Apple from "./Component/DaftarMenu/Apple";
import Lenovo from "./Component/DaftarMenu/Lenovo";
import Asus from "./Component/DaftarMenu/Asus";
import FooterComp from "./Component/HomeComp/FooterComp";
import FormBeli from "./Component/HomeComp/FormBeli";

function App() {
  return (
    <BrowserRouter>
      <NavbarComp />
      <Switch>
        <Route exact path="/home" component={HomeComp} />
        <Route exact path="/apple" component={Apple} />
        <Route exact path="/lenovo" component={Lenovo} />
        <Route exact path="/asus" component={Asus} />
        <Route exact path="/beli" component={FormBeli} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
