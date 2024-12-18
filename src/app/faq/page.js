"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Faq() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <main className="flex flex-col items-start justify-start  md:p-20 p-7 max-w-screen-xl mx-auto text-foreground">
      <h2 className="text-6xl p-2 py-10 text-foreground"> FAQs </h2>
      <p className="mb-6 text-lg font-normal p-2">
        Welcome to our FAQ section! We’ve compiled answers to the few common
        questions about our products and services. If you don’t find what you’re looking
        for here, feel free to reach out to us through any contact channels.
      </p>
      <Accordion variant="light">
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="What is Soundframe?"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title="Where can I buy one?"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title="Does Soundframe ship to my country?"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="4"
          aria-label="Accordion 3"
          title="My query is not listed here"
        >
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </main>
  );
}
