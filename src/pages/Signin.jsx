import { Link } from "react-router-dom";
import Input from "./input";
function Signin() {
  return (
    <>
      <div className="flex justify-center items-center h-screen ">
        <form
          action=""
          className="w-[30%]  shadow-[0_35px_60px_-15px_#301E67] p-4 rounded-md"
        >
          <h2 className="text-center text-[28px] mb-4">
            SIgn In To Your Account
          </h2>
          <Input label="Email*" placeholder="Enter your email" />
          <Input label="Password*" placeholder="Enter a password" />
          <p className="text-[12px] mb-2 underline text-sky-700">
            <Link to="">FORGOT PASSWORD?</Link>
          </p>
          <input
            type="submit"
            value="SIGN IN"
            className="w-full bg-green-300 hover:bg-green-400 text-[#301E67] font-bold text-[16px] cursor-pointer mb-3"
          />
          <p className="text-[16px] text-center mb-2">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[12px] text-sky-700 underline">
              SIGN UP
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
export { Signin };
