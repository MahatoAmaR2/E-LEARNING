import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Input from "./input";
import { isEmail, isValidPassword } from "../helpers/regexMatcher.js";
import { signup } from "../reducers/slices/userSlice.js";
import { useState } from "react";

function Signup() {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loading, error, user } = useSelector((state) => state.auth);
  const avatarUrl = user ? user.avatarUrl : null;
  console.log(errors);
  const onsubmit =  (data) => {
    console.log("Form submitted with data:", data); 
    const formData = new FormData();

    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("password", data.password);

    if (selectedFile) {
      formData.append("avatar", selectedFile);
    }
   dispatch(signup(formData));
    navigate("/signin");
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file); // Update state with selected file
    }
  };

  return (
    <>
      <form
        className="flex justify-center items-center w-full h-screen "
        onSubmit={handleSubmit(onsubmit)}
      >
        <div className="flex flex-col  w-[30%] shadow-[0_35px_60px_-15px_#301E67] p-4 rounded-md">
          <p className="text-center text-[28px] mb-5 font-semibold">
            Create Your Account
          </p>
          <label htmlFor="avatar" className="avatar mx-auto ">
            {selectedFile ? (
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="User Avatar"
                className="w-24 h-24 rounded-full"
              />
            ) : (
              <span>
                <CgProfile className="w-20 h-20 rounded-full" />
              </span>
            )}
            {/* {selectedFile ? (
              <img
                src={URL.createObjectURL(selectedFile)} // Preview the selected file
                alt="User Avatar"
                className="w-24 h-24 rounded-full"
              />
            ) : avatarUrl ? (
              <img
                src={avatarUrl}
                alt="User Avatar"
                className="w-24 h-24 rounded-full"
              />
            ) : (
              <span>
                <CgProfile className="w-20 h-20 rounded-full" />
              </span>
            )} */}
          </label>
          <input
            type="file"
            className="hidden mb-4"
            id="avatar"
            onChange={handleFileChange}
          />
          <Input
            label="Full Name*"
            {...register("fullName", { required: "Full Name is required" })}
            error={errors.fullName}
            placeholder="Enter your name"
          />
          <Input
            label="Email*"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              validate: {
                isValidEmail: (value) =>
                  isEmail(value) || "Invalid email format",
              },
            })}
            error={errors.email}
          />
          <Input
            label="Password*"
            placeholder="Enter a password"
            {...register("password", {
              required: "Password is required",
              validate: {
                isValidPassword: (value) => isValidPassword(value),
              },
            })}
            error={errors.password}
          />
          {error && <p className="text-red-500 text-center">{error}</p>}
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
            value={loading ? "Signing Up..." : "SIGN UP"}
            className="bg-green-300 hover:bg-green-400 text-[#301E67] font-bold text-[16px] cursor-pointer mb-3"
            disabled={loading}
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
