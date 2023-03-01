import React from "react";

const Navbar = () => {
  return (
    <nav class="sticky top-0 z-50 bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <span class="text-white font-bold text-xl">Indranil Roy</span>
          </div>
          <div class="-mr-2 flex md:hidden">
            <button
              type="button"
              class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>

              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div class="hidden md:block">
            <div class="flex items-center">
              <a
                href="#"
                class="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-800"
              >
                Home
              </a>
              <a
                href="#"
                class="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-800"
              >
                About
              </a>
              <a
                href="#"
                class="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-800"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
