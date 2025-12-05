import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { Features } from '@/components/landing/features';
import { CourseDetails } from '@/components/landing/course-details';
import { StudentWork } from '@/components/landing/student-work';
import { Bonuses } from '@/components/landing/bonuses';
import { Pricing } from '@/components/landing/pricing';
import { DigitalBooks } from '@/components/landing/digital-books';
import { Achievements } from '@/components/landing/achievements';
import { WhoIsItFor } from '@/components/landing/who-is-it-for';
import { RealProof } from '@/components/landing/real-proof';
import { About } from '@/components/landing/about';
import { Faq } from '@/components/landing/faq';
import { Doubts } from '@/components/landing/doubts';
import { Footer } from '@/components/landing/footer';

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
        <Pricing />
        <DigitalBooks />
        <Achievements />
        <WhoIsItFor />
        <RealProof />
        <About />
        <Faq />
        <Doubts />
      </main>
      <Footer />
    </div>
  );
}
