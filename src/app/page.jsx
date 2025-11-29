import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Building scalable e-commerce brands with precision and execution.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Nexa Commerce is a Dubai-based e-commerce ecosystem focused on building, 
            scaling, and optimizing digital brands. We combine strong operational 
            systems, data-driven decision-making, and performance-focused marketing to 
            create sustainable growth across multiple online stores and categories.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Phobia", logo: logoPhobiaDark }}
      >
        Nexa Commerce demonstrated exceptional clarity, structure, and execution
        throughout our onboarding. Their operational systems and strategic 
        approach made the entire process seamless and results-focused.
      </Testimonials>

      <Services />

      <ContactSection />
    </main>
  );
}
