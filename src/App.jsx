import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useState } from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import logo from "./assets/sipnplay.png";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "About",
    "Reservations",
    "MTG Schedule",
    "Our Board Game Collection",
    "Menu",
    "Feedback",
    "Gift Cards",
    "Press",
  ];

  return (
    <>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden"
          />
          <NavbarBrand>
            <img src={logo} alt="" className="max-w-20" />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden lg:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Reservations
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              MTG Schedule
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Our Board Game Collection
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Menu
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Feedback
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Gift Cards
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Press
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              isIconOnly
              aria-label="instagram"
              className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]"
            >
              <FaInstagram color="white" size={25} />
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button isIconOnly className="bg-[#0866FF]" aria-label="facebook">
              <FaFacebook color="white" size={25} />
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={index === 2 ? "primary" : "foreground"}
                className="w-full"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <Home />
      <Footer />
    </>
  );
}

export default App;
