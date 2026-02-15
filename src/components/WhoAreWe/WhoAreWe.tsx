import { whoAreWe } from '../../data/content';
import styles from './WhoAreWe.module.css';

/**
 * "Who are We?" text block section with Instagram Reel video embed.
 */
export function WhoAreWe() {
  return (
    <section className={styles.section} aria-labelledby="who-are-we-title">
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.videoContainer}>
            <iframe
              src="https://www.instagram.com/reel/DFJYmNGI0of/embed/?hidecaption=1"
              className={styles.videoIframe}
              allow="encrypted-media"
              allowFullScreen
              title="Instagram Reel"
            />
          </div>
          <div className={styles.content}>
            <h2 id="who-are-we-title" className={styles.title}>
              {whoAreWe.title}
            </h2>
            {whoAreWe.paragraphs.map((paragraph, i) => (
              <p key={i} className={styles.paragraph}>
                {paragraph.map((part, j) =>
                  part.type === 'bold' ? (
                    <strong key={j}>{part.text}</strong>
                  ) : part.type === 'link' ? (
                    <a key={j} href={part.href} className={styles.link} target="_blank" rel="noopener noreferrer">
                      <strong>{part.text}</strong>
                    </a>
                  ) : part.type === 'italic' ? (
                    <em key={j} className={styles.bookTitle}>{part.text}</em>
                  ) : (
                    <span key={j}>{part.text}</span>
                  )
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
