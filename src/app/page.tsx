import { Benefits } from '@/components/landing/benefits';
import { Bonuses } from '@/components/landing/bonuses';
import { Faq } from '@/components/landing/faq';
import { Footer } from '@/components/landing/footer';
import { Guarantee } from '@/components/landing/guarantee';
import { Hero } from '@/components/landing/hero';
import { Instructor } from '@/components/landing/instructor';
import { Pricing } from '@/components/landing/pricing';
import { StudentResults } from '@/components/landing/student-results';
import { WhatYouWillLearn } from '@/components/landing/what-you-will-learn';
import { FinalCta } from '@/components/landing/final-cta';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <main>
        <Hero />
        <WhatYouWillLearn />
        <StudentResults />
        <Benefits />
        <Instructor />
        <Bonuses />
        <Pricing />
        <Guarantee />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
