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

const Header = ({ headerWide }) => {
  const { t } = useTranslation();
  const [visibleNav, setVisibleNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navigation = [
    {
      title: t('contact'),
      url: "/contact",
    },
  ];
  
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
              {navigation.map((x, index) =>
                x.dropdown ? (
                  <Dropdown
                    className={styles.dropdown}
                    key={index}
                    item={x}
                    setValue={setVisibleNav}
                  />
                ) : (
                  <NavLink
                    className={styles.item}
                    activeClassName={styles.active}
                    onClick={() => setVisibleNav(false)}
                    to={x.url}
                    key={index}
                  >
                    {x.title}
                  </NavLink>
                )
              )}
            </nav>
          </div>
          <div className={styles.control}>
            <LanguageToggle className={styles.languageToggle} />
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
