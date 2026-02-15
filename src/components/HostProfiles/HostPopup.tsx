import { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import styles from './HostPopup.module.css';

interface HostPopupProps {
  isOpen: boolean;
  onClose: () => void;
  profile: {
    id: string;
    name: string;
    role: string;
    description: readonly string[];
    detailedDescription?: readonly string[];
  };
  image?: string;
}

export function HostPopup({ isOpen, onClose, profile, image }: HostPopupProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    const overlay = overlayRef.current;
    const popup = popupRef.current;
    if (!overlay || !popup) return;

    const tl = gsap.timeline({
      onComplete: onClose,
    });

    tl.to(popup, {
      scale: 0.8,
      opacity: 0,
      duration: 0.2,
      ease: 'power2.in',
    }).to(
      overlay,
      {
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in',
      },
      '-=0.1'
    );
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const overlay = overlayRef.current;
    const popup = popupRef.current;
    if (!overlay || !popup) return;

    // Set initial state
    gsap.set(overlay, { opacity: 0 });
    gsap.set(popup, { scale: 0.8, opacity: 0 });

    // Animate in
    const tl = gsap.timeline();
    tl.to(overlay, {
      opacity: 1,
      duration: 0.3,
      ease: 'power2.out',
    }).to(
      popup,
      {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: 'back.out(1.7)',
      },
      '-=0.1'
    );

    // Handle ESC key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      tl.kill();
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className={styles.overlay}
      onClick={handleClose}
      aria-hidden={!isOpen}
    >
      <div
        ref={popupRef}
        className={styles.popup}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-labelledby={`popup-title-${profile.id}`}
        aria-modal="true"
      >
        <button
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="Close popup"
        >
          ×
        </button>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            {image ? (
              <img src={image} alt={`${profile.name} headshot`} className={styles.image} />
            ) : (
              <div className={styles.imagePlaceholder}>
                <span>Photo</span>
              </div>
            )}
          </div>
          <h3 id={`popup-title-${profile.id}`} className={styles.name}>
            {profile.name}
          </h3>
          <p className={styles.role}>{profile.role}</p>
          <div className={styles.description}>
            {(profile.detailedDescription || profile.description).map((paragraph, i) => (
              <p key={i} className={styles.paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
