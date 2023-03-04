import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { Transition } from "@headlessui/react";

const menuItems = [
  { name: "Home", url: "#" },
  { name: "About", url: "#" },
  { name: "Contact", url: "#" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 shadow-lg bg-white bg-opacity-90 backdrop-blur-sm backdrop-filter w-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="font-bold text-4xl">Indranil Roy</span>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-black transition duration-1000 ease-in-out "
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <MdClose className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MdMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  className="px-3 py-2 border border-gray-300 rounded-3xl font-medium hover:bg-gray-100  mx-2"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" ref={ref}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  className="block px-3 pl-5 py-2 rounded-md text-base font-medium hover:bg-gray-100"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default Navbar;
