"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "@/app/styles/sections/Header.module.css";
import { MenuIcon, CloseIcon } from "@/app/shared/ui/Icons";
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

              <div className="relative flex-1 max-w-xs">
                <button
                  onClick={toggleSearch}
                  className="flex items-center gap-2 cursor-pointer"
                  aria-label="Search"
                  aria-expanded={isSearchOpen}
                >
                  <Image src={`${ICON_BASE}/search.svg`} alt="" width={18} height={18} />
                  <span className="hidden sm:inline text-faded text-sm whitespace-nowrap">
                    Search
                  </span>
                </button>

                {isSearchOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40 bg-background/50"
                      onClick={toggleSearch}
                      aria-hidden="true"
                    />
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

            {/* Desktop Navigation */}
            <div className={`${styles.desktopOnly} shrink-0`}>
              <nav className={styles.navContainer}>
                <NavLinks variant="desktop" />
              </nav>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center gap-2 sm:gap-4 shrink-0">
              <AboutUsLink className={`${styles.desktopOnly} whitespace-nowrap`} />

              {/* Contact Button */}
              <NavLink href="#contact" className={styles.contactButton}>
                <span className="sm:hidden">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <span className="hidden sm:inline">Contact Us</span>
              </NavLink>

              {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
        <div
          className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ""}`}
          hidden={!isMobileMenuOpen}
        >
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
