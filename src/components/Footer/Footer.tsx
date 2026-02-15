import { useState } from 'react';
import { footer } from '../../data/content';
import { InstagramIcon, TikTokIcon, XIcon, NewsletterIcon } from '../Header/icons';
import styles from './Footer.module.css';

const footerIconMap = {
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
  x: XIcon,
  newsletter: NewsletterIcon,
} as const;

/**
 * Footer with social links, newsletter signup, and contact.
 */
export function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with actual newsletter API integration
    console.log('Newsletter signup:', email);
  };

  return (
    <footer id="newsletter" className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.social}>
            <h3 className={styles.sectionTitle}>{footer.socialTitle}</h3>
            <nav aria-label="Social media links">
              <ul className={styles.socialList}>
                {footer.social.map((item) => {
                  const Icon = footerIconMap[item.id];
                  return (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        className={styles.socialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon className={styles.socialIcon} />
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className={styles.newsletter}>
            <h3 className={styles.sectionTitle}>
              {footer.newsletter.title}
            </h3>
            <p className={styles.newsletterDesc}>
              {footer.newsletter.description}
            </p>
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={footer.newsletter.placeholder}
                className={styles.input}
                aria-label="Email for newsletter"
              />
              <button type="submit" className={styles.submit}>
                {footer.newsletter.ctaText}
              </button>
            </form>
          </div>

          <div className={styles.contact}>
            <h3 className={styles.sectionTitle}>{footer.linktree.title}</h3>
            <a
              href={footer.linktree.href}
              className={styles.contactLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {footer.linktree.label}
            </a>
          </div>
        </div>

        <p className={styles.copyright}>{footer.copyright}</p>
      </div>
    </footer>
  );
}
