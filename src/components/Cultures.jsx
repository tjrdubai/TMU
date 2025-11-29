import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our Culture"
        title="A team built on clarity, responsibility, and high standards."
        invert
      >
        <p>
          At Nexa Commerce, our culture is defined by accountability, structured 
          systems, and a shared commitment to excellence. We move fast, operate 
          with intention, and value people who take ownership.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <GridList>
          <GridListItem title="Loyalty" invert>
            We build long-term relationships with people who are committed, 
            reliable, and aligned with our mission. Loyalty is earned through 
            consistent performance and shared ambition.
          </GridListItem>

          <GridListItem title="Trust" invert>
            Trust is built through clarity, transparency, and responsibility. 
            Every team member understands their role, their targets, and the 
            standards we operate by.
          </GridListItem>

          <GridListItem title="Execution" invert>
            We prioritize action over talk. Our culture rewards people who can 
            take ideas, turn them into systems, and execute with precision.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
