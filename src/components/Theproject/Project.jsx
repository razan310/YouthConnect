import styles from './Project.module.css';

function Project1({ title, desc, firstImg, secImg, rev, style1 }) {
  const containerClass1 = rev === "style.revers" ? styles.rev : '';
  const containerClass2 = style1 === "style1" ? styles.style1 : '';

  return (
    <div className={`${styles.container} ${containerClass1}`}>
      <div className={`${styles.text1} ${containerClass2}`}>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      <div className={styles.images}>
        <img src={firstImg} alt="" />
        <img src={secImg} alt="" />
      </div>
    </div>
  );
}

export default Project1;
