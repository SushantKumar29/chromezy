"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "@/app/styles/sections/Header.module.css";
import { MenuIcon, CloseIcon, ContactUsIcon } from "@/app/shared/ui/Icons";
import { ICON_BASE, ROUTES } from "@/app/mock/constants";
import NavLinks, { AboutUsLink } from "../links/NavLinks";
import { NavLink } from "@/app/shared/ui/NavLink";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  return (
    <>
      <header id={ROUTES.header} className={`fixed inset-x-0 top-0 z-50 ${styles.header}`}>
        <div className="mx-auto container px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            <div className="flex items-center gap-2 sm:gap-4">
              <Image
                src={`${ICON_BASE}/logo-final.svg`}
                alt="Chromezy"
                className={styles.logo}
                width={120}
                height={24}
                priority
              />

              <div className="relative">
                <button
                  onClick={toggleSearch}
                  className="flex items-center gap-2 cursor-pointer"
                  aria-label="Search"
                  aria-expanded={isSearchOpen}
                  type="button"
                >
                  <Image src={`${ICON_BASE}/search.svg`} alt="" width={18} height={18} />
                  <span className="hidden sm:inline text-faded text-sm whitespace-nowrap">
                    Search
                  </span>
                </button>

                {isSearchOpen && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={toggleSearch} aria-hidden="true" />
                    <div className={styles.searchContainer}>
                      <input
                        type="text"
                        placeholder="Search..."
                        className={styles.searchInput}
                        autoFocus
                      />
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className={`${styles.desktopOnly} shrink-0`}>
              <nav className={styles.navContainer}>
                <NavLinks variant="desktop" />
              </nav>
            </div>

            <div className="flex items-center gap-2 sm:gap-4 shrink-0">
              <AboutUsLink className={`${styles.desktopOnly} whitespace-nowrap`} />

              <NavLink href="#contact" className={styles.contactButton}>
                <span className="sm:hidden">
                  <ContactUsIcon className="w-5 h-5" />
                </span>
                <span className="hidden sm:inline">Contact Us</span>
              </NavLink>

              <button
                id="toggleMenu"
                onClick={toggleMobileMenu}
                className={`${styles.menuButton} ${styles.mobileOnly} shrink-0`}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
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

        <div
          className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ""}`}
          hidden={!isMobileMenuOpen}
        >
          <div className="mx-auto container px-4 py-4 sm:px-6">
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
