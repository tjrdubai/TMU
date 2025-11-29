import React from "react";
import Section from "./Section";
import imageWhiteboard from "@/images/whiteboard.jpg";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          The Discover phase focuses on clarity. We work closely to understand 
          the brand, the market, and the operational structure behind each 
          project. This ensures every decision is aligned with real demand and 
          long-term scalability.
        </p>

        <p>
          Our team conducts detailed product and market research, analyzes 
          competition, evaluates pricing and positioning, and identifies 
          potential opportunities or gaps. This allows us to build an accurate 
          roadmap before moving into development and execution.
        </p>

        <p>
          Once the research and validation are complete, we deliver a structured 
          action plan that outlines strategy, requirements, and projected 
          timelines for the next phases.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>

      <TagList className="mt-4">
        <TagListItem>Market research</TagListItem>
        <TagListItem>Competitor analysis</TagListItem>
        <TagListItem>Product validation</TagListItem>
        <TagListItem>Operational review</TagListItem>
        <TagListItem>Positioning strategy</TagListItem>
        <TagListItem>Project roadmap</TagListItem>
      </TagList>
    </Section>
  );
};

export default Discover;
