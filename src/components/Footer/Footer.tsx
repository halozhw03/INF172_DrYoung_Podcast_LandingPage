import { footer } from '../../data/content';
import { NewsletterIcon } from '../Header/icons';
import styles from './Footer.module.css';

/**
 * Footer with newsletter signup link and contact.
 */
export function Footer() {
  return (
    <footer id="newsletter" className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.newsletter}>
            <h3 className={styles.sectionTitle}>
              {footer.newsletter.title}
            </h3>
            <p className={styles.newsletterDesc}>
              {footer.newsletter.description}
            </p>
            <a
              href="https://uci.co1.qualtrics.com/jfe/form/SV_3TMvAyg2SEOFsI6"
              className={styles.newsletterLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <NewsletterIcon className={styles.newsletterIcon} />
              {footer.newsletter.ctaText}
            </a>
          </div>

          <div className={styles.linktree}>
            <h3 className={styles.sectionTitle}>{footer.linktree.title}</h3>
            <p className={styles.linktreeDesc}>
              {footer.linktree.description}
            </p>
            <a
              href={footer.linktree.href}
              className={styles.linktreeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linktree" aria-hidden></i>
              {footer.linktree.label}
            </a>
          </div>
        </div>

        <p className={styles.copyright}>{footer.copyright}</p>
      </div>
    </footer>
  );
}
