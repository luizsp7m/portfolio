import styles from "./styles.module.scss";

import Link from "next/link";
import Modal from "react-modal";

import { Technology } from "../../types";
import { BsFilterRight, BsX, BsSearch } from "react-icons/bs";
import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { TechnologyItem } from "../TechnologyItem";

interface Props {
  technologies: Array<Technology>;
}

const customStyles = {
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
    width: "100%",
    maxWidth: 560,
    background: "#20242C",
    border: 0,
    padding: "2.8rem",
  },
};

export function Filter({ technologies }: Props) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const technologiesFiltered = technologies.filter(technology => {
    return technology.name.toLowerCase().includes(searchValue);
  })

  const { asPath } = useRouter();

  function handleOpenModal() {
    setMenuIsOpen(true);
  }

  function handleCloseModal() {
    setMenuIsOpen(false);
  }

  if (typeof window !== "undefined") { // ==> client side
    document.body.style.overflow = menuIsOpen ? "hidden" : "auto";
  }

  useEffect(() => {
    setMenuIsOpen(false);
  }, [asPath]);

  return (
    <div>
      <button type="button" className={styles.menuButton} onClick={handleOpenModal}>
        <BsFilterRight size={20} />
      </button>

      <Modal
        isOpen={menuIsOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <div className={styles.modalContent}>
          <div className={styles.searchBar}>
            <BsSearch />
            <input
              type="text"
              placeholder="Pesquise por uma tecnologia"
              value={searchValue}
              onChange={({ target }) => setSearchValue(target.value)}
            />
          </div>

          {technologiesFiltered.length > 0 ? (
            <div className={styles.technologiesContainer}>
              {technologiesFiltered.map(technology => (
                <Link key={technology.id} href={`/projetos/${technology.slug}/1`}>
                  <a className={styles.technologyItem}>
                    <img src={technology.logo.url} alt="" />
                    <span>{technology.name}</span>
                  </a>
                </Link>
              ))}
            </div>
          ) : (
            <div className={styles.noResults}>
              <span>Nenhuma tecnologia encontrada</span>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}