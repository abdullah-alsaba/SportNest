import SimpleNavbar from '@/components/layout/SimpleNavbar'
import SimpleFooter from '@/components/layout/SimpleFooter'
import HeroSection from '@/components/home/HeroSection'
import WhyChooseSection from '@/components/home/WhyChooseSection'
import FeaturedFacilities from '@/components/home/FeaturedFacilities'
import HowItWorksSection from '@/components/home/HowItWorksSection'

export default function HomePage() {
  return (
    <>
      <div className="relative">
        <SimpleNavbar transparent />
        <HeroSection />
      </div>
      <WhyChooseSection />
      <FeaturedFacilities />
      <HowItWorksSection />
      <SimpleFooter />
    </>
  )
}
