import { Hero } from '@/components/landing/hero';
import { Features } from '@/components/landing/features';
import { CourseDetails } from '@/components/landing/course-details';
import { StudentWork } from '@/components/landing/student-work';
import { Bonuses } from '@/components/landing/bonuses';
import { Pricing } from '@/components/landing/pricing';
import { About } from '@/components/landing/about';
import { Faq } from '@/components/landing/faq';
import { FinalCta } from '@/components/landing/final-cta';
import { Doubts } from '@/components/landing/doubts';
import { RealProof } from '@/components/landing/real-proof';
import { Footer } from '@/components/landing/footer';
import { Header } from '@/components/landing/header';
import { Achievements } from '@/components/landing/achievements';
import { DigitalBooks } from '@/components_new/landing/digital-books';
import { WhoIsItFor } from '@/components_new/landing/who-is-it-for';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <CourseDetails />
        <StudentWork />
        <Bonuses />
        <DigitalBooks />
        <Achievements />
        <WhoIsItFor />
        <RealProof />
        <Pricing />
        <About />
        <Faq />
        <Doubts />
      </main>
      <Footer />
    </div>
  );
}
