import { episodes } from '../../data/content';
import styles from './EpisodesList.module.css';

/**
 * "Latest Three Episodes" list area.
 * Replace linkPlaceholder with actual episode URLs.
 */
export function EpisodesList() {
  return (
    <section
      id="episodes"
      className={styles.section}
      aria-labelledby="episodes-title"
    >
      <div className={styles.container}>
        <h2 id="episodes-title" className={styles.title}>
          {episodes.title}
        </h2>
        <ul className={styles.list}>
          {episodes.items.map((ep) => (
            <li key={ep.id} className={styles.item}>
              <a
                href={ep.linkPlaceholder}
                className={styles.link}
                aria-label={`Play: ${ep.title}`}
              >
                <span className={styles.playIcon} aria-hidden>
                  ▶
                </span>
                <span className={styles.content}>
                  <span className={styles.epTitle}>{ep.title}</span>
                  <span className={styles.epDate}>{ep.date}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
