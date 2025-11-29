import React from "react";
import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Values = () => {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our Values"
        title="The principles that drive Nexa Commerce"
      >
        <p>
          Our values reflect the standards we operate by. They guide every 
          decision we make — from strategy and execution to how we build 
          systems, manage operations, and scale brands. These principles are 
          embedded into our culture and the way we work every day.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Precision">
            We prioritize clarity, structure, and accuracy. Every strategy, 
            system, and decision is intentional and backed by data.
          </GridListItem>

          <GridListItem title="Efficiency">
            Speed matters, but efficiency matters more. We focus on processes 
            that reduce friction and enable rapid, scalable growth.
          </GridListItem>

          <GridListItem title="Adaptability">
            E-commerce evolves fast — so do we. Our systems, operations, and 
            strategies are designed to shift quickly with market trends.
          </GridListItem>

          <GridListItem title="Transparency">
            Clear communication and honest expectations form the core of how we 
            work internally and with partners.
          </GridListItem>

          <GridListItem title="Commitment">
            We build long-term partnerships rooted in trust, reliability, and 
            consistent delivery. When we commit, we execute.
          </GridListItem>

          <GridListItem title="Innovation">
            We continuously refine our methods, explore new opportunities, and 
            implement systems that give our brands a competitive edge.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Values;
