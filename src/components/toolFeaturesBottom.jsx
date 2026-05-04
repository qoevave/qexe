import styles from '../css/toolFeatures.module.css';

import pin_audio from '../../static/img/pin_audio.png'
import pin_data from '../../static/img/pin_data.png'
import pin_6dof from '../../static/img/pin_6dof.png'

const features = [
  {
    eyebrow: 'Audio Rendering',
    feature: 'Import VSTs',
    description: 'Import freely available VST plugins for Ambisonic or object-based spatial audio rendering within the VR scene.',
    imageUrl: pin_audio,
    badges: ['VSTs', 'Audio triggers'],
  },
  {
    eyebrow: 'Logging',
    feature: 'Behavior Data',
    description: 'Record user and object pose data at runtime, streamed to a log file for offline analysis.',
    imageUrl: pin_data,
    badges: ['6DoF'],
  },
  {
    eyebrow: 'Visual Scene',
    feature: 'CGI or Video',
    description: 'Include computer-generated imagery or 360-degree video scenes as the visual rendering context for each test item.',
    imageUrl: pin_6dof,
    badges: ['CGI', '360° Video', 'VR'],
  },
];

export default function FeatureListBottom() {
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
