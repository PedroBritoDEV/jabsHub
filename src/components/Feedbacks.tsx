"use client";

import React from "react";
import { Quote } from "lucide-react";
import { motion } from "motion/react";

interface Feedback {
  name: string;
  position: string;
  imgUrl : string;
  comment: string;
}

const feedbacks: Feedback[] = [
  {
    name: "Bruno Costa",
    position: "Consultor de Consórcios",
    imgUrl: 'bruno',
    comment:
      '"Lista muito completa! Só tenho a agradecer, estava buscando opções acessíveis no mercado e achei vocês, vendi 3 milhões de consórcio esse semana para dois empresários já, fora as negociações em andamento”',
  },
  {
    name: "Marcos Silva",
    position: "Representante Comercial",
    imgUrl: 'marcos',
    comment:
      '"Fala pessoal do DuarteHub! Só passando pra dar um feedback do primeiro mês de uso. Com a lista regional que pegamos, conseguimos mapear 54 novos clientes potenciais aqui que nem sabíamos que tinham aberto. Fechamos 2 contratos logo na primeira semana de abordagem. O investimento se pagou em 3 dias. Recomendo muito!"',
  },
  // Adicione mais feedbacks aqui
];

const Feedbacks: React.FC = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Feedbacks
        </h2>
        <div className="flex flex-wrap justify-center gap-8 cursor-default">
          {feedbacks.map((feedback, index) => (
            <motion.div
              key={index}
              className=" backdrop-blur-sm border border-white/20 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(50%-1.333rem)]"
              whileHover={{ scale: 1.03, y: -3 }}
              transition={{ duration: 0.25 }}
            >
              <Quote className="text-primary w-8 h-8 mb-4" />

              <p className="text-gray-200 mb-4 leading-relaxed">
                {feedback.comment}
              </p>

              <div className="border-t  border-white/20 pt-4 mt-auto flex items-center gap-4">
                    <img className="rounded-full w-10 h-10" src={`${feedback.imgUrl}.jpg`}  alt={feedback.imgUrl} />

                  <div className="">
                    <p className="font-semibold">{feedback.name}</p>
                    <p className="text-primary text-sm">{feedback.position}</p>
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedbacks;
