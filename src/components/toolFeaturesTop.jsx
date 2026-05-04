import styles from '../css/toolFeatures.module.css';

import pin_method from '../../static/img/pin_methods.png'
import pin_questionnaires from '../../static/img/pin_questionnaire.png'
import pin_json from '../../static/img/pin_json.png'

const features = [
  {
    eyebrow: 'Test Method',
    feature: 'Quality Evaluation',
    description: 'Direct and indirect scaling quality evaluation methods for perceptual listening tests in VR environments.',
    imageUrl: pin_method,
    badges: ['ACR', 'AB', 'MUSHRA'],
  },
  {
    eyebrow: 'Data Collection',
    feature: 'Questionnaires',
    description: 'Integrate a questionnaire post-item or post-test to collect subjective participant responses alongside objective ratings.',
    imageUrl: pin_questionnaires,
    badges: ['NASA-TLX', 'SSQ'],
  },
  {
    eyebrow: 'Setup',
    feature: 'JSON Configuration',
    description: 'Configure the entire test session using a single JSON file — define stimuli, methods, and questionnaires without code changes.',
    imageUrl: pin_json,
    badges: ['.json', '.txt'],
  },
];

export default function FeatureListTop() {
  return (
    <section className={styles.featuresSection}>
      {features.map((item, index) => (
        <div key={index} className={styles.card}>
          <img
            className={styles.cardMedia}
            src={item.imageUrl}
            alt={item.feature + ' icon'}
          />
          <div className={styles.cardContent}>
            <span className={styles.eyebrow}>{item.eyebrow}</span>

            <div className={styles.cardBody}>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
            <div className={styles.cardFooter}>
              <ul className={styles.cardBadges}>
                {item.badges.map((badge, i) => (
                  <li key={i} className={styles.badge}>{badge}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
