import "./styles.css";
import Data from "./data";
import { useState } from "react";
import StoreInfo from "./components/commons/StoreInfo";
import NorthStores from "./components/stores/NorthStores";
import MiddleStores from "./components/stores/MiddleStores";
import SouthStores from "./components/stores/SouthStores";
import EastStores from "./components/stores/EastStores";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// exemple
// https://www.uniqlo.com/tw/stores/

const App = () => {
  return (
    <div>
      <NorthStores />
      <MiddleStores />
      <SouthStores />
      <EastStores />
    </div>
  );
};
export default App;
