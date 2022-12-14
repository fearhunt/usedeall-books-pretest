import React, { Fragment, useState, useEffect } from 'react';
import Image from "next/image";
import { Dialog, Transition } from '@headlessui/react';
import clsx from "clsx";

import BookAccordion from "./Accordion";

type Book = {
  id: number;
  title: string;
  category_id: number;
  authors: string[];
  cover_url: string;
  description: string;
  sections: {
    title: string;
    content: string;
  }[];
  audio_length: number;
}

type BookModalProps = {
  isOpen: boolean;
  content: Book;
  isBookmarkedContent: boolean;
  handleCloseModal: () => void;
  handleBookmark: (book: Book) => void;
  handleUnbookmark: (title: string) => void;
}

const BookModal = (props: BookModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(props.isOpen);
  }, [props.isOpen]);

  const toggleBookmark = () => {
    if (!props.isBookmarkedContent) {
      props.handleBookmark(props.content);
    } else {
      props.handleUnbookmark(props.content.title);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => props.handleCloseModal()}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-lg transition-all">
                <div className="flex justify-between mb-4">
                  <Dialog.Title as="h6" className="text-lg md:text-xl font-bold leading-6 text-primary">
                    Book Detail
                  </Dialog.Title>
                  <button
                    type="button"
                    onClick={() => props.handleCloseModal()}
                    className="border border-transparent font-medium text-right text-sm text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2"
                  >
                    X
                  </button>
                </div>

                <div className="mt-2 text-center">
                  <Image src={props.content.cover_url} alt={`${props.content.title} by ${(props.content.authors).join(", ")}`} width={400} height={600} className="rounded-lg mx-auto shadow-xl mb-6" />
                  <h4 className="text-2xl md:text-4xl font-bold bg-usedeall-gradient-0 bg-clip-text text-transparent">
                    {props.content.title}
                  </h4>
                  <p className="text-md md:text-lg font-medium text-gray-500">
                    {(props.content.authors).join(", ")}
                  </p>
                </div>

                <hr className="my-4 h-1 bg-gray-200 border-0" />

                <button 
                  onClick={() => toggleBookmark()} 
                  className={clsx(
                    "px-3 py-1 border-2 rounded-lg border-accent-blue/75 transition font-medium text-sm hover:shadow-md",
                    { "bg-accent-blue text-white": props.isBookmarkedContent }
                  )}
                >
                  {props.isBookmarkedContent ? 'Book saved ???' : 'Save this book'}
                </button>

                <div className="mt-2">
                  <h5 className="font-medium mb-2">Description</h5>

                  <p className="text-sm text-justify">
                    {props.content.description}
                  </p>
                </div>

                <div className="mt-4">
                  <h5 className="font-medium mb-2">Sections</h5>

                  <div className="border border-secondary rounded-lg divide-y-2 divide-primary/25">
                    {props.content.sections.map((section: any, index: number) => (
                      <BookAccordion key={index} section={section} />
                    ))}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default BookModal;
