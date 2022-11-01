import React, { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'

type BookModalProps = {
  isOpen: boolean;
  content: any;
  handleCloseModal: () => void;
}

const BookModal = (props: BookModalProps) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    setIsOpen(props.isOpen);
  }, [props.isOpen])

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => props.handleCloseModal()}>
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
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-lg transition-all">
                <div className="flex justify-between">
                  <Dialog.Title as="h6" className="text-lg font-bold leading-6 text-primary">
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
                {/* <div className="mt-2">
                  <Image src={props.content.cover_url} alt={`${props.content.title} by ${(props.content.authors).join(", ")}`} width={400} height={600} className="rounded-lg shadow-xl -mt-24 mb-4" />
                  <h5 className="text-md md:text-xl text-white font-bold truncate">
                    {props.content.title}
                  </h5>
                  <p className="text-white text-xs md:text-sm truncate">
                    {(props.content.authors).join(", ")}
                  </p>
                </div> */}

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default BookModal;