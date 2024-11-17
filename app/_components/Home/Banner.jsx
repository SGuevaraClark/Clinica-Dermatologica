import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Banner = () => {
  return (
    <div className="py-16 md:py-0">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="md:order-1 order-2">
                <h5
                  className="font-medium py-4"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in"
                >
                  - The Best Health Solution
                </h5>
                <h1
                  className="text-4xl md:text-7xl font-semibold md:py-4"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-easing="ease-in"
                >
                  Optimal <span>Health</span>, One Click Away
                </h1>
                <p
                  className="text-lg py-4 md:pe-20"
                  data-aos="fade-right"
                  data-aos-duration="1400"
                  data-aos-easing="ease-in"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque tincidunt, justo in tincidunt luctus, metus tellus
                  ultricies nunc, nec vestibulum sapien nunc nec sapien.
                </p>
                <div
                  className="md:flex gap-5 mt-5 block"
                  data-aos="fade-right"
                  data-aos-duration="1600"
                  data-aos-easing="ease-in"
                >
                  <Button size="lg" className="my-2 md:my-0 w-full md:w-auto">
                    Book an appointment
                  </Button>{" "}
                  <Button
                    size="lg"
                    variant="secondary"
                    className="my-2 md:my-0 w-full md:w-auto"
                  >
                    See How We Work <MoveUpRight size={24} />
                  </Button>
                </div>
              </div>
              <div
                className="flex justify-center md:order-2 order-1"
                data-aos="fade-left"
                // data-aos-duration="1500"
                data-aos-easing="ease-in-quart"
              >
                <Image
                  src="/main-female-doctor.png"
                  width={500}
                  height={500}
                  alt="doctor"
                />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="md:order-1 order-2">
                <h5 className="font-medium py-4">- The Best Health Solution</h5>
                <h1 className="text-4xl md:text-7xl font-semibold md:py-4">
                  Optimal <span>Health</span>, One Click Away
                </h1>
                <p className="text-lg py-4 md:pe-20">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque tincidunt, justo in tincidunt luctus, metus tellus
                  ultricies nunc, nec vestibulum sapien nunc nec sapien.
                </p>
                <div className="md:flex gap-5 mt-5 block">
                  <Button size="lg" className="my-2 md:my-0 w-full md:w-auto">
                    Book an appointment
                  </Button>{" "}
                  <Button
                    size="lg"
                    variant="secondary"
                    className="my-2 md:my-0 w-full md:w-auto"
                  >
                    See How We Work <MoveUpRight size={24} />
                  </Button>
                </div>
              </div>
              <div className="flex justify-center md:order-2 order-1">
                <Image
                  src="/main male doctor1.jpg"
                  width={600}
                  height={600}
                  alt="doctor"
                />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="md:order-1 order-2">
                <h5 className="font-medium py-4">- The Best Health Solution</h5>
                <h1 className="text-4xl md:text-7xl font-semibold md:py-4">
                  Optimal <span>Health</span>, One Click Away
                </h1>
                <p className="text-lg py-4 md:pe-20">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque tincidunt, justo in tincidunt luctus, metus tellus
                  ultricies nunc, nec vestibulum sapien nunc nec sapien.
                </p>
                <div className="md:flex gap-5 mt-5 block">
                  <Button size="lg" className="my-2 md:my-0 w-full md:w-auto">
                    Book an appointment
                  </Button>{" "}
                  <Button
                    size="lg"
                    variant="secondary"
                    className="my-2 md:my-0 w-full md:w-auto"
                  >
                    See How We Work <MoveUpRight size={24} />
                  </Button>
                </div>
              </div>
              <div className="flex justify-center md:order-2 order-1">
                <Image
                  src="/main male doctor3.jpg"
                  width={650}
                  height={650}
                  alt="doctor"
                />
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="hidden" />
        <CarouselNext className="hidden" />
      </Carousel>
      <div className="container py-10">
        <div className="grid grid-cols-2 gap-10 md:gap-4 md:grid-cols-5 items-center justify-center">
          <div className="">
            <Image
              src="/doctorlogo1.png"
              width={200}
              height={100}
              alt="logo"
            />
          </div>
          <div className="">
            <Image
              src="/doctorlogo2.png"
              width={200}
              height={100}
              alt="logo"
            />
          </div>
          <div className="">
            <Image
              src="/doctorlogo3.png"
              width={200}
              height={100}
              alt="logo"
            />
          </div>
          <div className="">
            <Image
              src="/doctorlogo1.png"
              width={200}
              height={100}
              alt="logo"
            />
          </div>
          <div className="">
            <Image
              src="/doctorlogo2.png"
              width={200}
              height={100}
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
