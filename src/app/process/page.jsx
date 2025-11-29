import Build from "@/components/Build";
import ContactSection from "@/components/ContactSection";
import Deliver from "@/components/Deliver";
import Discover from "@/components/Discover";
import PageIntro from "@/components/PageIntro";
import Values from "@/components/Values";
import React from "react";

const ProcessPage = () => {
  return (
    <>
      <PageIntro eyebrow="Our Process" title="How we operate at Nexa Commerce">
        <p>
          Our approach is built on clarity, precision, and execution. Every project follows a 
          structured system designed to identify opportunities, build efficiently, and scale with 
          consistency. This process allows us to move fast, minimize operational waste, and deliver 
          long-term results across all our e-commerce brands.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        {/* Discover */}
        <Discover />

        {/* Build */}
        <Build />

        {/* Deliver */}
        <Deliver />
      </div>

      {/* Values */}
      <Values />

      <ContactSection />
    </>
  );
};

export default ProcessPage;
