"use client";
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Lock } from 'lucide-react';
import Image from 'next/image';

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 42, seconds: 58 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime.seconds > 0) {
                    return { ...prevTime, seconds: prevTime.seconds - 1 };
                }
                if (prevTime.minutes > 0) {
                    return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
                }
                if (prevTime.hours > 0) {
                    return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
                }
                return prevTime; // timer stops at 00:00:00
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    
    const formatTime = (time: number) => time.toString().padStart(2, '0');

    return (
        <div className="text-center mt-8">
            <p className="text-lg font-medium text-gray-700">⏳ Esta Oferta Finaliza Em:</p>
            <div className="mt-2 text-4xl font-bold text-primary flex items-center justify-center space-x-2">
                <div className="bg-white p-3 rounded-lg shadow-md">
                    <span>{formatTime(timeLeft.hours)}</span>
                    <p className="text-sm font-normal">Horas</p>
                </div>
                <span>:</span>
                <div className="bg-white p-3 rounded-lg shadow-md">
                    <span>{formatTime(timeLeft.minutes)}</span>
                    <p className="text-sm font-normal">Minutos</p>
                </div>
                <span>:</span>
                <div className="bg-white p-3 rounded-lg shadow-md">
                    <span>{formatTime(timeLeft.seconds)}</span>
                    <p className="text-sm font-normal">Segundos</p>
                </div>
            </div>
        </div>
    );
};


export const Pricing = () => {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-sm font-bold uppercase tracking-wider text-primary">⭐ Como acessar a promoção?</h2>
            <p className="mt-4 text-lg text-gray-600">
            Uma vez realizado o pagamento, você receberá acesso imediato ao curso completo + todos os bônus adicionais direto no seu e-mail. Você poderá assistir no celular, tablet ou computador, de onde quiser.
            </p>
        </div>

        <div 
            className="mt-10 max-w-md mx-auto bg-white rounded-2xl shadow-2xl border-2 border-primary overflow-hidden relative"
        >
            <Image
                src="https://nwuievvpcjrmecujwfox.supabase.co/storage/v1/object/public/media/0.8006452504769752.png"
                alt="fundo da oferta"
                layout="fill"
                objectFit="cover"
                className="opacity-10"
            />
            <div className="p-8 relative">
                <p className="font-bold text-gray-500">📦 O QUE VOCÊ VAI RECEBER?</p>
                <p className="mt-4 text-gray-500 line-through text-2xl">Todo esse conteúdo somaria: R$ 279,00</p>
                <p className="mt-2 text-sm font-bold uppercase text-primary">🎉 VALOR ESPECIAL, SOMENTE HOJE:</p>
                <div className="my-2 flex items-center justify-center">
                  <p className="text-6xl md:text-7xl font-black text-primary">
                     R$ 29,90
                  </p>
                </div>
                <p className="text-gray-600 mt-4">
                    Aproveite esta oportunidade! Ao final da oferta, o valor retornará para R$ 279,00. Garanta agora o acesso completo com todas as aulas, bônus e certificado por um preço único.
                </p>

                <Button
                    asChild
                    className="w-full h-14 text-lg font-bold bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 mt-6"
                >
                    <a href="https://pay.kirvano.com/0b5d35b6-1af5-43b0-bed7-9640d6f5569f">
                        QUERO ACESSAR AGORA
                    </a>
                </Button>
                <div className="mt-4 flex items-center justify-center text-sm text-gray-500">
                    <Lock className="w-4 h-4 mr-2 text-green-600"/>
                    <span>COMPRA 100% SEGURA</span>
                </div>
                 <div className="mt-2 flex items-center justify-center text-sm text-gray-500">
                    <span>🌎 DISPONÍVEL PARA TODO O BRASIL</span>
                </div>
            </div>
             <div className="bg-gray-100/80 p-6 relative">
                <CountdownTimer />
            </div>
        </div>
      </div>
    </section>
  );
};
