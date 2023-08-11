import excelImage from './assets/excel.svg';
import pptImage from './assets/ppt.svg'
import googleFormImage from './assets/gForm.svg'
import wordImage from './assets/word.svg'
import styles from './styles/ExtraImage.module.css'

function ExtraImage({isActive}) {
  return (
    <div
      className={styles.extraImages}
      style={{ display: isActive ? "flex" : "none" }}
    >
      <img src={wordImage} alt="워드 이미지" />
      <img src={pptImage} alt="파워포인트 이미지" />
      <img src={excelImage} alt="엑셀 이미지" />
      <img src={googleFormImage} alt="구글폼 이미지" />
    </div>
  );
}

export default ExtraImage;
