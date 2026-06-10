import { useState, useEffect } from "react";
import {
  Headerdiv,
  NavLeft,
  NavRight,
  Logo,
  Button,
  MenuButton,
  MobileMenu,
} from "./styles";

const navLinks = [
  { label: "The restaurant", target: "the-restaurant" },
  { label: "The menu", href: "https://drive.google.com/file/d/15EfJ9hZ1ZwIbE5bVZZ1muryJX4zeX9gY/preview", external: true },
  { label: "Chef restaurant", target: "chef-restaurant" },
  { label: "News", target: "news" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleNavClick = (event, link) => {
    if (link.external || !link.target) {
      return;
    }

    event.preventDefault();
    setMenuOpen(false);

    const section = document.getElementById(link.target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const renderLink = (link) => {
    if (link.external) {
      return (
        <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
          {link.label}
        </a>
      );
    }

    return (
      <a key={link.label} href={`#${link.target}`} onClick={(event) => handleNavClick(event, link)}>
        {link.label}
      </a>
    );
  };

  return (
    <Headerdiv className={`${scrolled ? "scrolled" : ""}`}>
      <MenuButton onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </MenuButton>

      <NavLeft>
        {navLinks.slice(0, 3).map(renderLink)}
      </NavLeft>

      <Logo>L'ÉLITE FRANÇAISE</Logo>

      <NavRight>
        <a href="/Galeria">Gallery</a>
        <a href="/Contato">Contact</a>
        {renderLink(navLinks[3])}

        <a href="/Reserva">
          <Button>Book now</Button>
        </a>
      </NavRight>

      <MobileMenu className={menuOpen ? "open" : ""}>
        {navLinks.map(renderLink)}
        <a href="/Galeria">Gallery</a>
        <a href="/Contato">Contact</a>
        <a href="/Reserva">
          <Button>Book now</Button>
        </a>
      </MobileMenu>
    </Headerdiv>
  );
}