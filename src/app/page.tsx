import Hero from "@/components/Hero";
import Festivals from "@/components/Festivals";
import TopDestinations from "@/components/TopDestinations";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Hero />
      <Festivals />
      <TopDestinations />
      <Testimonials />
    </main>
  );
}
