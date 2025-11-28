import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { TargetAudience } from '@/components/landing/target-audience';
import { WhatYouWillLearn } from '@/components/landing/what-you-will-learn';
import { Testimonials } from '@/components/landing/testimonials';
import { Bonuses } from '@/components/landing/bonuses';
import { Pricing } from '@/components/landing/pricing';
import { Guarantee } from '@/components/landing/guarantee';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <TargetAudience />
        <WhatYouWillLearn />
        <Bonuses />
        <Testimonials />
        <Pricing />
        <Guarantee />
      </main>
      <Footer />
    </div>
  );
}
