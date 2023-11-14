import { useSelector } from "react-redux/es/hooks/useSelector";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  const changeMode = useSelector((store) => store.mode.Boolean);
  const { id } = useParams();

  const allData = useSelector((store) => store.allData.data);
  console.log(allData);

  console.log(allData.filter((data) => data.id === +id));

  // absolute top-[120px]
  return (
    <div>
      <div className=" mt-[-110px] left-0 right-0 text-center px-6 ">
        {allData
          .filter((data) => data.id === +id)
          .map((data) => (
            //card
            <div
              key={data.id}
              className={`relative rounded-md ${
                changeMode ? "bg-[#19202D]" : "bg-[#ffffff]"
              }  flex flex-col justify-center items-center mb-6`}
            >
              {/**logo */}
              <div
                className="absolute w-12 h-12 bottom-[196px] rounded-2xl flex items-center justify-center "
                style={{ backgroundColor: data.color }}
              >
                <img src={data.logo} />
              </div>
              <div className="pt-12 px-[90px] pb-8 flex flex-col gap-6 ">
                <div className=" font-Kumbh ">
                  <div
                    className={`text-xl font-bold ${
                      changeMode ? "text-[#ffffff]" : "text-[#19202D]"
                    } `}
                  >
                    {data.company}
                  </div>
                  <div className="text-lg text-[#6E8098] font-normal">
                    {data.website.slice(8)}
                  </div>
                </div>
                <div>
                  <button
                    className={`text-[#5964E0] bg-[#202837] ${
                      changeMode ? "bg-[#202837]" : "bg-[#eceeeb]"
                    }  font-Kumbh font-bold text-lg py-4 px-5 rounded-md`}
                  >
                    Company Site
                  </button>
                </div>
              </div>
            </div>
          ))}
        {allData
          .filter((data) => data.id === +id)
          .map((data) => (
            <div
              className={` ${
                changeMode ? "bg-[#19202D]" : "bg-[#ffffff]"
              } rounded-md pt-10 px-6 flex flex-col`}
            >
              <div>
                <div className=" font-Kumbh flex flex-col items-start mb-12 ">
                  {/**1 */}
                  <div className="flex text-[#6E8098] gap-4 mb-2 ">
                    <div className="">{data.postedAt}</div>
                    <div className="w-1 h-1 bg-[#6E8098] rounded mt-3"></div>
                    <div className="">{data.contract}</div>
                  </div>
                  {/**2 */}
                  <div
                    className={`${
                      changeMode ? "text-[#ffffff]" : "text-[#19202D]"
                    } mb-3 font-bold text-xl`}
                  >
                    {data.position}
                  </div>
                  {/**3 */}
                  <div className="text-[#5964E0] font-bold text-sm">
                    {data.location}
                  </div>
                </div>
                {/**button */}
                <button className="bg-[#5964E0] text-white py-4 px-[100px] rounded-md mb-8 ">
                  apply now
                </button>
              </div>

              <div className="">
                {/**description */}
                <div className="text-[#9DAEC2] text-left font-Kumbh font-normal text-base leading-6 ">
                  {data.description}
                </div>
                {/**requirement */}
                <div>
                  <div className="text-white text-left font-Kumbh font-bold text-xl mt-10 mb-6">
                    Requirement
                  </div>
                  <div className="text-[#9DAEC2] text-left mb-8 font-Kumbh font-normal leading-6">
                    {data.requirements.content}
                  </div>

                  <div className="mb-10">
                    {data.requirements.items.map((item, index) => (
                      <div className="flex flex-row">
                        <div className="mr-4 text-[#5964E0]">&#8226;</div>
                        <div
                          key={index}
                          className="text-[#9DAEC2] text-left leading-7 "
                        >
                          {item}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-white text-left font-Kumbh font-bold text-xl mb-7">
                    What You Will Do
                  </div>
                  <div className="text-[#9DAEC2] text-left font-Kumbh font-normal text-base leading-7 mb-8">
                    {data.requirements.content}
                  </div>
                  <div>
                    <div className=" text-[#9DAEC2] text-left font-Kumbh font-normal text-base leading-7 pb-10">
                      {data.role.items.map((item, index) => (
                        <div className="flex flex-row">
                          <div className="mr-4 text-[#5964E0]">{index + 1}</div>
                          <div key={index}>{item}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/**What yo uwill do */}
              </div>
            </div>
          ))}
      </div>
      <div
        className={`${
          changeMode ? "bg-[#19202D]" : "bg-[#ffffff]"
        }  p-6 mt-16  w-full flex justify-center`}
      >
        <button className="bg-[#5964E0] text-white py-4 px-[104px] rounded-md ">
          apply now
        </button>
      </div>
    </div>
  );
};

export default CardDetails;
