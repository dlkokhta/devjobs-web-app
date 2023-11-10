import { useEffect } from "react";
import { useSelector } from "react-redux";

const DeveloperCard = () => {
  const allData = useSelector((store) => store.allData.data);
  const changeMode = useSelector((store) => store.mode.Boolean);
  const entireInput = useSelector((store) => store.entireInput.text);
  const filteredCountry = useSelector((store) => store.filteredCountry.text);
  const fullTime = useSelector((store) => store.fullTime.Boolean);
  console.log(fullTime);

  return (
    <div className="grid gap-12 ">
      {allData
        .filter((data) =>
          data.position.toLowerCase().includes(entireInput.toLowerCase())
        )
        .filter((data) =>
          data.location.toLowerCase().includes(filteredCountry.toLowerCase())
        )
        .filter((data) => (fullTime ? fullTime : data.contract === "Full Time"))

        .map((data, index) => (
          <div
            key={index}
            className={`relative ${
              changeMode ? "bg-[#19202D]" : "bg-[#ffffff]"
            } pt-14 pb-8 pl-8 mx-6 max-w-[500px] duration-500 rounded-md`}
          >
            {/**logo */}
            <div
              className="absolute w-12 h-12 bottom-60  rounded-2xl flex items-center justify-center "
              style={{ backgroundColor: data.color }}
            >
              <img src={data.logo} />
            </div>

            <div className="text-[#6E8098] flex items-center gap-3 font-Kumbh text-base font-normal mb-4">
              <div> {data.postedAt}</div>
              <div className="bg-[#6E8098] w-1 h-1 rounded-full"></div>
              <div> {data.contract}</div>
            </div>
            <div
              className={` ${
                changeMode ? "text-white" : "text-black"
              } font-Kumbh font-bold text-xl mb-4`}
            >
              {data.position}
            </div>
            <div className="text-[#5964E0] font-Kumbh text-base mb-11">
              {data.company}
            </div>
            <div className="text-[#5964E0] font-Kumbh font-bold">
              {data.location}
            </div>
          </div>
        ))}
    </div>
  );
};

export default DeveloperCard;
