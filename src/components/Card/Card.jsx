import styles from './Card.module.css'

function Card({img1,title,desc}) {
  return (
    <div className={styles.card}>
        <div className={styles.imageim}>
            <img src={img1} alt=''/>
        </div>
        <h2>{title}</h2>
        <p>{desc}</p>
      
    </div>
  )
}

export default Card
