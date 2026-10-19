import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/Howitworks'
import CallToAction from '../components/CallToCollection'
import Service from '../components/Services'

export default function Home() {
  return (
    <>
      <Hero />
      <Service/>
      <Features />
      <HowItWorks />
      <CallToAction />
      
    </>
  )
}