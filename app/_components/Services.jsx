import { Button } from "@/components/ui/button";
import { ArrowRightFromLine } from "lucide-react";
import React from "react";

const Services = () => {
  return (
    <div className="bg-gray-800 py-16 md:py-28 px-8 md:px-16 text-white my-20 rounded-xl">
      {/* ************************************** */}
      <div className="grid md:grid-cols-2 items-center py-10 gap-10 md:gap-3">
        <div className="">
          <h2 className="text-xl font-medium pb-3">- Nuestros Servicios</h2>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            <span>Tratamientos</span> Especializados para Su Piel
          </h1>
        </div>
        <div className="md:text-end">
          <Button size="lg" className="">
            Ver Todos <ArrowRightFromLine size={24} />
          </Button>
        </div>
      </div>
      {/* ************************************** */}
      <div className="grid md:grid-cols-3 gap-6 pt-10">
        <div className="bg-gray-700 p-10 rounded-xl hover:bg-gray-100 hover:transition-all hover:scale-105 text-gray-200 hover:text-gray-900 cursor-pointer hover:duration-500">
          <img src="./dr-face-icon.png" className="w-14 h-14 bg-primary p-3 rounded-lg mb-2" alt="" />
          <h1 className="text-2xl font-medium py-3">Dr. Face</h1>
          <p className="">
            Tratamientos faciales avanzados para rejuvenecimiento, limpieza profunda, 
            tratamiento de acné y manchas. Botox, rellenos dérmicos y más.
          </p>
        </div>
        <div className="bg-gray-700 p-10 rounded-xl hover:bg-gray-100 hover:transition-all hover:scale-105 text-gray-200 hover:text-gray-900 cursor-pointer hover:duration-500">
          <img src="./dr-pie-icon.png" className="w-14 h-14 bg-primary p-3 rounded-lg mb-2" alt="" />
          <h1 className="text-2xl font-medium py-3">Dr. Pie</h1>
          <p className="">
            Atención podológica especializada: tratamiento de hongos, callosidades, 
            uñas encarnadas y cuidado integral de los pies.
          </p>
        </div>
        <div className="bg-gray-700 p-10 rounded-xl hover:bg-gray-100 hover:transition-all hover:scale-105 text-gray-200 hover:text-gray-900 cursor-pointer hover:duration-500">
          <img src="./dr-metabolismo-icon.png" className="w-14 h-14 bg-primary p-3 rounded-lg mb-2" alt="" />
          <h1 className="text-2xl font-medium py-3">Dr. Metabolismo</h1>
          <p className="">
            Programas integrales para mejora metabólica, control de peso, 
            nutrición personalizada y asesoría para hábitos saludables.
          </p>
        </div>
        <div className="bg-gray-700 p-10 rounded-xl hover:bg-gray-100 hover:transition-all hover:scale-105 text-gray-200 hover:text-gray-900 cursor-pointer hover:duration-500">
          <img src="./botox-icon.png" className="w-14 h-14 bg-primary p-3 rounded-lg mb-2" alt="" />
          <h1 className="text-2xl font-medium py-3">Botox - $800</h1>
          <p className="">
            Tratamiento premium de Botox aplicado por la Dra. Virginia Ramos. 
            Reduce arrugas y líneas de expresión con resultados duraderos.
          </p>
        </div>
        <div className="bg-gray-700 p-10 rounded-xl hover:bg-gray-100 hover:transition-all hover:scale-105 text-gray-200 hover:text-gray-900 cursor-pointer hover:duration-500">
          <img src="./facial-icon.png" className="w-14 h-14 bg-primary p-3 rounded-lg mb-2" alt="" />
          <h1 className="text-2xl font-medium py-3">Limpieza Facial</h1>
          <p className="">
            Limpieza profunda que elimina impurezas, puntos negros y células muertas. 
            Incluye exfoliación, extracción y mascarilla personalizada.
          </p>
        </div>
        <div className="bg-gray-700 p-10 rounded-xl hover:bg-gray-100 hover:transition-all hover:scale-105 text-gray-200 hover:text-gray-900 cursor-pointer hover:duration-500">
          <img src="./consultation-icon.png" className="w-14 h-14 bg-primary p-3 rounded-lg mb-2" alt="" />
          <h1 className="text-2xl font-medium py-3">Consulta Dermatológica</h1>
          <p className="">
            Evaluación profesional de condiciones dermatológicas como acné, rosácea, 
            psoriasis, dermatitis y diagnóstico temprano de problemas cutáneos.
          </p>
        </div>
      </div>
      {/* ********************************* */}
    </div>
  );
};

export default Services;
