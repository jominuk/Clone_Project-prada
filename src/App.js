import React, { useEffect, useState } from "react";
import Router from "./Shared/Router";
import { useDispatch } from "react-redux";
import "./App.css";
import { getCookie } from "./Shared/cookie";
import { loginCheck } from "./Redux/modules/loginSlice";
import setToken from "./Pattern/setToken";

function App() {
  const dispatch = useDispatch();
  const accessToken = getCookie("token");

  if (accessToken) {
    setToken(accessToken);
    dispatch(loginCheck(true));
  }
  // useEffect(() => {
  //   console.log(authenticate);
  // }, [authenticate]);

  return <Router />;
}

export default App;
