import type { Metadata } from 'next';
import { VideoHero } from '@/components/sections/video-hero';
import { AssuranceBanner } from '@/components/sections/assurance-banner';
import { HomeServicesPreview } from '@/components/sections/home-services-preview';
import { HomeTestimonials } from '@/components/sections/home-testimonials';
import { Process } from '@/components/sections/process';
import { PricingHighlights } from '@/components/sections/pricing-highlights';
import { TrustBadges } from '@/components/sections/trust-badges';
import { FaqPreview } from '@/components/sections/faq-preview';
import { Location } from '@/components/sections/location';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { Promotions } from '@/components/sections/promotions';

export const metadata: Metadata = {
  title: 'Accueil',
};

export default function HomePage() {
  return (
    <>
      <VideoHero />
      <Promotions />
      <AssuranceBanner />
      <HomeServicesPreview />
      <Process />
      <WhyChooseUs />
      <HomeTestimonials />
      <FaqPreview />
      <Location />
    </>
  );
}
