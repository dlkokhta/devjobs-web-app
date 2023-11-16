import { useDispatch } from "react-redux";
import { setInput } from "../store/inputSlice";
import { setEntireInput } from "../store/entireInputSlice";
import { useSelector } from "react-redux";
import { useState } from "react";
import { setFilteredCountry } from "../store/filteredCountrySlice";
import { setFullTime } from "../store/fullTimeSlice";

const FilterBar = () => {
  const changeMode = useSelector((store) => store.mode.Boolean);
  const inputDispatch = useDispatch();
  const input = useSelector((store) => store.input.text);
  const entireInputDispatch = useDispatch();

  const filteredCountryDispatch = useDispatch();
  const dispatch = useDispatch();

  const [locationEntireInput, setLocationEntireInput] = useState("");
  const [checkBoxFullTime, setCheckBoxFullTime] = useState(false);

  const inputHandler = (event) => {
    inputDispatch(setInput(event.target.value));
  };

  const searchClickChangehandler = () => {
    entireInputDispatch(setEntireInput(input));
  };

  const locationInputChangeHandler = (event) => {
    setLocationEntireInput(event.target.value);
  };

  const searchButtonClickHandler = () => {
    filteredCountryDispatch(setFilteredCountry(locationEntireInput));
    dispatch(setFullTime(!checkBoxFullTime));
  };

  const checkBoxClickHandler = () => {
    setCheckBoxFullTime(!checkBoxFullTime);
  };

  return (
    <div className="hidden flex-row left-0 right-0 px-10 absolute top-24  w-full  lg:flex xl:px-[165px]">
      {/**filter by title */}
      <div
        className={`${
          changeMode ? "bg-[#19202D]" : "bg-white"
        } flex flex-row gap-4 items-center  pl-4  w-full rounded-l-md `}
      >
        <svg
          onClick={searchClickChangehandler}
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
            fill="#5964E0"
            fillRule="nonzero"
          />
        </svg>

        <input
          onChange={inputHandler}
          value={input}
          className="text-white outline-none bg-transparent w-full font-Kumbh text-base font-normal"
          placeholder="Filter by title..."
        />
      </div>
      {/**filter by location */}
      <div
        className={`flex py-7 ${
          changeMode ? "bg-[#19202D]" : "bg-white "
        }  w-full `}
      >
        <div>
          <svg width="17" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z"
              fill="#5964E0"
              fillRule="nonzero"
            />
          </svg>
        </div>
        {/**location input */}
        <input
          onChange={locationInputChangeHandler}
          className="text-white ml-4 bg-transparent  w-full font-Kumbh text-base font-normal outline-none"
          placeholder="Filter by location..."
        />
      </div>

      {/**filter by full time */}

      <div
        className={`py-4 pr-4 pl-5 flex flex-row gap-7 items-center ${
          changeMode ? "bg-[#19202D]" : "bg-[#ffffff] "
        } rounded-r-md`}
      >
        {/**checkBox */}
        <div className="flex gap-3 ">
          <input
            className="bg-black"
            onClick={checkBoxClickHandler}
            style={{ width: "20px", height: "20px" }}
            type="checkbox"
            checked={checkBoxFullTime}
          />

          <div
            className={`${
              changeMode ? "text-white" : "text-black"
            } whitespace-nowrap `}
          >
            <div className="xl:hidden lg:block ">Full Time</div>
            <div className="hidden xl:block">Full Time Only</div>
          </div>
        </div>
        {/**button */}
        <div
          onClick={searchButtonClickHandler}
          className="bg-[#5964E0] py-4 px-4 text-white  flex items-center justify-center rounded-md xl:px-9"
        >
          Search
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
