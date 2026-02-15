import { hero } from '../../data/content';
import styles from './Hero.module.css';

/**
 * Hero section: Video placeholder + illustrated hero area + headline/CTA.
 * Replace videoPlaceholder and illustrationPlaceholder with actual assets.
 */
export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-headline">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.videoBlock}>
            {/* Replace with actual video embed (e.g., YouTube iframe) */}
            <div className={styles.videoPlaceholder}>
              <span>Video</span>
            </div>
          </div>
          <div className={styles.illustratedArea}>
            {/* Replace with actual hero illustration (boy + robot, etc.) */}
            <div className={styles.illustrationPlaceholder}>
              <span>Illustration</span>
            </div>
          </div>
          <div className={styles.ctaBlock}>
            <h1 id="hero-headline" className={styles.headline}>
              {hero.headline}
            </h1>
            <p className={styles.subheadline}>{hero.subheadline}</p>
            <a href={hero.ctaHref} className={styles.cta}>
              {hero.ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
