"use client";
import { CheckCircle } from "lucide-react";
import React from "react";
import Image from "next/image";

const benefits = [
    { title: "Aprenda rápido, mesmo começando do zero", description: "Aulas simples, práticas e 100% em vídeo." },
    { title: "Evite erros de iniciante", description: "Você aprende exatamente o que fazer (e o que não fazer) para não perder material." },
    { title: "Peças realmente bonitas e profissionais", description: "Técnicas que deixam suas criações com brilho, cor e acabamento impecável." },
    { title: "Economize tempo e dinheiro", description: "Aprenda a usar os materiais certos, misturar do jeito certo e gastar menos." },
    { title: "Crie vários tipos de peças", description: "Joias, porta-copos, luminárias, geodos, chaveiros e muito mais." },
    { title: "Resultados rápidos", description: "Você consegue criar suas primeiras peças ainda na primeira semana." },
    { title: "Transforme em renda extra", description: "Estratégias para divulgar, fotografar e vender suas peças com lucro." },
    { title: "Curso para fazer no seu ritmo", description: "Assista quando quiser, de casa, sem pressão ou prazos." },
    { title: "Acesso imediato e vitalício", description: "Entre agora e comece a aprender hoje mesmo." },
];

const benefitImages = [
    "https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.5872215207087303.jpg",
    "https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.1951684280195365.png",
    "https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.5111575120561582.jpg",
    "https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.862953732043286.jpg",
    "https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.6269668836051501.jpg",
    "https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.90968985320192.jpg",
];


export const Benefits = () => {
    return (
        <section id="benefits" className="py-16 sm:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        🌟 Benefícios do Curso
                    </h2>
                </div>
                 <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
                    {benefitImages.map((src, index) => (
                        <Image 
                            key={index}
                            src={src}
                            alt={`Exemplo de peça de resina ${index + 1}`}
                            width={400}
                            height={400}
                            className="rounded-lg shadow-lg object-cover aspect-square"
                        />
                    ))}
                </div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
                            <h3 className="font-bold text-xl text-gray-800">{benefit.title}</h3>
                            <p className="mt-2 text-gray-600">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
