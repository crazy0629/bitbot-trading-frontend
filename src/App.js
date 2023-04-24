import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import { HomeContainer, BotWrapper } from "./components/Home/home.style";
import ScrollToTop from "./hooks/scroltop";

import Header from "./layout/Header";

import Home from "./components/Home";
import Exchange from "./components/Exchange";
import CreateExchange from "./components/Exchange/CreateExchange";
import GridTrading from "./components/GridTrading";
import MyBot from "./components/MyBot";
import AddBot from "./components/MyBot/AddBot";
import Marketplace from "./components/Marketplace";
import Plans from "./components/Plans";
import SideWraper from "./components/Home/SideWrapper";
import BotList from "./components/Home/BotList";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Header />
          <HomeContainer>
            <BotWrapper>
              <SideWraper />
              <BotList />
            </BotWrapper>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={<SignIn />}></Route>
              <Route path="/register" element={<SignUp />}></Route>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/exchange" element={<Exchange />}></Route>
              <Route
                path="/createmyexchange"
                element={<CreateExchange />}
              ></Route>
              <Route path="/addnewbot" element={<AddBot />}></Route>
              <Route path="/grid-trading" element={<GridTrading />}></Route>
              <Route path="/my-bots" element={<MyBot />}></Route>
              <Route path="/marketplace" element={<Marketplace />}></Route>
              <Route path="/plan" element={<Plans />}></Route>
              <Route path="*" element={<Link to="/" />}></Route>
            </Routes>
          </HomeContainer>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
