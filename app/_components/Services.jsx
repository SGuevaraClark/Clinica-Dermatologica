import { Button } from "@/components/ui/button";
import { ArrowRightFromLine } from "lucide-react";
import React from "react";

const Services = () => {
  return (
    <div className=" bg-gray-800 py-16 md:py-28 px-8 md:px-16 text-white my-20">
      {/* ************************************** */}
      <div className="grid md:grid-cols-2 items-center py-10 gap-10 md:gap-3">
        <div className="">
          <h2 className="text-xl font-medium pb-3">- Specialized</h2>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            <span>Specialized</span> Services For Your Health Needs
          </h1>
        </div>
        <div className="md:text-end">
          <Button size="lg" className="">
            View All <ArrowRightFromLine size={24} />
          </Button>
        </div>
      </div>
      {/* ************************************** */}
      <div className="grid md:grid-cols-3 gap-6 pt-10">
        <div className="bg-gray-700 p-10 rounded-xl hover:bg-gray-100 hover:transition-all hover:scale-105 text-gray-200  hover:text-gray-900 cursor-pointer hover:duration-500">
            <img src="./assets/service_icon1.png" className="w-14 h-14 bg-primary p-3 rounded-lg mb-2" alt="" />
          <h1 className="text-2xl font-medium py-3">Dental</h1>
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            saepe quam voluptas ipsa delectus nemo.
          </p>
        </div>
        <div className="bg-gray-700 p-10 rounded-xl hover:bg-gray-100 hover:transition-all hover:scale-105 text-gray-200  hover:text-gray-900 cursor-pointer hover:duration-500">
            <img src="./assets/service_icon1.png" className="w-14 h-14 bg-primary p-3 rounded-lg mb-2" alt="" />
          <h1 className="text-2xl font-medium py-3">Dental</h1>
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            saepe quam voluptas ipsa delectus nemo.
          </p>
        </div>
        <div className="bg-gray-700 p-10 rounded-xl hover:bg-gray-100 hover:transition-all hover:scale-105 text-gray-200  hover:text-gray-900 cursor-pointer hover:duration-500">
            <img src="./assets/service_icon1.png" className="w-14 h-14 bg-primary p-3 rounded-lg mb-2" alt="" />
          <h1 className="text-2xl font-medium py-3">Dental</h1>
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            saepe quam voluptas ipsa delectus nemo.
          </p>
        </div>
        <div className="bg-gray-700 p-10 rounded-xl hover:bg-gray-100 hover:transition-all hover:scale-105 text-gray-200  hover:text-gray-900 cursor-pointer hover:duration-500">
            <img src="./assets/service_icon1.png" className="w-14 h-14 bg-primary p-3 rounded-lg mb-2" alt="" />
          <h1 className="text-2xl font-medium py-3">Dental</h1>
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            saepe quam voluptas ipsa delectus nemo.
          </p>
        </div>
        <div className="bg-gray-700 p-10 rounded-xl hover:bg-gray-100 hover:transition-all hover:scale-105 text-gray-200  hover:text-gray-900 cursor-pointer hover:duration-500">
            <img src="./assets/service_icon1.png" className="w-14 h-14 bg-primary p-3 rounded-lg mb-2" alt="" />
          <h1 className="text-2xl font-medium py-3">Dental</h1>
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            saepe quam voluptas ipsa delectus nemo.
          </p>
        </div>
        <div className="bg-gray-700 p-10 rounded-xl hover:bg-gray-100 hover:transition-all hover:scale-105 text-gray-200  hover:text-gray-900 cursor-pointer hover:duration-500">
            <img src="./assets/service_icon1.png" className="w-14 h-14 bg-primary p-3 rounded-lg mb-2" alt="" />
          <h1 className="text-2xl font-medium py-3">Dental</h1>
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            saepe quam voluptas ipsa delectus nemo.
          </p>
        </div>
      </div>
      {/* ********************************* */}
    </div>
  );
};

export default Services;
