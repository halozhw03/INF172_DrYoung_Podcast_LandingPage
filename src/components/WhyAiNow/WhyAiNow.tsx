import { whyAiNowSection } from '../../data/content';
import aiClassroomImage from '../../assets/ai-classroom-pexels-5676748.jpg';
import styles from './WhyAiNow.module.css';

const layoutClassMap: Record<string, string> = {
  usageReality: styles.usageReality,
  communicationGap: styles.communicationGap,
  teacherAdoption: styles.teacherAdoption,
};

export function WhyAiNow() {
  return (
    <section className={styles.section} aria-labelledby="why-ai-now-title">
      <div className={styles.container}>
        <h2 id="why-ai-now-title" className={styles.title}>
          {whyAiNowSection.title}
        </h2>
        <p className={styles.intro}>{whyAiNowSection.intro}</p>

        <div className={styles.grid}>
          {whyAiNowSection.cards.map((card) => (
            <article
              key={card.id}
              className={`${styles.card} ${'featured' in card && card.featured ? styles.featured : ''} ${layoutClassMap[card.id] || ''}`}
              aria-labelledby={`why-ai-card-title-${card.id}`}
            >
              <div className={styles.iconWrap} aria-hidden="true">
                <i className={card.iconClass} />
              </div>
              {'stat' in card && card.stat ? <p className={styles.stat}>{card.stat}</p> : null}
              <h3 id={`why-ai-card-title-${card.id}`} className={styles.cardTitle}>
                {card.title}
              </h3>
              <p className={styles.cardDetail}>{card.detail}</p>
              {'featured' in card && card.featured ? (
                <div className={styles.featuredVisual} aria-hidden="true">
                  <div className={styles.visualImageWrap}>
                    <img src={aiClassroomImage} alt="" className={styles.visualImage} />
                    <span className={styles.visualTag}>Guided AI Framework</span>
                  </div>
                  <div className={styles.visualSteps}>
                    <div className={styles.visualStep}>
                      <i className="fa-solid fa-house" />
                      <span>Home values</span>
                    </div>
                    <div className={styles.visualStep}>
                      <i className="fa-solid fa-school" />
                      <span>School norms</span>
                    </div>
                    <div className={styles.visualStep}>
                      <i className="fa-solid fa-seedling" />
                      <span>Student growth</span>
                    </div>
                  </div>
                </div>
              ) : null}
            </article>
          ))}
        </div>

        <p className={styles.sources}>
          Sources:{' '}
          {whyAiNowSection.sources.map((source, index) => (
            <span key={source.href}>
              <a href={source.href} target="_blank" rel="noopener noreferrer">
                {source.label}
              </a>
              {index < whyAiNowSection.sources.length - 1 ? ' · ' : ''}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
