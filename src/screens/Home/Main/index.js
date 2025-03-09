import React, { useState, useEffect, useRef } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Main.module.sass";
import ScrollButton from "../../../components/ScrollButton";
import Cards from "./Cards";
import Form from "../Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faTiktok, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons"


const socials = [
  {
    title: faFacebook,
    size: "25",
    url: "https://www.facebook.com/profile.php?id=61561077623847",
  },
  {
    title: faTwitter,
    size: "18",
    url: "https://x.com/EXHERTexchange?t=s5Jd3JQUc8RNTCT8DVlO9g&s=08",
  },
  {
    title: faInstagram,
    size: "16",
    url: "https://www.instagram.com/exhertexchange?igsh=MTFrbDNtaXI4NDhpeQ==",
  },
  {
    title: faTiktok,
    size: "16",
    url: "https://www.tiktok.com/@exhert7?_t=8n7G9UteVaX&_r=1",
  },
];

const Main = ({ scrollToRef }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isGlowing, setIsGlowing] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const { left, top, width, height } = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (isGlowing) {
      const timer = setTimeout(() => {
        setIsGlowing(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isGlowing]);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const floatingButton = document.querySelector(`.${styles.floatingButton}`);
    
    if (floatingButton) {
      if (scrollPosition > 300) {
        floatingButton.classList.add(styles.visible);
      } else {
        floatingButton.classList.remove(styles.visible);
      }
    }
  };

  const handleScrollComplete = () => {
    setIsGlowing(true);
  };

  useEffect(() => {
    window.triggerFormGlow = handleScrollComplete;
    return () => {
      delete window.triggerFormGlow;
    };
  }, []);

  const scrollToForm = () => {
    if (scrollToRef && scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={cn("section", styles.main)}>
      <div className={styles.hero} ref={heroRef} id="waitlist-hero">
        <div 
          className={styles.heroBackground}
          style={{
            '--mouse-x': mousePosition.x,
            '--mouse-y': mousePosition.y
          }}
        >
          <div className={styles.gradientOverlay}></div>
          <div className={styles.noiseTexture}></div>
          <img src="/images/content/cards-dark@2x.png" srcSet="/images/content/cards-dark.png" alt="Cards" />
        </div>
        
        <div className={styles.heroContent}>
          
          
          <h1 className={styles.heroTitle}>
            <div className={styles.titleLine}>
              <span className={styles.word}>Trade</span>
              <span className={cn(styles.word, styles.highlight)}>safer</span>
              <span className={styles.word}>,</span>
            </div>
            <div className={styles.titleLine}>
              <span className={cn(styles.word, styles.highlight)}>faster</span>
              <span className={styles.word}>and</span>
              <span className={cn(styles.word, styles.highlight)}>better</span>
              <span className={styles.word}>.</span>
            </div>
          </h1>
          
          <p className={styles.heroSubTitle}>Don't think about the risks, just trade.</p>
          
          <Form className={cn(styles.heroForm, { [styles.glowEffect]: isGlowing })} />
          
        
        <div className={styles.heroShapes}>
          <div className={cn(styles.shape, styles.shape1)}></div>
          <div className={cn(styles.shape, styles.shape2)}></div>
          <div className={cn(styles.shape, styles.shape3)}></div>
        </div>
      </div>

          <div className={styles.scrollIndicator}>
            <div className={styles.mouse}>
              <div className={styles.wheel}></div>
            </div>
            <div className={styles.scrollText}>Scroll to explore</div>
          </div>
      {/* Floating Button
      <button 
        className={cn(styles.floatingButton, {
          [styles.visible]: isVisible
        })}
        onClick={scrollToForm}
      >
        <span>Join the Waitlist</span>
        <div className={styles.rippleEffect}></div>
      </button> */}
        </div>
    </div>
  );
};

export default Main;
