
import { FaRupeeSign } from "react-icons/fa";
function CourseCard({ title, instructor, thumbnail }) {
  return (
    <>
      <div className="min-w-[295px] cursor-pointer  bg-green-100 rounded-lg">
        <img
          src={thumbnail}
          alt="thumbnail"
          className=" w-full h-[160px] rounded-t-lg"
        />
        <div className="p-4 text-sky-900">
          <p className="font-semibold text-[16px] leading-5">
           {title}
          </p>
          <p className="text-[14px] py-2 text-gray-500">{instructor}</p>
        </div>
        <div className="flex justify-between gap-8 px-4 pb-4">
          <button className="w-[50%] text-[18px] rounded-sm font-semibold py-2 text-sky-900 border-2 border-sky-900 ">
            Explore
          </button>
          <button className="w-[50%] text-[18px] rounded-sm font-semibold py-2  border-2 bg-sky-900 ">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
}
export { CourseCard };
