import { useEffect, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { Transition } from "@headlessui/react";

const menuItems = [
  { name: "Home", url: "#" },
  { name: "Skills", url: "#skills" },
  { name: "About", url: "#about" },
  { name: "Contact", url: "#contact" },
];

function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 md:h-24 md:py-4 w-screen overflow-hidden h-16 
    ${hasScrolled &&
        "shadow-lg bg-white bg-opacity-90 backdrop-blur-sm backdrop-filter"
        }
 
  `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className="font-bold text-2xl sm:text-4xl">Indranil Roy</span>

          <button class="bg-gray-800 text-white font-medium py-2 px-4 rounded-3xl hover:bg-gray-700 focus:outline-none focus:bg-gray-700 active:bg-gray-900 sm:py-3 sm:px-6 lg:py-4 lg:px-8">
            Connect
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
