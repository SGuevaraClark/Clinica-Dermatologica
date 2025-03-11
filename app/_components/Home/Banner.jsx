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
                  - Dermatología & Estética
                </h5>
                <h1
                  className="text-4xl md:text-7xl font-semibold md:py-4"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-easing="ease-in"
                >
                  Dra. <span>Virginia</span> Ramos Molina
                </h1>
                <p
                  className="text-lg py-4 md:pe-20"
                  data-aos="fade-right"
                  data-aos-duration="1400"
                  data-aos-easing="ease-in"
                >
                  Especialista en Dermatología Clínica y Estética con más de 15 años
                  de experiencia. Ofrecemos tratamientos personalizados para cuidar y 
                  realzar la belleza natural de su piel.
                </p>
                <div
                  className="md:flex gap-5 mt-5 block"
                  data-aos="fade-right"
                  data-aos-duration="1600"
                  data-aos-easing="ease-in"
                >
                  <Button size="lg" className="my-2 md:my-0 w-full md:w-auto">
                    Agendar Cita
                  </Button>{" "}
                  <Button
                    size="lg"
                    variant="secondary"
                    className="my-2 md:my-0 w-full md:w-auto"
                  >
                    Nuestros Servicios <MoveUpRight size={24} />
                  </Button>
                </div>
              </div>
              <div
                className="flex justify-center md:order-2 order-1"
                data-aos="fade-left"
                data-aos-easing="ease-in-quart"
              >
                <Image
                  src="/dermatologist.jpg"
                  width={500}
                  height={500}
                  alt="Dra. Virginia Ramos Molina"
                />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="md:order-1 order-2">
                <h5 className="font-medium py-4">- Tratamientos Faciales</h5>
                <h1 className="text-4xl md:text-7xl font-semibold md:py-4">
                  Dr. <span>Face</span> - Rejuvenecimiento Facial
                </h1>
                <p className="text-lg py-4 md:pe-20">
                  Tratamientos faciales avanzados que combinan tecnología y productos 
                  de alta calidad para rejuvenecer su piel y reducir signos de envejecimiento.
                </p>
                <div className="md:flex gap-5 mt-5 block">
                  <Button size="lg" className="my-2 md:my-0 w-full md:w-auto">
                    Ver Tratamientos
                  </Button>{" "}
                  <Button
                    size="lg"
                    variant="secondary"
                    className="my-2 md:my-0 w-full md:w-auto"
                  >
                    Más Información <MoveUpRight size={24} />
                  </Button>
                </div>
              </div>
              <div className="flex justify-center md:order-2 order-1">
                <Image
                  src="/facial-treatment.jpg"
                  width={600}
                  height={600}
                  alt="Tratamiento Facial"
                />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="md:order-1 order-2">
                <h5 className="font-medium py-4">- Tratamientos Especializados</h5>
                <h1 className="text-4xl md:text-7xl font-semibold md:py-4">
                  Dr. <span>Metabolismo</span> & Dr. <span>Pie</span>
                </h1>
                <p className="text-lg py-4 md:pe-20">
                  Ofrecemos soluciones integrales con nuestros programas especializados:
                  tratamientos metabólicos para mejorar su salud y cuidado podológico profesional.
                </p>
                <div className="md:flex gap-5 mt-5 block">
                  <Button size="lg" className="my-2 md:my-0 w-full md:w-auto">
                    Explorar Servicios
                  </Button>{" "}
                  <Button
                    size="lg"
                    variant="secondary"
                    className="my-2 md:my-0 w-full md:w-auto"
                  >
                    Consulta Gratuita <MoveUpRight size={24} />
                  </Button>
                </div>
              </div>
              <div className="flex justify-center md:order-2 order-1">
                <Image
                  src="/specialized-treatment.jpg"
                  width={650}
                  height={650}
                  alt="Tratamientos Especializados"
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
              src="/certification1.png"
              width={200}
              height={100}
              alt="Certificación"
            />
          </div>
          <div className="">
            <Image
              src="/certification2.png"
              width={200}
              height={100}
              alt="Certificación"
            />
          </div>
          <div className="">
            <Image
              src="/certification3.png"
              width={200}
              height={100}
              alt="Certificación"
            />
          </div>
          <div className="">
            <Image
              src="/product1.png"
              width={200}
              height={100}
              alt="Producto"
            />
          </div>
          <div className="">
            <Image
              src="/product2.png"
              width={200}
              height={100}
              alt="Producto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
