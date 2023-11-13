import "./App.css";
import Header from "./components/Header";
import DeveloperCard from "./components/DeveloperCard";
import data from "./data/data.json";
import { useEffect } from "react";
import { setData } from "./store/allDataSlice";
import { useDispatch, useSelector } from "react-redux";
import Filter from "./components/Filter";
import { Routes, Route, Router } from "react-router-dom";
import CardDetails from "./components/CardDetails";

function App() {
  const dispatch = useDispatch();
  const changeMode = useSelector((store) => store.mode.Boolean);

  useEffect(() => {
    dispatch(setData(data));
  }, []);

  const HomePage = () => (
    <>
      <Filter />
      <DeveloperCard />
    </>
  );

  return (
    <div
      className={` ${
        changeMode ? "bg-[#121721] duration-500 " : "bg-[#f5f6f8] duration-500 "
      }  min-h-screen`}
    >
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<CardDetails />} />
      </Routes>
    </div>
  );
}

export default App;
