import { NavLink , Link} from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";

function Header() {
  return (
    <>
      <nav className="  px-8 lg:px-6 py-2.5 h-[70px] bg-[#301E67] flex justify-between items-center">
        <div>
          <h2>CubicleS</h2>
        </div>
        <ul className="flex gap-5 items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-[#6cbcfd]" : "text-green-200"
                }  hover:text-sky-700 lg:p-0`
              }
            >
              Docs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-[#6cbcfd]" : "text-green-200"
                } hover:text-sky-700 lg:p-0
              `
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-[#6cbcfd]" : "text-green-200"
                } hover:text-sky-700 lg:p-0
              `
              }
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="teachers"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-[#6cbcfd]" : "text-green-200"
                } hover:text-sky-700 lg:p-0
              `
              }
            >
              Teachers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-[#6cbcfd]" : "text-green-200"
                } hover:text-sky-700 lg:p-0
              `
              }
            >
              About
            </NavLink>
          </li>
          <li className="flex items-center  w-[250px] h-[45px] rounded-md px-1 bg-green-200 cursor-pointer ">
            <span className="text-[#301E67] px-1 text-[20px]">
              <IoSearchSharp />
            </span>
            <input
              type="text"
              placeholder="Search Course "
              className=" outline-none border-none  text-[#301E67] font-semibold px-2 overflow-auto text-[16px] focus:bg-green-200 focus:border-none  "
            />
          </li>
        </ul>
        <div>
          <button className="border border-green-200 text-green-200 text-[18px] rounded-md px-3 py-[10px] cursor-pointer font-normal hover:border-green-300 hover:text-green-300 ">
            <Link to='/signup'>
            Login / Register
            </Link>
          </button>
        </div>
      </nav>
    </>
  );
}
export { Header };
