import Link from "next/link";

export default function Nav() {
  return (
    <div className="p-4 mx-auto">
      <div className="grid md:grid-cols-3 container mx-auto md:justify-between">
       <div className="flex justify-center md:justify-none my-4 md:block md:flex text-white">
          <div className="relative my-4">
            <Link href="/">
              <a className="button hover:underline z-10 pr-4 pl-4 block text-black pt-3 p-2 mr-4">
                Blog
              </a>
            </Link>
          </div>
        </div>

        <div className="flex items-center text-center justify-between">

          <Link href="/">
            <a className="mx-auto">
              <h1 className="logo font-extrabold text-3xl">Elliot Forbes</h1>
            </a>
          </Link>

          <div className="hidden">
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
        <div className="md:block items-center text-white">
          <div className="md:float-right flex justify-center md:justify-none my-8 md:my-4">
            <Link href="https://twitter.com/elliot_f">
              <a className="button z-10 pr-4 pl-4 block text-black pt-3 p-2 mr-4">
                <img src="/twitter.svg" alt="twitter icon" />
              </a>  
            </Link>
            <Link href="https://www.instagram.com/elliot_forbes">
              <a className="button z-10 pr-4 pl-4 block text-black pt-3 p-2 mr-4">
                <img src="/instagram.svg" alt="instagram icon" />
              </a>
            </Link>
            <Link href="https://www.youtube.com/tutorialedge">
              <a className="button z-10 pr-4 pl-4 block text-black pt-3 p-2 mr-4">
                <img src="/youtube.svg" alt="youtube icon" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
