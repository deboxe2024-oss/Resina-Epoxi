"use client";
import { CheckCircle2 } from "lucide-react";
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


export const Benefits = () => {
    return (
        <section id="benefits" className="py-16 sm:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        🌟 Benefícios do Curso
                    </h2>
                </div>
                 <div className="mt-12 flex justify-center">
                    <Image 
                        src="https://resinaemcasa.netlify.app/_next/image?url=https%3A%2F%2Fkdloteojnkcjblhoirea.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fpublic-files%2F0.029067124058376304.jpg&w=2048&q=75"
                        alt="Benefícios do curso"
                        width={800}
                        height={450}
                        className="rounded-lg shadow-lg"
                    />
                </div>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <CheckCircle2 className="w-8 h-8 text-green-500 mb-4" />
                            <h3 className="font-bold text-xl text-gray-800">{benefit.title}</h3>
                            <p className="mt-2 text-gray-600">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
