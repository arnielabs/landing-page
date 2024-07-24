"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import React from "react";

const AcmeLogo = () => (
  <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="dark"
      isBlurred={true}
      position="sticky"
      maxWidth="xl"
      // disableAnimation={true}
    >
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <Link href="/" className="text-inherit">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">Arnie</p>
        </NavbarBrand>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4">
        <NavbarBrand>
          <AcmeLogo />
          <Link href="/" className="text-inherit">
          <p className="font-bold text-inherit">Arnie</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/blog" className="text-inherit p-2 m-2">
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/faq" aria-current="page" className="text-inherit p-2 m-2">
            FAQ
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about" className="text-inherit p-2 m-2">
            About Us
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} className="text-inherit" href="#" variant="flat">
            Shop
          </Button>
        </NavbarItem>
          <NavbarMenuToggle className="sm:hidden" aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarMenu className="dark flex justify-center items-center">
          <NavbarMenuItem>
            <Link
              className="w-full dark text-inherit text-3xl"
              href="#"
              size="lg"
            >
              Blog
            </Link>
          </NavbarMenuItem>

          <NavbarMenuItem>
            <Link
              className="w-full dark text-inherit  py-2 text-3xl"
              href="#"
              size="lg"
            >
              Faq
            </Link>
          </NavbarMenuItem>

          <NavbarMenuItem>
            <Link
              className="w-full dark text-inherit  py-2 text-3xl"
              href="#"
              size="lg"
            >
              About Us
            </Link>
          </NavbarMenuItem>


          <NavbarMenuItem>
            <Link
              className="w-full dark text-inherit  py-2 text-3xl"
              href="#"
              size="sm"
            >
              Contact
            </Link>
          </NavbarMenuItem>

      </NavbarMenu>
    </Navbar>
  );
}
