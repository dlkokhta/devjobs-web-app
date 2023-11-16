import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DeveloperCard = () => {
  const allData = useSelector((store) => store.allData.data);
  const changeMode = useSelector((store) => store.mode.Boolean);
  const entireInput = useSelector((store) => store.entireInput.text);
  const filteredCountry = useSelector((store) => store.filteredCountry.text);
  const fullTime = useSelector((store) => store.fullTime.Boolean);
  const [showMoreCard, setShowMoreCard] = useState(12);

  console.log(fullTime);

  console.log(entireInput);

  const loadMoreClickHandler = () => {
    setShowMoreCard(showMoreCard + 3);
  };

  return (
    <div className="px-6 lg:px-10 xl:px-[165px]">
      <div className="grid gap-12 justify-center lg:gap-y-16 lg:gap-3 lg:grid-cols-2 xl:grid-cols-3 xl:gap-[30px] xl:gap-y-[65px]">
        {allData
          .filter((data) =>
            data.position.toLowerCase().includes(entireInput.toLowerCase())
          )
          .filter((data) =>
            data.location.toLowerCase().includes(filteredCountry.toLowerCase())
          )
          .filter((data) =>
            fullTime ? fullTime : data.contract === "Full Time"
          )
          .slice(0, showMoreCard)

          .map((data, index) => (
            <Link to={"/details/" + data.id}>
              <div
                key={index}
                className={`relative ${
                  changeMode ? "bg-[#19202D]" : "bg-white"
                } pt-[49px] pb-8 px-8 max-w-[500px] duration-500 rounded-md `}
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
            </Link>
          ))}
      </div>
      <div className="flex justify-center pb-16 mt-14">
        <button
          onClick={loadMoreClickHandler}
          className="text-white bg-[#5964E0] py-4 px-8 rounded-md font-bold"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default DeveloperCard;
