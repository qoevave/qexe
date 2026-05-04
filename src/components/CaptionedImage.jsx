import ThemedImage from '@theme/ThemedImage';
import styles from '../css/captionedImage.module.css';

/**
 * Drop-in replacement for ThemedImage that adds an optional captioned footer.
 *
 * Usage (themed light/dark sources):
 *   <CaptionedImage
 *     sources={{ light: useBaseUrl('/img/foo_light.png'), dark: useBaseUrl('/img/foo_dark.png') }}
 *     alt="Description of image"
 *     header="Figure 1"
 *     description="A brief explanation of what is shown above."
 *   />
 *
 * Usage (single image):
 *   <CaptionedImage
 *     src="/img/foo.png"
 *     alt="Description of image"
 *     header="Figure 1"
 *     description="A brief explanation of what is shown above."
 *   />
 */
export default function CaptionedImage({ sources, src, source, alt = '', header, description, backgroundColor, padding }) {
  const hasCaption = header || description;
  const imageSrc = src ?? source;

  const wrapperStyle = {
    ...(backgroundColor && { backgroundColor }),
    ...(padding !== undefined && { padding }),
  };

  return (
    <figure className={styles.figure}>
      <div className={styles.imageWrapper} style={Object.keys(wrapperStyle).length ? wrapperStyle : undefined}>
        {sources ? (
          <ThemedImage sources={sources} alt={alt} className={styles.image} />
        ) : (
          <img src={imageSrc} alt={alt} className={styles.image} />
        )}
      </div>
      {hasCaption && (
        <figcaption className={styles.caption}>
          {header && <strong className={styles.captionHeader}>{header}</strong>}
          {description && <p className={styles.captionDescription}>{description}</p>}
        </figcaption>
      )}
    </figure>
  );
}