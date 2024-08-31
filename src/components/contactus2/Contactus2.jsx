import styles from './contactus.module.css'

function Contactus2() {
  return (
    <div>
        <h2 className={styles.h2s}>CONTACT US</h2>
        <div className={styles.infoCon}>
            <div className={styles.getTouch}>
                <div className={styles.info}> 
                    <div className={styles.mapContainer}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.3319827429596!2d-80.12284138450198!3d25.94203768358164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ab23692c5a6d%3A0x2b13edc62cc50d24!2sSunny%20Isles%20Beach%2C%20FL%2C%20USA!5e0!3m2!1sen!2seg!4v1692240000000!5m2!1sen!2seg"
                            style={{ border: 0, borderRadius: '8px', width: '100%', height: '100%' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Map"
                        ></iframe>
                    </div>
                </div>
            </div>
            <div className={styles.contactInfo}>
                <form className={styles.contactForm}>
                    <label htmlFor="name">Full Name</label>
                    <input id="name" type="text" placeholder="Your Name..." />
                    <label htmlFor="email">Email Address</label>
                    <input id="email" type="email" placeholder="Your E-mail..." />
                    <label htmlFor="subject">Subject</label>
                    <input id="subject" type="text" placeholder="Subject..." />
                    <label htmlFor="message">Message</label>
                    <textarea id="message" placeholder="Your Message"></textarea>
                    <button className={styles.button1} type="submit">Send Message</button>
                </form>
            </div>
        </div>
        
    </div>
  )
}

export default Contactus2
