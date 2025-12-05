"use client";
import { CheckCircle } from "lucide-react";
import React from "react";

const benefits = [
    { title: "Técnicas Simplificadas", description: "Mesmo que você nunca tenha trabalhado com resina antes, vai conseguir criar peças lindas e bem acabadas." },
    { title: "Resultados Rápidos", description: "Com o passo a passo detalhado, você já consegue criar suas primeiras peças na primeira semana." },
    { title: "Economia de Material", description: "Aprenda a dosagem correta e os truques para não desperdiçar resina e outros materiais caros." },
    { title: "Acabamento Perfeito", description: "Domine as técnicas de lixamento e polimento para deixar suas peças com brilho de vidro." },
    { title: "Negócio Lucrativo", description: "Descubra como precificar, divulgar e vender suas criações, transformando seu hobby em uma fonte de renda." },
    { title: "Acesso Vitalício", description: "Assista às aulas no seu ritmo, quantas vezes quiser, e tenha acesso a todas as futuras atualizações." },
];

export const Benefits = () => {
    return (
        <section id="benefits" className="py-16 sm:py-24 bg-rose-50/50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-serif">
                        Benefícios do Curso
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        O que você ganha ao se inscrever no Jóias Botânicas - O Passo a Passo:
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <CheckCircle className="w-8 h-8 text-rose-500 mb-4" />
                            <h3 className="font-bold text-xl text-gray-800 font-serif">{benefit.title}</h3>
                            <p className="mt-2 text-gray-600">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
