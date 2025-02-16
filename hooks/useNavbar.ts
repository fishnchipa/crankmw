import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

export const useNavbar = (
  setMenuAction: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const [selector, setSelector] = useState({ left: 0, width: 0 });
  const [isScrolled, setIsScrolled] = useState(false);
  const [isWindow, setIsWindow] = useState(false);
  const [isBurger, setIsBurger] = useState(false);
  const [active, setActive] = useState(false);
  const pathname = usePathname();

  const switchSelector = useCallback(() => {
    if (pathname === "/") {
      setActive(false);
      setSelector({ left: 20, width: 46 });
    } else if (pathname.startsWith("/products")) {
      setActive(true);
      setSelector({ left: 106, width: 67 });
    } else if (pathname.startsWith("/tuning")) {
      setActive(true);
      setSelector({ left: 212, width: 52 });
    } else if (pathname.startsWith("/contact")) {
      setActive(true);
      setSelector({ left: 304, width: 58 });
    } else if (pathname.startsWith("/search")) {
      setActive(true);
      setSelector({ left: 402, width: 51 });
    } else if (pathname.startsWith("/cart")) {
      setActive(true);
      setSelector({ left: 0, width: 0 });
    }
  }, [pathname, setSelector]);

  useEffect(() => {});

  useEffect(() => {
    const activateScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight - 120);
    };

    const activateWindow = () => {
      setIsWindow(window.innerWidth <= 768);
      setIsBurger(window.innerWidth <= 550);
      if (window.innerWidth > 550) {
        setMenuAction(false);
      }
    };

    activateScroll();
    activateWindow();
    switchSelector();
    window.addEventListener("scroll", activateScroll);
    window.addEventListener("resize", activateWindow);

    return () => {
      window.removeEventListener("scroll", activateScroll);
      window.removeEventListener("resize", activateWindow);
    };
  }, [setMenuAction, switchSelector]);

  const handleHover = (event: React.MouseEvent<HTMLLIElement>) => {
    const { offsetLeft, offsetWidth } = event.currentTarget;
    setSelector({ left: offsetLeft + 20, width: offsetWidth - 40 });
  };

  const toggleHamburger = () => {
    setMenuAction((prev) => !prev);
  };

  return {
    selector,
    isScrolled,
    isWindow,
    isBurger,
    handleHover,
    toggleHamburger,
    switchSelector,
    active,
  };
};
