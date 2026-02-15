import { whoAreWe } from '../../data/content';
import styles from './WhoAreWe.module.css';

/**
 * "Who are We?" text block section.
 */
export function WhoAreWe() {
  return (
    <section className={styles.section} aria-labelledby="who-are-we-title">
      <div className={styles.container}>
        <h2 id="who-are-we-title" className={styles.title}>
          {whoAreWe.title}
        </h2>
        <div className={styles.content}>
          {whoAreWe.paragraphs.map((paragraph, i) => (
            <p key={i} className={styles.paragraph}>
              {paragraph.map((part, j) =>
                part.type === 'bold' ? (
                  <strong key={j}>{part.text}</strong>
                ) : (
                  <span key={j}>{part.text}</span>
                )
              )}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
