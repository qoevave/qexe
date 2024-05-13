// CodeWithImage.js
import React from 'react';
import styles from '../css/toolFeatures.module.css'; // Import your CSS module

import pin_method from '../../static/img/pin_methods.png'
import pin_questionnaires from '../../static/img/pin_questionnaire.png'
import pin_json from '../../static/img/pin_json.png'

const feature = [
    {
      feature: 'Quality Evaluation',
      description: 'Direct and indirect scaling quality evaluation methods',
      imageUrl: pin_method,
    },
    {
      feature: 'Questionnaires',
      description: 'Integrate questionnaire post-item or post-test',
      imageUrl: pin_questionnaires,
    },
    {
        feature: '.JSON Config',
        description: 'Configure the tool using a single json file.',
        imageUrl: pin_json,
        
    }
  ];
  
  export default function FeatureListTop() {
    return (
      <div className={styles.featureContainer}>
        {feature.map((feature, index) => (
          <div key={index} className={styles.profileContainer}>
            <img
              className={styles.avatar}
              src={feature.imageUrl}
              alt={'Photo of ' + feature.name}
            />
            <div className={styles.profileText}>
              <h1 className={styles.userTitleText}>{feature.feature}</h1>
              <p className={styles.positionText}>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }