import "./App.css";
import Header from "./components/Header";
import DeveloperCard from "./components/DeveloperCard";
import data from "./data/data.json";

import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { dataActions } from "./store/allDataSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataActions.setData(data));
  }, []);
  return (
    <div className="bg-[#121721]">
      <Header />
      <DeveloperCard />
    </div>
  );
}

export default App;
