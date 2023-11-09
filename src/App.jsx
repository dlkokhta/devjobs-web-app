import "./App.css";
import Header from "./components/Header";
import DeveloperCard from "./components/DeveloperCard";
import data from "./data/data.json";
import { useEffect } from "react";
import { setData } from "./store/allDataSlice";
import { useDispatch, useSelector } from "react-redux";
import Filter from "./components/Filter";

function App() {
  const dispatch = useDispatch();
  const changeMode = useSelector((store) => store.mode.Boolean);

  useEffect(() => {
    dispatch(setData(data));
  }, []);

  return (
    <div className={` ${changeMode ? "bg-[#121721]" : "bg-[#f5f6f8]"} `}>
      <Header />

      <Filter />

      <DeveloperCard />
    </div>
  );
}

export default App;
