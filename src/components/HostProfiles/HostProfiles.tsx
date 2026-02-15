import { useState } from 'react';
import { hosts } from '../../data/content';
import seanImage from '../../assets/Sean_D._Young,_PhD.webp';
import styles from './HostProfiles.module.css';
import { HostPopup } from './HostPopup';

const hostImages: Record<string, string> = {
  sean: seanImage,
};

/**
 * "Who is on the podcast" with 3 profile cards.
 * Replace imagePlaceholder with actual headshot paths.
 */
export function HostProfiles() {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);

  const handleLearnMore = (profileId: string) => {
    setSelectedProfile(profileId);
  };

  const handleClosePopup = () => {
    setSelectedProfile(null);
  };

  const selectedProfileData = selectedProfile
    ? hosts.profiles.find((p) => p.id === selectedProfile)
    : null;

  return (
    <>
      <section
        className={styles.section}
        aria-labelledby="hosts-title"
      >
        <div className={styles.container}>
          <h2 id="hosts-title" className={styles.title}>
            {hosts.title}
          </h2>
          <div className={styles.grid}>
            {hosts.profiles.map((profile) => (
              <article
                key={profile.id}
                className={styles.card}
                aria-labelledby={`host-name-${profile.id}`}
              >
                <div className={styles.imageWrapper}>
                  {hostImages[profile.id] ? (
                    <img
                      src={hostImages[profile.id]}
                      alt={`${profile.name} headshot`}
                      className={styles.image}
                    />
                  ) : (
                    <div className={styles.imagePlaceholder}>
                      <span>Photo</span>
                    </div>
                  )}
                </div>
                <h3 id={`host-name-${profile.id}`} className={styles.name}>
                  {profile.name}
                </h3>
                <p className={`${styles.role} ${styles[`role${profile.id}`]}`}>
                  {profile.role}
                </p>
                <ul className={styles.description}>
                  {profile.description.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
                <button
                  className={styles.learnMoreButton}
                  onClick={() => handleLearnMore(profile.id)}
                  aria-label={`Learn more about ${profile.name}`}
                >
                  Learn More
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
      {selectedProfileData && (
        <HostPopup
          isOpen={selectedProfile !== null}
          onClose={handleClosePopup}
          profile={selectedProfileData}
          image={hostImages[selectedProfileData.id]}
        />
      )}
    </>
  );
}
