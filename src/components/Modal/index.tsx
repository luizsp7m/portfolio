import styles from "./styles.module.scss";
import clsx from "clsx";
import ReactModal from "react-modal";

import { ReactNode, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";

ReactModal.setAppElement("#__next");

const customStyles = (): ReactModal.Styles => {
  return {
    overlay: {
      zIndex: 10,
      background: "rgba(0, 0, 0, 0.5)",
    },

    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "#2f3640",
      border: 0,
      padding: 0,
      width: "90%",
      maxWidth: 512,
      maxHeight: "90%",
    },
  };
};

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  removeBodyPadding?: boolean;
}

export function Modal({
  title,
  isOpen,
  onClose,
  removeBodyPadding = false,
  children,
}: ModalProps) {
  useEffect(() => {
    const header = document.getElementById("header");

    const handleScrollCompensation = () => {
      if (isOpen) {
        const scrollbarWidth =
          window.innerWidth - document.documentElement.clientWidth;

        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = `${scrollbarWidth}px`;

        if (header) {
          header.style.paddingRight = `${scrollbarWidth}px`;
        }
      } else {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";

        if (header) {
          header.style.paddingRight = "";
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
    };
  }, [isOpen]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles()}
      preventScroll
    >
      <div className={styles["modal-header"]}>
        <span>{title}</span>

        <button onClick={onClose} aria-label="Fechar modal">
          <IoCloseSharp size={16} />
        </button>
      </div>

      <div
        className={clsx(styles["modal-body"], {
          [styles["remove-body-padding"]]: removeBodyPadding,
        })}
      >
        {children}
      </div>
    </ReactModal>
  );
}
