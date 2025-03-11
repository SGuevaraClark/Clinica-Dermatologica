import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="pb-20">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-xl font-medium pb-3">- Preguntas Frecuentes</h2>
          <h1 className="text-4xl font-semibold py-3">
            Respuestas a sus <span>Dudas</span>
          </h1>
          <p className="text-lg my-6">
            Aquí encontrará respuestas a las preguntas más comunes sobre nuestros servicios y tratamientos, 
            incluyendo nuestro exclusivo tratamiento de Botox por $800.
          </p>
          <div className="bg-purple-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">¿Necesita más información?</h3>
            <p className="mb-4">
              Estamos para ayudarle. Contáctenos directamente y responderemos todas sus preguntas.
            </p>
            <div className="flex space-x-4">
              <a href="tel:+12345678" className="text-purple-700 font-medium hover:underline">
                (123) 456-7890
              </a>
              <a href="mailto:info@dravirginiaramos.com" className="text-purple-700 font-medium hover:underline">
                info@dravirginiaramos.com
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                ¿En qué consiste el tratamiento de Botox por $800?
              </AccordionTrigger>
              <AccordionContent>
                Nuestro tratamiento premium de Botox por $800 incluye la aplicación profesional 
                realizada por la Dra. Virginia Ramos Molina, con producto de la más alta calidad. 
                El tratamiento cubre las principales áreas de expresión: entrecejo, patas de gallo 
                y frente, con resultados visibles en 3-5 días y una duración de 4-6 meses.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                ¿Cuáles son los beneficios del tratamiento de Botox?
              </AccordionTrigger>
              <AccordionContent>
                El Botox reduce visiblemente las arrugas y líneas de expresión, rejuveneciendo 
                el rostro sin cirugía. Ayuda a prevenir la formación de nuevas arrugas, es un 
                procedimiento rápido (15-20 minutos), no requiere tiempo de recuperación y los 
                resultados son naturales cuando es aplicado por profesionales como la Dra. Virginia Ramos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                ¿Qué incluyen los servicios de Dr. Face?
              </AccordionTrigger>
              <AccordionContent>
                Dr. Face incluye todos nuestros tratamientos faciales avanzados: Botox ($800), 
                rellenos dérmicos, rejuvenecimiento facial, tratamientos para acné, manchas, 
                rosácea y procedimientos estéticos como limpieza facial profunda, peeling químico, 
                microdermoabrasión y tratamientos con láser para mejorar la textura y apariencia de la piel.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                ¿Cómo funcionan los servicios de Dr. Metabolismo?
              </AccordionTrigger>
              <AccordionContent>
                Dr. Metabolismo ofrece programas personalizados para mejorar su salud metabólica. 
                Incluye evaluación médica completa, análisis de composición corporal, plan nutricional 
                individualizado, seguimiento regular y ajustes al programa según sus avances. Es ideal 
                para personas que buscan mejorar su salud general, perder peso o manejar condiciones 
                como diabetes o hipertensión.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                ¿Es necesario agendar cita para los tratamientos?
              </AccordionTrigger>
              <AccordionContent>
                Sí, todos nuestros tratamientos, incluyendo el Botox por $800, requieren cita previa 
                para garantizar la disponibilidad de la Dra. Virginia Ramos y asegurar un servicio 
                personalizado. Puede agendar su cita por teléfono, a través de nuestro sitio web 
                o visitando nuestra clínica. Ofrecemos una consulta inicial gratuita para nuevos pacientes.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
