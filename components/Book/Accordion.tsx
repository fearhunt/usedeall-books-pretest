import React, { useState } from 'react';
import { Disclosure, Transition } from '@headlessui/react';

type BookAccordionProps = {
  section: {
    title: string;
    content: string;
  }
};

const BookAccordion = (props: BookAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Disclosure as="div" className="accordion-item">
      {/* TODO Rounded sharp based on parent */}
      <Disclosure.Button onClick={() => setIsOpen(!isOpen)} className="flex w-full justify-between  px-4 py-2 transition bg-secondary bg-opacity-50 hover:bg-opacity-100 text-primary text-left text-sm font-medium focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
        <span>
          {props.section.title}
        </span>
        <span>
          {isOpen ? '-' : '+'}
        </span>
      </Disclosure.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Disclosure.Panel className="px-4 py-2 text-sm bg-secondary/20 border-t-2 border-primary/25">
          {props.section.content}
        </Disclosure.Panel>
      </Transition>
    </Disclosure>
  )
}

export default BookAccordion;