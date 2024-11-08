import styles from "./styles.module.scss";
import clsx from "clsx";
import ReactModal from "react-modal";

import { ReactNode, useEffect } from "react";
import { useTheme } from "../../hooks/useTheme";
import { IoCloseSharp } from "react-icons/io5";

ReactModal.setAppElement("#__next");

const customStyles = (isLightTheme: boolean): ReactModal.Styles => {
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
      background: isLightTheme ? "#f9f9f9" : "#2f3640",
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
  const { isLightTheme } = useTheme();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles(isLightTheme)}
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
