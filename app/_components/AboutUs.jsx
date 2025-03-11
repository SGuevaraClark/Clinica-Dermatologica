import { Button } from "@/components/ui/button";
import { ArrowRightFromLine } from "lucide-react";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="my-20 lg:my-32 py-10">
      <div className="grid md:grid-cols-2 items-center gap-10">
        <div className="">
          <h3 className="font-medium py-2">- Nosotros</h3>
          <h2 className="text-4xl font-bold md:leading-tight">
            Dra. <span>Virginia Ramos Molina</span> - Médico Dermatóloga
          </h2>
          <div className="lg:pe-10 space-y-4 py-6">
            <p className="text-lg">
              Con más de 15 años de experiencia en dermatología clínica y estética, la Dra. Virginia Ramos Molina 
              se ha establecido como una profesional de referencia en el cuidado de la piel y tratamientos 
              estéticos avanzados.
            </p>
            <p className="text-lg">
              Nos especializamos en tres áreas principales: 
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-lg">
                <strong>Dr. Face:</strong> Tratamientos faciales avanzados incluyendo Botox ($800), 
                rejuvenecimiento facial, rellenos dérmicos y tratamientos para acné.
              </li>
              <li className="text-lg">
                <strong>Dr. Pie:</strong> Cuidado integral de los pies, tratamiento de hongos, 
                callosidades y uñas encarnadas.
              </li>
              <li className="text-lg">
                <strong>Dr. Metabolismo:</strong> Programas personalizados para mejora metabólica, 
                control de peso y nutrición.
              </li>
            </ul>
          </div>
          <div className="flex gap-5 my-4">
            <Button
              size="lg"
              className=""
            >
              Conocer Más <ArrowRightFromLine size={24} />
            </Button>
          </div>
        </div>
        <div className="p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="flex-col">
              <div className="bg-purple-100 rounded-xl overflow-hidden mb-8">
                <Image
                  src="/virginia-ramos-1.jpg"
                  width={300}
                  height={300}
                  alt="Dra. Virginia Ramos"
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-purple-100 rounded-xl overflow-hidden">
                <Image
                  src="/virginia-ramos-2.jpg"
                  width={300}
                  height={300}
                  alt="Consultorio Dra. Virginia Ramos"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="flex flex-col bg-purple-100 rounded-xl overflow-hidden lg:h-full">
              <Image
                src="/virginia-ramos-3.jpg"
                width={300}
                height={600}
                alt="Tratamiento Facial"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
