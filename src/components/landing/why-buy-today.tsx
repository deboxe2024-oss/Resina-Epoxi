"use client";

import React from 'react';

export const WhyBuyToday = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div style={{background: '#fff5f5', borderLeft: '4px solid #ff0066', padding: '24px', margin: '20px 0', borderRadius: '12px'}}>
          <h2 style={{marginBottom: '10px', color: '#b60033', fontFamily: "'Poppins', sans-serif"}} className="text-3xl font-bold">🔥 Por que Comprar Hoje?</h2>
          <p style={{marginBottom: '10px'}} className="text-gray-700">
            Se você está aqui agora, não é por acaso. Você já demonstrou interesse em aprender resina,
            criar peças lindas e talvez até transformar isso em uma renda extra. O que separa quem começa
            dos que continuam apenas assistindo vídeos é a decisão de dar o primeiro passo.
          </p>
          <ul style={{marginLeft: '18px', lineHeight: 1.5}} className="space-y-2 text-gray-700 list-disc list-inside">
            <li><b>O valor atual é promocional</b> — esta oferta pode voltar para R$ 399,90 a qualquer momento.</li>
            <li><b>Os 6 bônus exclusivos</b> (fornecedores, moldes, luminárias, checklist, vendas e certificado)
            podem ser removidos a qualquer hora.</li>
            <li>Você economiza meses de tentativas erradas, materiais desperdiçados e frustração.</li>
            <li>Começa hoje mesmo, sem depender de ninguém e sem precisar de experiência.</li>
            <li>Quanto antes você começar, mais rápido terá peças prontas para <b>vender e lucrar.</b></li>
          </ul>
          <p style={{marginTop: '12px', fontWeight: 'bold', color: '#b60033'}} className="text-lg">
            Adiar pode custar mais caro. Aproveite enquanto está aberto por esse valor.
          </p>
        </div>
      </div>
    </section>
  );
};
