import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About Nexa Commerce" title="Built on precision, scale, and execution">
        <p>
          Nexa Commerce is a Dubai–based e-commerce operation designed around one core value:
          exceptional execution. From digital infrastructure and product systems to marketing,
          logistics, and brand development — every part of our work is built to deliver results.
        </p>

        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            We operate as a full ecosystem — research, operations, marketing, creative, and
            performance management under one unified structure. This allows us to scale products
            rapidly, optimize processes fast, and maintain high standards across all stores and brands.
          </p>

          <p>
            Our focus is simple: build efficient systems, make data-driven decisions, and execute
            with consistency. Nexa Commerce works with a growing network of talent, partners, and
            operators, providing them with a powerful digital infrastructure and proven systems to
            help them grow.
          </p>

          <p>
            Today, Nexa Commerce manages multiple e-commerce brands across various categories,
            maintains a strong digital presence, and continues expanding operations across the UAE
            and globally. We believe in long-term growth, transparency, and creating an environment
            where high-performers thrive.
          </p>
        </div>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="12+" label="Active e-commerce brands" />
          <StatListItem value="40+" label="Team members & collaborators" />
          <StatListItem value="UAE & Global" label="Operational footprint" />
        </StatList>
      </Container>

      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
