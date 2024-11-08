import styles from "./styles.module.scss";
import clsx from "clsx";
import Link from "next/link";

import { Technology } from "../../types";
import { BsFilterRight, BsSearch } from "react-icons/bs";
import { Fragment, useEffect, useState } from "react";
import { Modal } from "../Modal";
import { useRouter } from "next/router";
import { useTheme } from "../../hooks/useTheme";

interface Props {
  technologies: Array<Technology>;
}

export function Filter({ technologies }: Props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const { asPath } = useRouter();
  const { isLightTheme } = useTheme();

  function handleOpenModal() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  const technologiesFiltered = technologies.filter((technology) => {
    return technology.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  useEffect(() => {
    setModalIsOpen(false);
  }, [asPath]);

  return (
    <Fragment>
      <button
        type="button"
        className={styles.menuButton}
        onClick={handleOpenModal}
      >
        <BsFilterRight size={20} />
      </button>

      <Modal
        title="Filtro"
        isOpen={modalIsOpen}
        onClose={handleCloseModal}
        removeBodyPadding
      >
        <div className={styles.modalContent}>
          <div
            className={clsx(styles.searchBar, {
              [styles.searchBarLight]: isLightTheme,
            })}
          >
            <BsSearch size={18} />

            <input
              type="text"
              placeholder="Pesquise por uma tecnologia"
              value={searchValue}
              onChange={({ target }) => setSearchValue(target.value)}
            />
          </div>

          <div
            className={`${styles.technologiesContainer} ${
              technologiesFiltered.length === 0 && styles.noResults
            }`}
          >
            {technologiesFiltered.length > 0 ? (
              technologiesFiltered.map((technology) => (
                <Link
                  key={technology.id}
                  href={`/projetos/${technology.slug}/1`}
                >
                  <a className={styles.technologyItem}>
                    <img src={technology.logo.url} alt="" />
                    <span>{technology.name}</span>
                  </a>
                </Link>
              ))
            ) : (
              <span>Nenhuma tecnologia encontrada</span>
            )}
          </div>
        </div>
      </Modal>
    </Fragment>
  );
}
