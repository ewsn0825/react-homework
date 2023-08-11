import closeImage from "./assets/close.svg";
import openImage from "./assets/open.svg";

import { useState } from "react";
import ExtraImage from "./ExtraImage";
import styles from './styles/MoreButton.module.css';

function MoreButton() {

  const [isActive, setIsActive] = useState(false);

  const displayImage = isActive ? closeImage : openImage;

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className={styles.moreButton}
      >
        <img src={displayImage} alt={"더보기 아이콘"} />
      </button>
      <ExtraImage isActive={isActive}/>
    </div>
  );
}

export default MoreButton;
