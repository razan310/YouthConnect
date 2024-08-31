import styles from './Hero.module.css'

function Hero(props) {
  return (
    <div className={styles.hero}>
        <img src={props.img} alt=""/>
        <div className={styles.items} >
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
            
        </div>
            
        
        

      
    </div>
  )
}

export default Hero
