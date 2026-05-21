import HeroSection from '@/components/home/HeroSection'
import WhyChooseSection from '@/components/home/WhyChooseSection'
import FeaturedFacilities from '@/components/home/FeaturedFacilities'
import HowItWorksSection from '@/components/home/HowItWorksSection'

export default function HomePage() {
  return (
    <>
      <div className="relative -mt-16">
        <HeroSection />
      </div>
      <WhyChooseSection />
      <FeaturedFacilities />
      <HowItWorksSection />
    </>
  )
}
