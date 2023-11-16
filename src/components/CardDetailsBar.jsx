import { useSelector } from "react-redux/es/hooks/useSelector";
import { useParams } from "react-router-dom";

const CardDetailsBar = () => {
  const changeMode = useSelector((store) => store.mode.Boolean);
  const { id } = useParams();

  const allData = useSelector((store) => store.allData.data);
  console.log(allData);

  console.log(allData.filter((data) => data.id === +id));

  return (
    <div className="sm:hidden  md:hidden lg:block">
      <div className=" mt-[-130px]  ">
        {allData
          .filter((data) => data.id === +id)
          .map((data) => (
            //card

            <div
              key={data.id}
              className={`rounded-md ${
                changeMode ? "bg-[#19202D]" : "bg-white"
              }  flex   mb-8   `}
            >
              {/**logo */}
              <div>
                <div
                  className="flex items-center justify-center w-[140px] h-[140px]  "
                  style={{ backgroundColor: data.color }}
                >
                  <div className="scale-150">
                    <img className=" scale-150 " src={data.logo} />
                  </div>
                </div>
              </div>

              <div className="pt-[42px] px-10 pb-8 flex flex-row w-full justify-between ">
                <div className=" font-Kumbh flex flex-col items-start ">
                  <div
                    className={`text-xl font-bold ${
                      changeMode ? "text-white" : "text-[#19202D]"
                    } text-2xl `}
                  >
                    {data.company}
                  </div>
                  <div className="text-lg text-[#6E8098] font-normal">
                    {data.website.slice(8)}
                  </div>
                </div>
                <div className="">
                  <button
                    className={`  ${
                      changeMode ? "bg-[#202837]" : "bg-[#5964E0] "
                    }  font-Kumbh font-bold text-lg py-4 px-5 rounded-md whitespace-nowrap text-white`}
                  >
                    Company Site
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CardDetailsBar;
