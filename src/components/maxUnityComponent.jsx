import React from 'react';
import styles from '../css/maxUnityComponent.module.css';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

function MaxUnityComponent({imageUrl}) {
  return (
    <>
    <section className={styles.saliencysection}>  
        <img src={imageUrl} alt='Max and Unity Inferface images' className={styles.maxUnityImg} />
    </section>
    </>
  );
}

export default MaxUnityComponent;