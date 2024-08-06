import React from "react";
import frontImage from "../../assets/front.jpg";

const Front = () => {
  return (
    <section className="z-10">
      <div className="sm:w-11/12 mx-auto">
        <div
          className={`py-8 sm:rounded-3xl relative w-full h-[820px] bg-homefrontbg bg-cover lg:bg-center bg-scroll bg-no-repeat bg-left`}
        ></div>
      </div>
      <article className="lg:flex hidden items-end absolute top-[50%] right-0 w-[30%] h-1/2 px-2">
        <div className="text-white text-[26px] w-[80%]">
          Find, locate and clean the trash in your area
        </div>
      </article>
    </section>
  );
};

export default Front;
