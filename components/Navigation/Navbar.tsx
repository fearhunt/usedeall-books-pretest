import React, { Fragment, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import clsx from "clsx";

const Navbar = () => {
  const router = useRouter();

  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Bookmarks", href: "/bookmarks" },
  ]

  return (
    <Disclosure as="nav" className="bg-white shadow-lg sticky top-0 z-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <h1 className="text-primary font-bold text-3xl">
                DeallBook
                <span className="text-accent-yellow">!</span>
              </h1>
            </div>
            <div className="hidden sm:ml-6 sm:flex items-center justify-center space-x-2">
              {links.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className={clsx(
                    { "text-primary": router.pathname == link.href },
                    { "text-neutral-500 hover:text-primary/50": router.pathname != link.href },
                    "transition font-medium text-sm",
                  )}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <Disclosure.Button onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)} className="inline-flex items-center justify-center rounded-md py-1 px-2 text-black bg-secondary bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
              <span className="sr-only">Open Navbar Menu</span>

              <span className="text-primary text-sm font-medium">
                Menu
              </span>
            </Disclosure.Button>
          </div>
        </div>
      </div>

      <Disclosure.Panel className="sm:hidden">
        <div className="space-y-1 p-2">
          {links.map((link, index) => (
            <a 
              key={index}
              href={link.href}
              className={clsx(
                { "text-primary": router.pathname == link.href },
                { "text-neutral-500 hover:text-primary/50": router.pathname != link.href },
                "transition font-medium text-sm block text-right",
              )}
            >
              {link.name}
            </a>
          ))}
        </div>
      </Disclosure.Panel>
    </Disclosure>
  )
}

export default Navbar;