import { FiArrowRightCircle } from "react-icons/fi";

const FAQList = ({ question, onClick }) => {
  return (
    <>
     
        <div className="flex font-normal text-[20px] border-b-[1px] py-4 border-white w-full justify-between" onClick={onClick}>
          <p> {question}</p>
          <FiArrowRightCircle className="items-end" />
        </div>
     
     
    </>
  );
};

export default FAQList;
