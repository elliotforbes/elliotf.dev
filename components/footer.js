import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <div className="bg-gray-100 p-16 mt-16 border-2 border-gray-200 justify-center flex">
        <Link href="https://twitter.com/elliot_f">
            <a className="button z-10 pr-4 pl-4 block text-black pt-3 p-2 mr-4">
            <FontAwesomeIcon icon={faTwitter}/>
            </a>  
        </Link>
        <Link href="https://www.instagram.com/elliot_forbes">
            <a className="button z-10 pr-4 pl-4 block text-black pt-3 p-2 mr-4">
            <FontAwesomeIcon icon={faInstagram}/>
            </a>
        </Link>
        <Link href="https://www.youtube.com/tutorialedge">
            <a className="button z-10 pr-4 pl-4 block text-black pt-3 p-2 mr-4">
            <FontAwesomeIcon icon={faYoutube}/>
            </a>
        </Link>
    </div>
  );
}
