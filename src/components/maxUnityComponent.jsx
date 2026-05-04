import styles from '../css/maxUnityComponent.module.css';

function MaxUnityComponent({imageUrl}) {
  return (
    <>
    <section className={styles.saliencysection}>  
        <img src={imageUrl} alt='Max and Unity Interface images' className={styles.maxUnityImg} />
    </section>
    </>
  );
}

export default MaxUnityComponent;