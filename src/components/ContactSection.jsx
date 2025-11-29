import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import Button from "./Button";
import Offices from "./Offices";

const ContactSection = () => {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
            Connect with Nexa Commerce
          </h2>
          <p className="mt-4 text-neutral-400 max-w-xl text-base">
            Whether you're looking to partner with us, explore opportunities, or 
            learn more about our ecosystem, our team is here to support you.
          </p>

          <div className="mt-8 flex">
            <Button href={"/contact"} invert>
              Get in Touch
            </Button>
          </div>

          <div className="mt-12 border-t border-white/10 pt-10">
            <h3 className="font-display text-base font-semibold text-white">
              Our Offices
            </h3>
            <Offices
              invert
              className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
            />
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};

export default ContactSection;
