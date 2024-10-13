import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import Input from "./input";

function Signup({ avatarUrl }) {
  return (
    <>
      <form className="flex justify-center items-center w-full h-screen ">
        <div className="flex flex-col  w-[30%] shadow-[0_35px_60px_-15px_#301E67] p-4 rounded-md"> 
          <p className="text-center text-[28px] mb-5 font-semibold">
            Create Your Account
          </p>
          <label htmlFor="avatar" className="avatar mx-auto ">
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt="User Avatar"
                className="w-24 h-24 rounded-full"
              />
            ) : (
              <span>
                <CgProfile className="w-20 h-20 rounded-full" />
              </span>
            )}
          </label>
          <input type="file" className="hidden mb-4" id="avatar" required />
          <Input label="Full Name*" placeholder="Enter your name"/>
          <Input label="Email*" placeholder="Enter your email"/>
          <Input label="Password*" placeholder="Enter a password"/>
          <div className="text-[13px] text-gray-400 text-center mt-2 mb-4">
            <p>
              By clicking "signup" you agree to our{" "}
              <Link to="" className="text-sky-700 underline">
                Terms of Service{" "}
              </Link>
              &
            </p>
            <p className="mt-1">
              <Link to="" className="text-sky-700 underline">
                Privacy Policy
              </Link>
            </p>
          </div>
          <input
            type="submit"
            value="SIGN UP"
            className="bg-green-300 hover:bg-green-400 text-[#301E67] font-bold text-[16px] cursor-pointer mb-3"
          />
          <p className="text-[16px] text-center mb-2">
            Already have an account?{" "}
            <Link to="/signin" className="text-[12px] text-sky-700 underline">
              {" "}
              SIGN IN
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}

export { Signup };
