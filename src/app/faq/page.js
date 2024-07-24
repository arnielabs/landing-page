"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Faq() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <main className="dark flex flex-col items-start justify-start p-20 max-w-screen-xl mx-auto text-gray-200">
      <h2 className="text-6xl p-2 py-10"> FAQs </h2>
      <p className="mb-6 text-lg font-normal text-gray-400 p-2">
        Here at Arnie Labs, we focus on markets where technology, innovation, and
        capital can unlock long-term value and drive economic growth.
      </p>
      <Accordion variant="light">
        <AccordionItem key="1" aria-label="Accordion 1" title="What is Soundframe?">
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Where can I buy one?">
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="Does Soundframe ship to my country?">
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </main>
  );
}
