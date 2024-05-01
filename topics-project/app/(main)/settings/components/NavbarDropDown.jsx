"use client";

import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { usePathname } from "next/navigation";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Items:
// Losing Weight
// Gaining Muscle
// Power Lifting
// Maintenance

export default function NavbarDropDown() {
  const pathname = usePathname();
  const pathnameSplit = pathname.split("/");
  let currentPath = pathnameSplit[pathnameSplit.length - 1]; // get last element in array
  currentPath = currentPath.charAt(0).toUpperCase() + currentPath.slice(1);
  const [selected, setSelected] = useState(currentPath); // set current item from path on initialization

  return (
    <Menu
      as="div"
      className=" md:hidden flex relative text-left w-fit items-center justify-center"
    >
      <div>
        <Menu.Button className="inline-flex w-full justify-start pl-3 gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm  font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 border-[#4C220A]  border-2  hover:bg-gray-50">
          <div className="flex items-center justify-between w-full">
            {selected}
            <ChevronDownIcon
              className="-mr-1 h-6 w-6 text-[#4C220A]"
              aria-hidden="true"
            />{" "}
          </div>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() => {
                    setSelected("Profile");
                  }}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() => {
                    setSelected("Account");
                  }}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Account
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() => {
                    setSelected("Themes");
                  }}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Themes
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() => {
                    setSelected("Help");
                  }}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Help
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#"></form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
