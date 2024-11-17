import React from "react";

const SolutionStep = () => {
  return (
    <div className="container py-10 md:py-20">
      <div className="grid md:grid-cols-4">
        <div className=""></div>
        <div className="col-span-2 text-center py-10">
          <h2 className="text-xl font-medium pb-3">- Fastest Solution</h2>
          <h1 className="text-4xl font-semibold">
            <span>4 Easy Steps</span> And Get Your Solution
          </h1>
        </div>
        <div className=""></div>
      </div>
      <div className="grid md:grid-cols-4 gap-10 mt-10">
        <div
          className="px-6 py-10 bg-gray-50 hover:bg-primary hover:text-white rounded-md shadow-md cursor-pointer hover:scale-105 hover:transition-all hover:shadow-xl"
          data-aos="fade-down"
          data-aos-duration="600"
          data-aos-easing="ease-in"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/9562/9562871.png"
            className="w-14 rounded-full shadow-md mb-3"
            alt=""
          />
          <h1 className="font-semibold py-2 text-2xl">Check Doctor Profile</h1>
          <p className="py-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum eum
            repellat voluptatibus quia quam harum cupiditate, nulla nam quae
            quos!
          </p>
        </div>
        <div
          className="px-6 py-10 bg-gray-50 hover:bg-primary hover:text-white rounded-md shadow-md cursor-pointer hover:scale-105 hover:transition-all hover:shadow-xl"
          data-aos="fade-down"
          data-aos-duration="800"
          data-aos-easing="ease-in"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3652/3652191.png"
            className="w-14 mb-3"
            alt=""
          />
          <h1 className="font-semibold py-2 text-2xl">Check Doctor Profile</h1>
          <p className="py-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum eum
            repellat voluptatibus quia quam harum cupiditate, nulla nam quae
            quos!
          </p>
        </div>
        <div
          className="px-6 py-10 bg-gray-50 hover:bg-primary hover:text-white rounded-md shadow-md cursor-pointer hover:scale-105 hover:transition-all hover:shadow-xl"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-easing="ease-in"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2693/2693507.png"
            className="w-14  mb-3"
            alt=""
          />
          <h1 className="font-semibold py-2 text-2xl">Check Doctor Profile</h1>
          <p className="py-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum eum
            repellat voluptatibus quia quam harum cupiditate, nulla nam quae
            quos!
          </p>
        </div>
        <div
          className="px-6 py-10 bg-gray-50 hover:bg-primary hover:text-white rounded-md shadow-md cursor-pointer hover:scale-105 hover:transition-all hover:shadow-xl"
          data-aos="fade-down"
          data-aos-duration="1100"
          data-aos-easing="ease-in"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/11421/11421769.png"
            className="w-14 mb-3"
            alt=""
          />
          <h1 className="font-semibold py-2 text-2xl">Check Doctor Profile</h1>
          <p className="py-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum eum
            repellat voluptatibus quia quam harum cupiditate, nulla nam quae
            quos!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolutionStep;
