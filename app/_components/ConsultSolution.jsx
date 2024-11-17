import Image from "next/image";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const ConsultSolution = () => {
  return (
    <div className="container bg-[#f1f5ff] py-16 my-10 md:my-20 px-5">
      <div className="grid md:grid-cols-2 items-center">
        {/* ******************** */}
        <div className="md:p-20 md:order-1 order-2">
          <div className="">
            <h2 className="text-xl font-medium pb-3">- Fastest Solution</h2>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              <span>4 Easy Steps</span> And Get Your Solution
            </h1>
          </div>
          <div className="flex flex-col gap-5 py-8">
            <div className="flex items-center space-x-3">
              <Checkbox id="terms1" className="rounded-full w-6 h-6" />
              <label
                htmlFor="terms1"
                className="text-[17px] font-normal leading-none "
              >
                Accept terms and conditions
              </label>
            </div>{" "}
            <div className="flex items-center space-x-3">
              <Checkbox id="terms2" className="rounded-full w-6 h-6" />
              <label
                htmlFor="terms2"
                className="text-[17px] font-normal leading-none "
              >
                Accept terms and conditions
              </label>
            </div>{" "}
            <div className="flex items-center space-x-3">
              <Checkbox id="terms3" className="rounded-full w-6 h-6" />
              <label
                htmlFor="terms3"
                className="text-[17px] font-normal leading-none "
              >
                Accept terms and conditions
              </label>
            </div>{" "}
            <div className="flex items-center space-x-3">
              <Checkbox id="terms4" className="rounded-full w-6 h-6" />
              <label
                htmlFor="terms4"
                className="text-[17px] font-normal leading-none "
              >
                Accept terms and conditions
              </label>
            </div>
          </div>
          <Button size="lg" className="">
            Book an appointment
          </Button>{" "}
        </div>
        {/* ******************** */}
        <div className=" md:order-2 order-1 pb-10 md:pb-0">
          <Image
            src="/consultsolution.png"
            width={600}
            height={600}
            alt="consultsolution"
          />
        </div>
        {/* ******************** */}
      </div>
    </div>
  );
};

export default ConsultSolution;
