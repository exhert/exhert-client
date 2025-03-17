import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import cn from "classnames";
import styles from "./Footer.module.sass";
import Form from "../Form";
import Icon from "../Icon";
import Image from "../Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTiktok, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { useTranslation } from "../../utils/useTranslation";

const socials = [
  {
    title: faFacebook,
    size: "18",
    url: "https://www.facebook.com/profile.php?id=61561077623847",
    label: "Facebook"
  },
  {
    title: faTwitter,
    size: "18",
    url: "https://x.com/EXHERTexchange?t=s5Jd3JQUc8RNTCT8DVlO9g&s=08",
    label: "Twitter"
  },
  {
    title: faInstagram,
    size: "18",
    url: "https://www.instagram.com/exhertexchange?igsh=MTFrbDNtaXI4NDhpeQ==",
    label: "Instagram"
  },
  {
    title: faTiktok,
    size: "18",
    url: "https://www.tiktok.com/@exhert7?_t=8n7G9UteVaX&_r=1",
    label: "TikTok"
  },
];

const Footer = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

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

  const handleSubmit = (e) => {
    // Handle newsletter submission
    console.log("Newsletter subscription:", email);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={cn("container", styles.container)}>
          <div className={styles.footerContent}>
            <div className={styles.footerBrand}>
              <Link className={styles.logo} to="/">
                <motion.img
                  className={styles.logoImage}
                  src="/images/logo-ex.png"
                  alt="Exhert"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
              </Link>
              <p className={styles.tagline}>
                {t('futureOfTrading') || "The next generation cryptocurrency exchange platform"}
              </p>
              <div className={styles.socials}>
                {socials.map((x, index) => (
                  <motion.a
                    className={styles.social}
                    href={x.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(255, 192, 0, 0.15)" 
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <FontAwesomeIcon icon={x.title} size={x.size} />
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div className={styles.footerNav}>
              <div className={styles.navColumn}>
                <h4 className={styles.navTitle}>{t('company') || "Company"}</h4>
                <div className={styles.navLinks}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <NavLink
                      className={styles.navLink}
                      activeClassName={styles.active}
                      to="/"
                      exact
                    >
                      {getNavLabel("Home")}
                    </NavLink>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <NavLink
                      className={styles.navLink}
                      activeClassName={styles.active}
                      to="/about-us"
                      exact
                    >
                      {getNavLabel("About Us")}
                    </NavLink>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <NavLink
                      className={styles.navLink}
                      activeClassName={styles.active}
                      to="/contact"
                      exact
                    >
                      {getNavLabel("Contact")}
                    </NavLink>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <a href="mailto:info@exhert.com" className={styles.navLink}>
                      Email: info@exhert.com
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <div className={cn("container", styles.container)}>
          <div className={styles.copyright}>
            © 2025 Exhert. {t('allRightsReserved') || "All rights reserved."}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
