import React from 'react';
import styles from '../css/centeringImage.module.css';

function CenteringImage({ imageUrl, alt, width }) {
  const imgStyle = {
    width: width || '100%', 
    justifyContent: 'center',
  };

  return (
    <section className={styles.centerImg}>
      <img src={imageUrl} alt={alt} style={imgStyle} />
    </section>
  );
}

export default CenteringImage;
