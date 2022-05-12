import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-gray-100 p-16 mt-16 border-2 border-gray-200 justify-center flex">
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
  );
}
