import Link from "next/link";

export default function Nav() {
  return (
    <div className="p-4">
      <div className="flex-none md:flex container mx-auto md:justify-between">
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="mr-4">
              <h1 className="logo text-2xl">Elliot Forbes</h1>
            </a>
          </Link>

          <div className="md:hidden">
            <button
              click="isOpen = !isOpen"
              type="button"
              aria-label="expand mobile menu"
              className="text-gray-200 focus:text-white focus:outline-hidden"
            >
              <svg
                className="block h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  v-if="!isOpen"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  v-if="isOpen"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="md:block md:flex text-white">
          <div className="relative my-4">
            <Link href="/register">
              <a className="button z-10 pr-4 pl-4 block text-black pt-3 p-2 mr-4">
                Contact
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
