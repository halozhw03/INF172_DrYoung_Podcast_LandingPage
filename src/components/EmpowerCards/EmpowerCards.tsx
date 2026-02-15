import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { empowerCards } from '../../data/content';
import styles from './EmpowerCards.module.css';

/**
 * Flip card with GSAP animation.
 * Accessible: click + keyboard (Enter/Space), aria-expanded.
 * prefers-reduced-motion: no 3D flip; use fade/slide.
 */
function FlipCard({
  frontTitle,
  frontIconClass,
  backTitle,
  backBullets,
  frontCta,
}: {
  id?: string;
  frontTitle: string;
  frontIconClass: string;
  backTitle: string;
  backBullets: readonly string[];
  frontCta: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const front = frontRef.current;
    const back = backRef.current;
    if (!front || !back) return;

    const ctx = gsap.context(() => {
      if (reducedMotion) {
        gsap.set(back, { opacity: 0, visibility: 'hidden', pointerEvents: 'none' });
        gsap.set(front, { opacity: 1, visibility: 'visible', pointerEvents: 'auto' });
      } else {
        gsap.set(front, { clearProps: 'all' });
        gsap.set(back, { clearProps: 'all' });
      }
    }, cardRef.current!);

    return () => ctx.revert();
  }, [reducedMotion]);

  const toggle = () => {
    const inner = innerRef.current;
    const front = frontRef.current;
    const back = backRef.current;
    if (!inner || !front || !back) return;

    const nextExpanded = !expanded;
    setExpanded(nextExpanded);

    const ctx = gsap.context(() => {
      if (reducedMotion) {
        gsap.to(front, {
          opacity: nextExpanded ? 0 : 1,
          visibility: nextExpanded ? 'hidden' : 'visible',
          pointerEvents: nextExpanded ? 'none' : 'auto',
          duration: 0.25,
          ease: 'power2.out',
        });
        gsap.to(back, {
          opacity: nextExpanded ? 1 : 0,
          visibility: nextExpanded ? 'visible' : 'hidden',
          pointerEvents: nextExpanded ? 'auto' : 'none',
          duration: 0.25,
          ease: 'power2.out',
        });
      } else {
        gsap.to(inner, {
          rotateY: nextExpanded ? 180 : 0,
          duration: 0.5,
          ease: 'power2.inOut',
        });
      }
    }, cardRef.current!);

    return () => ctx.revert();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div
      ref={cardRef}
      className={`${styles.card} ${reducedMotion ? styles.reducedMotion : ''}`}
      role="button"
      tabIndex={0}
      aria-expanded={expanded}
      aria-label={`${frontTitle} card. ${expanded ? 'Showing details. Click to flip back.' : 'Click to see details.'}`}
      onClick={toggle}
      onKeyDown={handleKeyDown}
    >
      <div ref={innerRef} className={styles.inner}>
        <div ref={frontRef} className={styles.front}>
          <div className={styles.frontContent}>
            <div className={styles.frontImage}>
              <i className={`${frontIconClass} ${styles.cardIcon}`} aria-hidden />
            </div>
            <h3 className={styles.frontTitle}>{frontTitle}</h3>
            <p className={styles.frontCta}>{frontCta}</p>
          </div>
        </div>
        <div ref={backRef} className={styles.back}>
          <div className={styles.backContent}>
            <h3 className={styles.backTitle}>{backTitle}</h3>
            <ul className={styles.bullets}>
              {backBullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function EmpowerCards() {
  return (
    <section
      className={styles.section}
      aria-labelledby="empower-title"
    >
      <div className={styles.container}>
        <h2 id="empower-title" className={styles.title}>
          {empowerCards.title}
        </h2>
        <div className={styles.grid}>
          {empowerCards.cards.map((card) => (
            <FlipCard
              key={card.id}
              {...card}
              frontCta={empowerCards.frontCta}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
