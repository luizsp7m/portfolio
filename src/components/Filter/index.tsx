import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";

import { BsFilterRight, BsSearch } from "react-icons/bs";
import { Fragment, useEffect, useState } from "react";
import { Modal } from "../Modal";
import { useRouter } from "next/router";
import { Technology } from "../../types/Technology";

interface Props {
  technologies: Array<Technology>;
}

export function Filter({ technologies }: Props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const { asPath } = useRouter();

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
        aria-label="Abrir o filtro de tecnologias"
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
          <div className={styles.searchBar}>
            <BsSearch size={18} />

            <input
              type="text"
              placeholder="Pesquise por uma tecnologia"
              value={searchValue}
              onChange={({ target }) => setSearchValue(target.value)}
              aria-label="Digite ou selecione uma tecnologia"
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
                  <a
                    aria-label={`Ir para projetos desenvolvidos com ${technology.name}`}
                    className={styles.technologyItem}
                  >
                    <Image
                      src={technology.logo.url}
                      alt={`Logo da tecnologia ${technology.name}`}
                      width={17.5}
                      height={17.5}
                      layout="fixed"
                      objectFit="contain"
                      blurDataURL={technology.logo.url}
                      quality={85}
                    />

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
