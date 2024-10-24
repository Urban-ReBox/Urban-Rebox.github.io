import sections from '../../homepage';
import styles from './index.module.css';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

const AlternatingSection = ({ image, title, text, flip, link }) => {

  const flipped = (flip ? styles.flipped : null);

  return (
    <article>
      <Link className={clsx(styles.alternatingSection, flipped)} to={link}>
        <div className={styles.imageContainer}>
          <img src={image} alt="illustration" />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.titleContainer}>{title}</h2>
          <p className={styles.textBox}>{text}</p>
        </div>
      </Link>
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
          link={section.link}
        />
      ))}
    </article>
  );
};

export default MainContent;
