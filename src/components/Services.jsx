import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Building the systems and infrastructure behind scalable e-commerce brands."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Nexa Commerce provides end-to-end solutions that combine strong 
          operational systems, digital strategy, high-performance marketing, 
          and precise execution. Our focus is building sustainable, 
          revenue-driven online brands across multiple categories.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>

          {/* List items */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="E-commerce Store Development">
              Shopify and custom storefront development built with speed, 
              conversion, and scalability in mind. Optimized layouts, 
              brand-aligned design, and performance-ready infrastructure.
            </ListItem>

            <ListItem title="Performance Marketing Systems">
              Full-funnel Meta, TikTok, and Google advertising setup, including 
              tracking frameworks, creative systems, testing structures, and 
              scalable campaign architectures.
            </ListItem>

            <ListItem title="Brand & Product Strategy">
              Product research, positioning, offer creation, competitor analysis, 
              and branding systems that build trust and drive real purchasing intent.
            </ListItem>

            <ListItem title="Operational Infrastructure">
              Order fulfillment workflows, customer experience systems, backend 
              automation, and performance dashboards designed for fast, reliable 
              daily operations.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
