import { useDispatch } from "react-redux";
import { setInput } from "../store/inputSlice";
import { setEntInput } from "../store/entireInputSlice";
import { useSelector } from "react-redux";

const Filter = () => {
  const changeMode = useSelector((store) => store.mode.Boolean);

  const inputDispatch = useDispatch();
  const entireInputDispatch = useDispatch();
  const input = useSelector((store) => store.input.text);

  const inputHandler = (event) => {
    inputDispatch(setInput(event.target.value));
  };

  const searchClickHandler = () => {
    entireInputDispatch(setEntInput(input));
  };

  return (
    <div
      className={`${
        changeMode ? "bg-[#19202D]" : "bg-[#ffffff]"
      } flex  py-4 pr-4 pl-6 left-0  right-0 ml-6 mr-6 absolute top-24  rounded-md duration-500`}
    >
      <input
        onChange={inputHandler}
        value={input}
        className="text-white outline-none bg-transparent w-full font-Kumbh text-base font-normal"
        placeholder="FIlter by title..."
      />
      <div className="flex gap-6 items-center">
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
            fill={changeMode ? "#ffffff" : "#5964E0"}
            fill-rule="nonzero"
          />
        </svg>
        {/**search icon */}
        <div
          onClick={searchClickHandler}
          className="w-12 h-12 bg-[#5964E0] flex items-center justify-center rounded-md"
        >
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
              fill="#ffffff"
              fill-rule="nonzero"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Filter;
