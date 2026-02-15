import { site, headerIcons } from '../../data/content';
import logoImage from '../../assets/Young&Hungary_Logo.webp';
import { InstagramIcon, TikTokIcon, XIcon, NewsletterIcon } from './icons';
import styles from './Header.module.css';

const iconMap = {
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
  x: XIcon,
  newsletter: NewsletterIcon,
} as const;

/**
 * Header / top bar: title left, social icons right (Instagram, TikTok, X, Newsletter).
 */
export function Header() {
  return (
    <header className={styles.header} role="banner">
      <div className={styles.container}>
        <a href="#" className={styles.logo} aria-label={`${site.title} - Home`}>
          <span className={styles.logoMask}>
            <img src={logoImage} alt="" className={styles.logoImage} />
          </span>
          <span className={styles.logoText}>{site.title}</span>
        </a>
        <nav className={styles.nav} aria-label="Social links">
          {headerIcons.map((item) => {
            const IconComponent = iconMap[item.id];
            const isExternal = item.href.startsWith('http');
            return (
              <a
                key={item.id}
                href={item.href}
                className={styles.icon}
                aria-label={item.label}
                title={item.label}
                {...(isExternal && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
              >
                <IconComponent className={styles.iconSvg} />
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
