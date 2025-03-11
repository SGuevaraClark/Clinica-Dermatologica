import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Promotions = () => {
  return (
    <div className="my-16 bg-gradient-to-r from-purple-100 to-purple-50 rounded-xl overflow-hidden shadow-xl">
      <div className="grid md:grid-cols-2 items-center">
        <div className="p-8 md:p-16">
          <h2 className="text-xl font-medium text-purple-700 mb-3">- Oferta Especial</h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Botox Treatment <span className="text-purple-700">$800</span>
          </h1>
          <div className="space-y-4 mb-8">
            <p className="text-lg">
              Rejuvenece tu rostro con nuestro tratamiento premium de Botox aplicado por la Dra. Virginia Ramos Molina, 
              especialista con más de 15 años de experiencia en dermatología estética.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-purple-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Resultados visibles en 3-5 días
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-purple-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Duración de 4-6 meses
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-purple-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Procedimiento rápido y seguro
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-purple-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Consulta inicial gratuita
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="font-bold">
              ¡Reserva Ahora!
            </Button>
            <Button size="lg" variant="secondary" className="font-bold">
              Más Información
            </Button>
          </div>
        </div>
        <div className="relative h-96 md:h-full">
          <div className="absolute inset-0 bg-purple-800 opacity-20 z-10"></div>
          <Image
            src="/botox-treatment.jpg"
            alt="Tratamiento de Botox"
            width={800}
            height={800}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-8 right-8 bg-white p-4 rounded-full shadow-lg z-20">
            <div className="text-center">
              <span className="text-2xl font-bold text-purple-700">$800</span>
              <p className="text-xs font-medium">Oferta Limitada</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions; 