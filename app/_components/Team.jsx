import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import React from "react";

const Team = () => {
  return (
    <div className="py-20">
      {/* **************************************** */}
      <div className="py-10 text-center">
        <div className="">
          <h2 className="text-xl font-medium pb-3">- Doctor Team</h2>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Our <span>Specialist</span> Doctor Team
          </h1>
        </div>
      </div>
      {/* **************************************** */}
      <div className="grid md:grid-cols-3 gap-10 py-10">
        <div className="">
          <a
            className="p-5 max-w-lg border-2 border-gray-400 rounded-2xl hover:shadow-xl hover:shadow-gray-200 flex flex-col "
            href="#"
          >
            <img
              src="./assets/main male doctor4.jpg"
              className="shadow rounded-lg overflow-hidden border "
            />
            <div className="mt-8">
              <div className="flex justify-between gap-3">
                <h4 className="font-medium text-2xl">Dr. Ali Ahmed</h4>
                <p className="flex gap-2 items-center text-xl font-semibold">
                  <Star size={24} className="text-yellow-500" /> 4.8
                </p>
              </div>
              <p className="mt-2 text-gray-600 text-lg">Heart Specialist</p>
            </div>
          </a>
        </div>
        <div className="">
          <a
            className="p-5 max-w-lg border-2 border-gray-400 rounded-2xl hover:shadow-xl hover:shadow-gray-200 flex flex-col "
            href="#"
          >
            <img
              src="./assets/main male doctor4.jpg"
              className="shadow rounded-lg overflow-hidden border "
            />
            <div className="mt-8">
              <div className="flex justify-between gap-3">
                <h4 className="font-medium text-2xl">Dr. Ali Ahmed</h4>
                <p className="flex gap-2 items-center text-xl font-semibold">
                  <Star size={24} className="text-yellow-500" /> 4.8
                </p>
              </div>
              <p className="mt-2 text-gray-600 text-lg">Heart Specialist</p>
            </div>
          </a>
        </div>
        <div className="">
          <a
            className="p-5 max-w-lg border-2 border-gray-400 rounded-2xl hover:shadow-xl hover:shadow-gray-200 flex flex-col "
            href="#"
          >
            <img
              src="./assets/main male doctor4.jpg"
              className="shadow rounded-lg overflow-hidden border "
            />
            <div className="mt-8">
              <div className="flex justify-between gap-3">
                <h4 className="font-medium text-2xl">Dr. Ali Ahmed</h4>
                <p className="flex gap-2 items-center text-xl font-semibold">
                  <Star size={24} className="text-yellow-500" /> 4.8
                </p>
              </div>
              <p className="mt-2 text-gray-600 text-lg">Heart Specialist</p>
            </div>
          </a>
        </div>
      </div>
      {/* **************************************** */}
      <div className="text-center pt-10">
        <Button size="lg" className="">
          View All Doctors <ArrowRight size={24} />
        </Button>
      </div>
      {/* **************************************** */}
    </div>
  );
};

export default Team;
