import { useEffect } from "react";

export function useScrollbarCompensation(modalIsOpen: boolean) {
  useEffect(() => {
    const header = document.getElementById("header");
    const buttonToTop = document.getElementById("button-to-top");

    const handleScrollCompensation = () => {
      if (modalIsOpen) {
        const scrollbarWidth =
          window.innerWidth - document.documentElement.clientWidth;

        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollbarWidth}px`;

        if (header) {
          header.style.paddingRight = `${scrollbarWidth}px`;
        }

        if (buttonToTop) {
          buttonToTop.style.visibility = "hidden";
        }
      } else {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";

        if (header) {
          header.style.paddingRight = "";
        }

        if (buttonToTop) {
          buttonToTop.style.visibility = "";
        }
      }
    };

    handleScrollCompensation();

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";

      if (header) {
        header.style.paddingRight = "";
      }

      if (buttonToTop) {
        buttonToTop.style.visibility = "";
      }
    };
  }, [modalIsOpen]);
}
