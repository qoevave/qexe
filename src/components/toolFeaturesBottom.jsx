// CodeWithImage.js
import React from 'react';
import styles from '../css/toolFeatures.module.css'; // Import your CSS module

import pin_audio from '../../static/img/pin_audio.png'
import pin_data from '../../static/img/pin_data.png'
import pin_6dof from '../../static/img/pin_6dof.png'

const feature = [
    {
      feature: 'Import VSTs',
      description: 'Add in freely available VSTs for Ambisonic or object-based audio rendering',
      imageUrl: pin_audio,
    },
    {
      feature: 'Behavior Data',
      description: 'Samples user and object pose data streamed into a .txt file',
      imageUrl: pin_data,
    },
    {
        feature: 'CGI or Video',
        description: 'Include computer generated imagery scene or 360 video scenes visual',
        imageUrl: pin_6dof,
        
    }
  ];
  
  export default function FeatureListBottom() {
    return (
      <div className={styles.featureContainerBot}>
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