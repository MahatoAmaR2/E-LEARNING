import landingSvg from '../assets/images/masterclass_landing.svg'

function MasterClass() {
  return (
    <>
      <div className=" px-[70px] mt-6">
        <p className="text-center text-4xl mb-8 font-extrabold">Masterclass</p>
        <div className="flex">
        <div className="left w-[60%]">
          <p className="text-3xl font-bold mb-5">CubicleS Skills Brings You MasterClass</p>
          <p className="text-[18px] leading-6 font-normal">
            Stuck in your job? Learn and grow with our masterclasses led by top
            industry experts. Dive into tech with seasoned leaders!
          </p>
          <button className="bg-green-200 px-6 mt-6 py-2 rounded-sm text-sky-900 font-bold text-[18px]">
            Explore Masterclass
          </button>
        </div>
        <div className="right">
            <img src={landingSvg} alt="masterclass_landing" />
        </div>
        </div>
      </div>
    </>
  );
}

export { MasterClass };
