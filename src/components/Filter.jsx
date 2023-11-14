import { useDispatch } from "react-redux";
import { setInput } from "../store/inputSlice";
import { setEntireInput } from "../store/entireInputSlice";
import { useSelector } from "react-redux";
import { useState } from "react";
import { setFilteredCountry } from "../store/filteredCountrySlice";
import { setFullTime } from "../store/fullTimeSlice";

const Filter = () => {
  const changeMode = useSelector((store) => store.mode.Boolean);
  const inputDispatch = useDispatch();
  const input = useSelector((store) => store.input.text);
  const entireInputDispatch = useDispatch();
  const [windows, setWindow] = useState(false);
  const filteredCountryDispatch = useDispatch();
  const dispatch = useDispatch();
  const fullTime = useSelector((store) => store.fullTime.Boolean);

  const inputHandler = (event) => {
    inputDispatch(setInput(event.target.value));
  };

  const searchClickChangehandler = () => {
    entireInputDispatch(setEntireInput(input));
  };

  const filterClickHandler = () => {
    setWindow(!windows);
  };

  const locationInputChangeHandler = (event) => {
    filteredCountryDispatch(setFilteredCountry(event.target.value));
  };

  const searchButtonClickHandler = () => {
    setWindow(false);
  };
  const checkBoxClickHandler = () => {
    dispatch(setFullTime(!fullTime));
  };

  return (
    <div>
      <div
        className={`${
          changeMode ? "bg-[#19202D]" : "bg-[#ffffff]"
        } flex  py-4 pr-4 pl-6 left-0  right-0 ml-6 mr-6 absolute top-24  rounded-md duration-500`}
      >
        <input
          onChange={inputHandler}
          value={input}
          className="text-white outline-none bg-transparent w-full font-Kumbh text-base font-normal"
          placeholder="Enter desired job..."
        />
        <div className="flex gap-6 items-center">
          <svg
            onClick={filterClickHandler}
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
              fill={changeMode ? "#ffffff" : "#5964E0"}
              fillRule="nonzero"
            />
          </svg>
          {/**search icon */}
          <div className="w-12 h-12 bg-[#5964E0] flex items-center justify-center rounded-md">
            <svg
              onClick={searchClickChangehandler}
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
                fill="#ffffff"
                fillRule="nonzero"
              />
            </svg>
          </div>
        </div>
      </div>
      {/**filter container */}
      {windows && (
        <div
          // onClick={() => {
          //   setWindow(!windows);
          // }}
          className="z-20 top-0 w-full h-full pt-[230px] fixed bg-[#181818] bg-opacity-70 "
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={`absolute ${
              changeMode ? "bg-[#19202D]" : "bg-[#ffffff] text-black"
            }   z-30 left-0 right-0 mx-6 rounded-md max-w-400px`}
          >
            <div className="flex py-7 pl-6 ">
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
            {/**line */}
            <div className="bg-[#6E8098] h-[1px]"></div>

            <div className="p-6 flex flex-col ">
              {/**checkBox */}
              <div className="flex gap-3 mb-6">
                <input
                  onClick={checkBoxClickHandler}
                  style={{ width: "20px", height: "20px" }}
                  type="checkbox"
                  checked={!fullTime}
                />

                <div className={`${changeMode ? "text-white" : "text-black"}`}>
                  Full Time Only
                </div>
              </div>
              {/**button */}
              <div
                onClick={searchButtonClickHandler}
                className="bg-[#5964E0] w-full h-[48px] flex items-center justify-center rounded-md"
              >
                Search
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
