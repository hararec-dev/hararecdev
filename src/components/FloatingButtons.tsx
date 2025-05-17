import { useEffect, useState } from "react";
import { MotionDiv } from "./MotionDiv";
import { BootstrapIcon } from "./BootstrapIcon";
import { getSocialLinks } from "../helpers";

export const FloatingButtons = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const socialLinks = getSocialLinks();

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed bottom-7 right-7 flex flex-col space-y-4 z-[99999]">
      {socialLinks.map((link, index) => (
        (!(windowSize.width <= 768 && windowSize.height > windowSize.width) || link.isVisibleInMobile) && (
          <MotionDiv key={index} transition={{ duration: 1, delay: link.delay }}>
            <a
              href={link.href}
              target={link.ariaLabel === 'Llamada' || link.ariaLabel === 'Email' ? undefined : "_blank"}
              rel={link.ariaLabel === 'Llamada' || link.ariaLabel === 'Email' ? undefined : "noopener noreferrer"}
              className={`${link.bgColor} text-background-light px-5 py-3 md:px-4 md:py-2 rounded-full shadow-three ${link.hoverColor} hover:scale-110 transition-transform flex items-center justify-center ${link.shadowColor}`}
              aria-label={link.ariaLabel}
            >
              <BootstrapIcon name={link.iconName} size='1.6rem' />
            </a>
          </MotionDiv>
        )
      ))}
    </div>
  );
};
