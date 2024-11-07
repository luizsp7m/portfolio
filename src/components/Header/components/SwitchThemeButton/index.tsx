import styles from "./styles.module.scss";

import { useTheme } from "../../../../hooks/useTheme";
import { IoIosSunny, IoIosMoon } from "react-icons/io";
import { BsFillMoonStarsFill } from "react-icons/bs";

export function SwitchThemeButton() {
  const { isLightTheme, handleToggleLightTheme } = useTheme();

  return (
    <button
      onClick={handleToggleLightTheme}
      className={styles["button-container"]}
    >
      {isLightTheme ? (
        <IoIosSunny size={18} />
      ) : (
        <BsFillMoonStarsFill size={14} />
      )}
    </button>
  );
}