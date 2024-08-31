
import styles from './About.module.css';
import { FaChartBar, FaBell, FaLightbulb, FaHeadset } from 'react-icons/fa';

const About = () => {
  return (
    <section className={styles.featuresSection}>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.subtitle}>We are young people striving to contribute to building a more peaceful society, enhancing the role of women in the community, integrating individuals with special needs with healthy individuals, and promoting the culture of peace through art.</p>
      <hr className={styles.separator} />
      <div className={styles.featuresGrid}>
        <div className={styles.featureItem}>
          <FaChartBar className={styles.icon} />
          <h2>Community development</h2>
          <p>Through building systematic interventions based on the needs of the community.</p>
        </div>
        <div className={styles.featureItem}>
          <FaBell className={styles.icon} />
          <h2>Youth development</h2>
          <p>Through empowering them with knowledge tools that contribute to the process of building peace.</p>
        </div>
        <div className={styles.featureItem}>
          <FaLightbulb className={styles.icon} />
          <h2>Knowledge development</h2>
          <p>Through a series of sessions and training workshops.</p>
        </div>
        <div className={styles.featureItem}>
          <FaHeadset className={styles.icon} />
          <h2>Emphasizing community values</h2>
          <p>Strengthening values among community members</p>
        </div>
      </div>
    </section>
  );
};

export default About;
