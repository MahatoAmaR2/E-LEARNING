import { NavLink } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";

function Header() {
  return (
    <>
      <nav className="  px-6 lg:px-6 py-2.5 h-[70px] bg-[#301E67] flex justify-between items-center">
        <div>
          <h2>CubicleS</h2>
        </div>
        <ul className="flex gap-5 items-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-[#5B8FB9]" : "text-[#b6EADA]"
                }  hover:text-sky-700 lg:p-0`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${
                  isActive ? "text-[#5B8FB9]" : "text-[#b6EADA]"
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
                  isActive ? "text-[#5B8FB9]" : "text-[#b6EADA]"
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
                  isActive ? "text-[#5B8FB9]" : "text-[#b6EADA]"
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
                  isActive ? "text-[#5B8FB9]" : "text-[#b6EADA]"
                } hover:text-sky-700 lg:p-0
              `
              }
            >
              About
            </NavLink>
          </li>
          <li className="flex items-center w-[250px] h-[45px] rounded-md px-1 bg-[#5B8FB9] cursor-pointer">
            <span><IoSearchSharp/></span>
              <input type="text" placeholder="Search Course " 
              className="bg-transparent outline-none border-none  px-2 overflow-auto"
              />
          </li>
        </ul>
        <div>
          <button
          className="border border-sky-500 text-sky-500 text-[18px] rounded-md px-3 py-[10px] cursor-pointer font-normal hover:border-sky-700 hover:text-sky-500 "
          >Login / Register</button>
        </div>
      </nav>
    </>
  );
}
export { Header };
