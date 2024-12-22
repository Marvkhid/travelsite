"use client";

import Link from "next/link";
import { NAV_LINKS } from "./constants";
import Image from "next/image";
import Button from "./Button"; 
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      {/* Logo */}
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} style={{ width: 'auto', height: 'auto' }} />
      </Link>

      {/* Desktop Links */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* Login Button */}
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg" 
          variant="btn_dark_green"
        />
      </div>

      {/* Hamburger Menu */}
      <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={() => setMenuOpen((prev) => !prev)} // Toggle menu state
      />

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md lg:hidden">
          <ul className="flex flex-col gap-4 p-6">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="regular-16 text-gray-50 cursor-pointer transition-all hover:font-bold"
                onClick={() => setMenuOpen(false)} // Close menu on link click
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar;
