// app/components/Header.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "@/app/styles/sections/Header.module.css";
import { NAV_ITEMS, ABOUT_ITEM } from "@/app/mock/constants";
import { Button } from "@/app/shared/ui/Button";
import { MenuIcon, CloseIcon } from "@/app/shared/ui/Icons";
import { ICON_BASE } from "@/app/mock/constants/urls";
import { NavLink } from "../../shared/ui/NavLink";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Combine nav items for mobile menu
  const allNavItems = [...NAV_ITEMS, ABOUT_ITEM];

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 ${styles.header}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center gap-2 sm:gap-4">
              <Image
                src={`${ICON_BASE}/logo-final.svg`}
                alt="Chromezy"
                className={styles.logo}
                width={120}
                height={24}
                priority
              />

              <Button name="Search" variant="ghost" href="#" className="flex items-start gap-2">
                <Image src={`${ICON_BASE}/search.svg`} alt="Search Icon" width={16} height={16} />
                <span className="hidden sm:inline text-faded">Search</span>
              </Button>
            </div>

            {/* Desktop Navigation */}
            <div className={styles.desktopOnly}>
              <nav className={styles.navContainer}>
                {NAV_ITEMS.map((item) => (
                  <a key={item.label} href={item.href} className={styles.navLink}>
                    {item.label}
                  </a>
                ))}
                <NavLink href={ABOUT_ITEM.href} className={styles.navLink}>
                  {ABOUT_ITEM.label}
                </NavLink>
              </nav>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <a href="#contact" className={styles.contactButton}>
                <span className="sm:hidden">Contact</span>
                <span className="hidden sm:inline">Contact Us</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                name="Toggle Menu"
                onClick={toggleMobileMenu}
                className={`${styles.menuButton} ${styles.mobileOnly}`}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
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
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ""}`}>
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <nav className="flex flex-col space-y-2">
              {allNavItems.map((item) => (
                <NavLink
                  key={item.label}
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
};

export default Header;
