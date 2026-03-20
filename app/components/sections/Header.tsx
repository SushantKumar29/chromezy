"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "@/app/styles/sections/Header.module.css";
import { MenuIcon, CloseIcon } from "@/app/shared/ui/Icons";
import { ICON_BASE } from "@/app/mock/constants";
import NavLinks, { AboutUsLink } from "../links/NavLinks";
import { NavLink } from "@/app/shared/ui/NavLink";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // This state is used to toggle the mobile menu

  // This function is used to toggle the mobile menu by clicking the menu button
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // THis function is used to close the mobile menu when we click on the menu links
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 ${styles.header}`}>
        <div className="mx-auto max-w-8/10 sm:px-6 lg:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-4">
              <Image
                src={`${ICON_BASE}/logo-final.svg`}
                alt="Chromezy"
                className={styles.logo}
                width={120}
                height={24}
              />

              <div className="flex items-center gap-2">
                <Image src={`${ICON_BASE}/search.svg`} alt="Search Icon" width={18} height={18} />
                <span className="hidden sm:inline text-faded text-sm">Search</span>
              </div>
            </div>

            <div className={styles.desktopOnly}>
              <nav className={styles.navContainer}>
                <NavLinks variant="desktop" />
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <AboutUsLink />
              <NavLink href="#contact" className={styles.contactButton}>
                <span className="sm:hidden">Contact</span>
                <span className="hidden sm:inline">Contact Us</span>
              </NavLink>

              <button
                id="toggleMenu"
                name="Toggle Menu"
                onClick={toggleMobileMenu}
                className={`${styles.menuButton} ${styles.mobileOnly}`}
                aria-label="Toggle Menu"
                type="button"
              >
                {isMobileMenuOpen ? (
                  <CloseIcon className="w-5 h-5 text-primary" />
                ) : (
                  <MenuIcon className="w-5 h-5 text-primary" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ""}`}>
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <nav className="flex flex-col space-y-2">
              <NavLinks variant="mobile" onItemClick={closeMobileMenu} />
            </nav>
          </div>
        </div>
      </header>

      <div className="h-16" />
    </>
  );
};

export default Header;
