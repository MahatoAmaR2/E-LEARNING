import './courses.css'
import { CourseCard } from './CourseCard';
import thumbnail from "../../assets/images/thumbnail.jpg";
function AllCourses() {
  return (
    <>
      <section className="flex flex-col px-[70px] bg-[#060131]">
        <div className="mt-6">
          <p className="text-3xl font-semibold">
            All the skills you need in one place
          </p>
          <p className="text-gray-300 font-light">
            From critical skills to technical topics, CubicleS supports your
            professional development.
          </p>
        </div>
        <div className="mt-12">
          <ul className="flex gap-6 text-gray-200 font-semibold mb-7 border-b-[1px] pb-4 text-[16px]">
            <li>Web Development</li>
            <li>Communication</li>
            <li>Business Analytics & Intelligence</li>
            <li>Leadership</li>
            <li>Editing</li>
            <li>Data Science</li>
          </ul>
        </div>
        <div className="cards flex overflow-x-auto scrollbar-hidden gap-6">
          <CourseCard
          thumbnail={thumbnail}
          title=" The Web Development Bootcam 2024"
          instructor="Amar Mahato, Rudra"
          />
           <CourseCard
          thumbnail={thumbnail}
          title=" The Web Development Bootcam 2024"
          instructor="Amar Mahato, Rudra"
          />
           <CourseCard
          thumbnail={thumbnail}
          title=" The Web Development Bootcam 2024"
          instructor="Amar Mahato, Rudra"
          />
           <CourseCard
          thumbnail={thumbnail}
          title=" The Web Development Bootcam 2024"
          instructor="Amar Mahato, Rudra"
          />
           <CourseCard
          thumbnail={thumbnail}
          title=" The Web Development Bootcam 2024"
          instructor="Amar Mahato, Rudra"
          />
        </div>
      </section>
    </>
  );
}

export { AllCourses };
