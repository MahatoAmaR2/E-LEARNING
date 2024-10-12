function Footer() {
  return (
    <>
      <footer className="bg-violet-950 px-10 flex gap-x-8 ">
        <div className="w-[40%]">
        <div className="text-gray-400 ">
          <h2>CubicleS</h2>
          <p className="text-[14px] mt-2 tracking-widest">
            <span className="text-[12px] ">&copy; </span>copyright 
            CubicleS 2023 - 2024. All rights reserved.
          </p>
          <p className="mt-4 text-[14px] tracking-widest">Home   for learners</p>
        </div>
        </div>
        <div className="flex w-[60%] ">
        <div className="flex-1">
          <p className="text-green-200 text-[18px] font-medium mb-2">Pages</p>
          <div className="text-[14px]  flex flex-col gap-y-2 cursor-pointer ">
                <p >Blog</p>
                <p >Daily Quiz</p>
            </div>
        </div>
        <div className="flex-1">
          <p className="text-green-200 mb-2 text-[18px] font-medium">Socials</p>
          <div className="flex flex-col gap-y-2 text-[14px] cursor-pointer">
            <p>Discord</p>
            <p >
              X | Twitter
            </p>
            <p >WhatsApp</p>
            <p>LinkedIn</p>
            <p>Instagram</p>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-green-200 text-[18px] font-medium mb-2">Legal</p>
          <div className="flex flex-col gap-y-2 text-[14px] cursor-pointer">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Refund policy</p>
            <p>Pricing policy</p>
          </div>
        </div>
        <div className="flex-1">
            <p className="text-green-200 text-[18px] font-medium mb-2 ">Register</p>
            <div className="flex flex-col gap-y-2 text-[14px] cursor-pointer">
                <p> Sign Up</p>
                <p> Login</p>
                <p> Forgot Password
                </p>
            </div>
        </div>
        </div>
      </footer>
    </>
  );
}

export { Footer };
