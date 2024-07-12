import { Image } from "@nextui-org/react";
import logo from "../assets/sipnplay.png"

const Footer = () => {
  return (
    <footer className="grid grid-cols-2 py-10">
        <Image src={logo} alt="" removeWrapper={true} className="mx-auto my-0"/>
        <div className="flex flex-col space-y-10 border-l-2 pl-10">
            <div className="flex flex-col gap-y-2">
              <p className="text-2xl font-bold">Opening Hours</p>
              <ul>
                <li>Sunday: 10am - 11pm</li>
                <li>Mon - Thurs: 11am - 11pm</li>
                <li>Fri: 11am - midnight</li>
                <li>Sat: 10am - midnight</li>
              </ul>
              <b>Kitchen closes 2.5 - 3 hrs before we close!</b>
            </div>
            <div>
                <p className="text-2xl font-bold">Contact Info</p>
                <p>sipnplaynyc@gmail.com</p>
                <p>718-971-1684</p>
            </div>
            <div className="flex flex-col">
              <p className="text-2xl font-bold">Location</p>
              <p className="mt-3">
                471 5th Ave. <br />
                Brooklyn, NY 11215
              </p>
            </div>
            <p>©2024 by Sip & Play</p>
        </div>
    </footer>
  )
}

export default Footer