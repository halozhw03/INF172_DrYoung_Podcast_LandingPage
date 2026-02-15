import { hero } from '../../data/content';
import bannerImage from '../../assets/Artflo_Nano Banana Pro_20260215002.png';
import styles from './Hero.module.css';

/**
 * Hero section: Headline/CTA with banner background.
 */
export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-headline" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className={styles.container}>
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
    </section>
  );
}
