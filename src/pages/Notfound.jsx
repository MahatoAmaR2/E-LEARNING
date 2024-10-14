import errorImage from "../assets/images/errorImage.png";
import { useNavigate } from "react-router-dom";

function Notfound() {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen w-full">
        <div>
          <p className="text-[180px]">404</p>
          <p>Page Not Found</p>
          <button
            onClick={handleNavigateHome}
            className="text-[18px] px-3 py-2 bg-green-200 text-[#03001c] "
          >
            Back to Home
          </button>
          <img src={errorImage} alt="ErrorImage" />
        </div>
        {/* <div className="">
        </div> */}
      </div>
    </>
  );
}
export default Notfound;
