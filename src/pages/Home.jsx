import { Typewriter } from "react-simple-typewriter";
import landing from "../assets/images/landing.jpg" 
import { AllCourses } from "../components/course/AllCourses";
function Home() {
  return (
    <>
      <main className="flex items-center w-full h-[calc(100vh-70px)] px-[70px] mb-6">
        <div className="left w-[50%]">
          <div className="text-[42px] leading-tight">
            <h1>Stay Ahead Of The Curve</h1>
            <h1>
              With Our
              <span className="text-[#4e2cb4]">
                <Typewriter
                  words={[" PRACTICAL", " AFFORDABLE", " EASY"]}
                  loop={Infinity}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={70}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <h1>Courses</h1>
          </div>
          <div className="text-[16px] font-thin text-gray-300 my-6">
            <p>
            CubicleS is your one-stop-shop for upscaling. Get maximum value
              for time{" "}
            </p>
            <p>
              and resources you invest, with job-ready courses &
              high-technology,
            </p>
            <p>available at the lowest cost.</p>
          </div>
          <button className="bg-green-300 px-10 py-[10px] rounded hover:bg-green-400 cursor-pointer text-[#301E67]">
            Explore Courses
          </button>
        </div>
        <div className="right w-[50%] h-full bg-transparent relative">
          <img src={landing} alt="landing" className="h-full mix-blend-normal"/>
        </div>
      </main>
        <AllCourses/>
    </>
  );
}
export { Home };
