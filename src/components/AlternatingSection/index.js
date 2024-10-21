import sections from '../../homepage';
import styles from './index.module.css';
import clsx from 'clsx';

const AlternatingSection = ({ image, title, text, flip }) => {

  const flipped = (flip ? styles.flipped : null);

  return (
    <article className={clsx(styles.alternatingSection, flipped)}>
      <div className={styles.imageContainer}>
        <img src={image} alt="illustration" />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.titleContainer}>{title}</h2>
        <p className={styles.textBox}>{text}</p>
      </div>
    </article>
  );
};

const MainContent = () => {

  return (
    <article className={styles.feature}>
      {sections.map((section, index) => (
        <AlternatingSection
          key={index}
          image={section.image}
          title={section.title}
          text={section.text}
          flip={index % 2 !== 0}
        />
      ))}
    </article>
  );
};

export default MainContent;
