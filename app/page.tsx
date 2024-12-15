import HeroSection from '@/components/sections/HeroSection';
import CarCollection from '@/components/sections/CarCollection';
import BrandsSection from '@/components/sections/BrandsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AccessoriesSection from '@/components/sections/AccessoriesSection';
import NewsSection from '@/components/sections/NewsSection';
import WhyChooseUs from '@/components/sections/WhyChooseUs';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CarCollection />
      <BrandsSection />
      <ServicesSection />
      <AccessoriesSection />
      <NewsSection />
      <WhyChooseUs />
    </main>
  );
}