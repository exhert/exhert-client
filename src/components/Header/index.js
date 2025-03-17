import React, { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./Header.module.sass";
import { Link, NavLink } from "react-router-dom";
import Image from "../Image";
import Dropdown from "./Dropdown";
import Icon from "../Icon";
import Theme from "../Theme";
import LanguageToggle from "../LanguageToggle";
import { useTranslation } from "../../utils/useTranslation";
import LanguageSwitcher from '../LanguageSwitcher';

const navLinks = [
  {
    title: "Home",
    url: "/",
    exact: true,
    translationKey: "home"
  },
  {
    title: "About Us",
    url: "/about-us",
    exact: true,
    translationKey: "aboutUs"
  },
  {
    title: "Contact",
    url: "/contact",
    exact: true,
    translationKey: "contact"
  },
];

const Header = ({ headerWide }) => {
  const { t } = useTranslation();
  const [visibleNav, setVisibleNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper function to get the correct label for navigation items
  const getNavLabel = (title) => {
    // Simple mapping for translation keys
    const translationMap = {
      "Home": "home",
      "About Us": "aboutUs",
      "Contact": "contact"
    };
    
    const key = translationMap[title];
    // Try to get translation, if not available or empty, use the original title
    const translated = t(key);
    return translated && translated !== key ? translated : title;
  };

  return (
    <header className={cn(styles.header, { 
      [styles.wide]: headerWide,
      [styles.scrolled]: scrolled
    })}>
      <div className={cn("container", styles.container)}>
        <Link
          className={styles.logo}
          to="/"
          onClick={() => setVisibleNav(false)}
        >
          <Image
            className={styles.picDesktop}
            src="/images/logo_dark.png"
            srcDark="/images/logo_dark.png"
          />
          <Image
            className={styles.picMobile}
            src="/images/logo_dark.png"
            srcDark="/images/logo_dark.png"
          />
        </Link>
        <div className={styles.wrapper}>
          <div className={cn(styles.wrap, { [styles.visible]: visibleNav })}>
            <nav className={styles.nav}>
              {navLinks.map((x, index) => (
                <NavLink
                  className={styles.item}
                  activeClassName={styles.active}
                  to={x.url}
                  exact={x.exact}
                  key={index}
                  onClick={() => setVisibleNav(false)}
                >
                  {getNavLabel(x.title)}
                </NavLink>
              ))}
            </nav>
          </div>
          <div className={styles.control}>
            <LanguageToggle />
            {/* <Theme className={styles.theme} icon /> */}
          </div>
          <button
            className={cn(styles.burger, { [styles.active]: visibleNav })}
            onClick={() => setVisibleNav(!visibleNav)}
          ></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
