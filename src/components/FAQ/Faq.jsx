import { FaArrowRightLong } from "react-icons/fa6";
import FAQList from "./FaqList";
import { useState } from "react";

function Faq() {
  const faqs = [
    {
      question: "What is the refund policy?",
      answer:
        "CubicleS operates a strict no-refunds policy for all purchased paid courses. Once a course purchase is confirmed, payment cannot be refunded. This policy applies to all courses, irrespective of the price, duration or the learner's progress within the course.",
    },
    {
      question: "I need to purchase a course. Whom should I contact?",
      answer:
        "Contact our counselors through the chat support on our website. Look for the chat option on the bottom right of the Homepage. Name the course you’re interested in, and the counseling team will guide you through the admission process.",
    },
    {
      question:
        "I am not able to view my enrolled course. What to do/whom to contact?",
      answer:
        "To access your enrolled course, ensure you have logged in at learn.pwskills.com. If the course is still not visible, email your payment receipt to support@cubicles.com for assistance within 24 hours.",
    },
    {
      question: "What is an experience portal? How to use it?",
      answer:
        "Our experience portal offers real-time industrial projects for students and professionals. These unpaid, remote, and self-paced internships provide valuable experience. Choose and complete as many projects as you like to receive an internship experience letter. Students as well as working professionals can do these internships.",
    },
    {
      question: "How to get placements and job assistance?",
      answer:
        "Placements and Assistance: Enroll in our Job Assistance courses, inclusive of resume building, mock interviews, job referrals, and job opportunities for eligible candidates. Or join our Job Readiness courses, which include resume building, mock interviews, and job alerts (job opportunity not included)",
    },
  ];
  const [openIndex, setOpenIndex] = useState(0);
  const toggleAnswer = (index) => {
    setOpenIndex(index);
  };

  return (
    <>
      <div className="flex flex-col px-[70px] mt-8 pb-10">
        <div className="top flex justify-between mb-10">
          <p className="font-normal text-4xl">Frequently Asked Questions</p>
          <button className="text-[16px] shadow-2xl shadow-sky-400 rounded-lg font-semibold py-2 px-4 flex gap-1 items-center">
            {" "}
            view all
            <FaArrowRightLong />
          </button>
        </div>
        <div className="bottom flex justify-between">
          <div className="flex flex-col w-[50%]  cursor-pointer">
            {faqs.map((question, index) => (
              <FAQList
                key={index}
                question={question.question}
                onClick={() => toggleAnswer(index)}
              />
            ))}
          </div>
          <div className="w-[50%]">
            <p className="pl-12 w-full text-justify text-[16px] font-thin text-gray-200">
              {/* CubicleS operates a strict no-refunds policy for all purchased
              paid courses. Once a course purchase is confirmed, payment cannot
              be refunded. This policy applies to all courses, irrespective of
              the price, duration or the learner's progress within the course.{" "} */}
              {faqs[openIndex].answer}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export { Faq };
