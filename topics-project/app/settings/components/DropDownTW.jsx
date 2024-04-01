import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Losing Weight
// Gaining Muscle
// Power Lifting
// Maintenance

export default function DropDownTW({ formData, handleFormChange, goalOnInit }) {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    setSelected(goalOnInit);
  }, [goalOnInit]);

  return (
    <Menu as="div" className="relative inline-block text-left w-[200px] mt-2  ">
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
                    setSelected("Losing Weight");
                    formData.goal = "Losing Weight";
                  }}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Losing Weight
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() => {
                    setSelected("Gaining Muscle");
                    formData.goal = "Gaining Muscle";
                  }}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Gaining Muscle
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() => {
                    setSelected("Power Lifting");
                    formData.goal = "Power Lifting";
                  }}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Power Lifting
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={() => {
                    setSelected("Maintenance");
                    formData.goal = "Maintenance";
                  }}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Maintenance
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
