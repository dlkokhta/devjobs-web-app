import { useSelector } from "react-redux/es/hooks/useSelector";
import { useParams } from "react-router-dom";
const CardDetailsFooter = () => {
  const changeMode = useSelector((store) => store.mode.Boolean);
  const { id } = useParams();
  const allData = useSelector((store) => store.allData.data);

  return (
    <div className="hidden lg:block ">
      <div
        className={`${
          changeMode ? "bg-[#19202D]" : "bg-[#ffffff]"
        }  px-10 py-6 mt-16  w-full flex justify-between xl:px-[355px]`}
      >
        <div>
          {allData
            .filter((data) => data.id === +id)

            .map((data) => (
              <div>
                <div
                  className={`${
                    changeMode ? "text-white" : "text-black"
                  } text-xl`}
                >
                  {data.position}
                </div>
                <div className="text-[#6E8098] text-xl">{data.company}.</div>
              </div>
            ))}
        </div>
        <div className="bg-[#5964E0] text-white py-4 px-7 rounded-md font-bold ">
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default CardDetailsFooter;
