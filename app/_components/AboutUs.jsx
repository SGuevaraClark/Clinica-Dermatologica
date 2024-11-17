import React from "react";

const AboutUs = () => {
  return (
    <div className="container my-20 pb-20">
      <div className="grid md:grid-cols-4">
        <div className=""></div>
        <div className="col-span-2 text-center py-10">
          <h2 className="text-xl font-medium pb-3">- About US</h2>
          <h1 className="text-4xl font-semibold">
            <span>4 Easy Steps</span> And Get Your Solution
          </h1>
        </div>
        <div className=""></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-10">
        <div
          className="py-16 px-4 md:px-10 border-primary border-[3px] rounded-full cursor-pointer hover:transition-all duration-500 hover:bg-primary hover:text-white hover:scale-125"
          data-aos="fade-down"
          data-aos-duration="600"
          data-aos-easing="ease-in"
        >
          <h1 className="text-3xl md:text-5xl pb-4">80%</h1>
          <h2 className="text-xl md:text-2xl py-3 font-medium">
            Highly Skilled Doctor
          </h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            doloremque at officiis saepe numquam eaque? Delectus, voluptatum?
            Ab, iusto doloribus.
          </p>
        </div>
        <div
          className="py-16 px-4 md:px-1 rounded-full bg-primary text-white"
          data-aos="fade-down"
          data-aos-duration="800"
          data-aos-easing="ease-in"
        >
          <h1 className="text-3xl md:text-5xl pb-4">80%</h1>
          <h2 className="text-xl md:text-2xl py-3 font-medium">
            Highly Skilled Doctor
          </h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            doloremque at officiis saepe numquam eaque? Delectus, voluptatum?
            Ab, iusto doloribus.
          </p>
        </div>
        <div
          className="py-16 px-4 md:px-1 border-primary border-[3px] rounded-full cursor-pointer hover:transition-all duration-500 hover:bg-primary hover:text-white hover:scale-125"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-easing="ease-in"
        >
          <h1 className="text-3xl md:text-5xl pb-4">80%</h1>
          <h2 className="text-xl md:text-2xl py-3 font-medium">
            Highly Skilled Doctor
          </h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            doloremque at officiis saepe numquam eaque? Delectus, voluptatum?
            Ab, iusto doloribus.
          </p>
        </div>
        <div
          className="py-16 px-4 md:px-1 rounded-full bg-gray-800 text-white"
          data-aos="fade-down"
          data-aos-duration="1100"
          data-aos-easing="ease-in"
        >
          <h1 className="text-3xl md:text-5xl pb-4">80%</h1>
          <h2 className="text-xl md:text-2xl  py-3">Highly Skilled Doctor</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            doloremque at officiis saepe numquam eaque? Delectus, voluptatum?
            Ab, iusto doloribus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
