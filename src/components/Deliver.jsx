import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/meeting.jpg";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          The Deliver phase is where systems, strategy, and operations come
          together. Once the build is complete, we transition into final 
          testing, optimization, and deployment — ensuring every store, 
          product, and campaign performs reliably from day one.
        </p>

        <p>
          Our team reviews performance flows, validates tracking, refines 
          creative assets, and prepares launch frameworks across marketing 
          channels. This stage focuses on stability, speed, and ensuring the 
          infrastructure is ready to scale without friction.
        </p>

        <p>
          By the time we deliver, all essential pages, features, and systems 
          are fully functional. Post-launch improvements, scaling strategies, 
          and continuous optimization are handled through our ongoing 
          performance and support structure.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>

      <List>
        <ListItem title="Testing">
          Comprehensive testing across devices, browsers, analytics events, 
          checkout flows, and store performance to ensure a smooth launch 
          without bottlenecks.
        </ListItem>

        <ListItem title="Infrastructure">
          Deployment on a stable, scalable e-commerce infrastructure with 
          optimized hosting, integrations, and tracking frameworks ready for 
          real-world traffic.
        </ListItem>

        <ListItem title="Support">
          Direct operational support during launch, plus structured guidance on 
          scaling, optimization, campaign setup, and ongoing performance 
          management.
        </ListItem>
      </List>
    </Section>
  );
};

export default Deliver;
