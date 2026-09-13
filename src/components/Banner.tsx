import React from "react";
import bannerLogo from "../assets/banner-stack.png";

const Banner = () => {
  return (
    // <div className="mt-8 mb-8 border-2 border-pink-300 flex justify-between items-center">
    //   <div className="">
    //     <h2 className="text-[#0F172A] text-[60px] font-extrabold">
    //       Build Your Ideal
    //     </h2>
    //     <h2 className="text-[60px] font-extrabold bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
    //       Development Stack
    //     </h2>
    //     <p className="text-[#475569] text-[18px] mt-8 mb-8">
    //       Explore frontend, backend, database, and tooling options, compare them
    //       side by side, and put together the stack that fits your next project.
    //     </p>
    //     <div className="flex items-center mt-5">
    //       <button className="btn rounded-xl bg-gradient-to-r from-[#FF5722] to-[#7C3AED] text-white font-semibold border-none mr-5">
    //         Explore Technologies
    //       </button>
    //       <button className="btn rounded-xl border-2 border-gray-300">
    //         Add to Stack
    //       </button>
    //     </div>
    //   </div>
    //   <div className="">
    //     <img src={bannerLogo} alt=""></img>
    //   </div>
    // </div>
    <div className="mt-8 mb-8 border-2 border-pink-300 rounded-2xl p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row justify-between items-center gap-10">
      <div className="w-full lg:w-3/5 text-center lg:text-left">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0F172A]">
          Build Your Ideal
        </h2>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
          Development Stack
        </h2>
        <p className="text-[#475569] text-base sm:text-lg mt-6 mb-8 max-w-2xl mx-auto lg:mx-0">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <button className="btn rounded-xl bg-gradient-to-r from-[#FF5722] to-[#7C3AED] text-white font-semibold border-none w-full sm:w-auto">
            Explore Technologies
          </button>
          <button className="btn rounded-xl border-2 border-gray-300 w-full sm:w-auto">
            Learn More
          </button>
        </div>
      </div>
      <div className="w-full lg:w-2/5 flex justify-center">
        <img
          src={bannerLogo}
          alt="Development stack illustration"
          className="w-56 sm:w-64 md:w-72 lg:w-full max-w-md object-contain"
        />
      </div>
    </div>
  );
};

export default Banner;
