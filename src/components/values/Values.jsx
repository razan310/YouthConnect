
import styles from './Values.module.css';
import diversity from './../../assets/images/diversity.jpg';
import cooperation from './../../assets/images/cooperation.jpg';
import AcceptanceOfOthers from './../../assets/images/AcceptanceOfOthers.jpeg';
import Card from '../Card/Card';
const Values = () => {
  const data=[
    {
      img1:diversity,
      title:"Diversity",
      desc:"refers to the presence of a wide range of differences among people, including various cultures, perspectives, backgrounds, and identities. It encompasses characteristics such as race, ethnicity, gender, age, religion, ability, and more. Diversity is about recognizing and valuing these differences, understanding that they enrich our experiences, enhance creativity, and drive innovation. Embracing diversity fosters an inclusive environment where everyone feels respected, valued, and empowered to contribute. By appreciating diversity, we create stronger communities and organizations that benefit from a multitude of viewpoints and ideas."
    },
    {
      img1:cooperation,
      title:"Cooperation",
      desc:"he act of working together towards a common goal or purpose, where individuals or groups join forces to achieve something that may not be possible alone. It involves sharing resources, ideas, and responsibilities, while each person contributes their unique skills and efforts. Cooperation is built on mutual respect, open communication, and a willingness to support one another. By cooperating, we can overcome challenges, solve problems more effectively, and create a sense of unity and teamwork that leads to greater success and stronger relationships."
    },
    {
      img1:AcceptanceOfOthers,
      title:"Acceptance of others",
      desc:"refers to the willingness and ability to recognize, respect, and embrace the differences in others, including their beliefs, values, cultures, and behaviors. It involves understanding that diversity enriches our communities and contributes to personal growth. By accepting others, we foster an inclusive environment where everyone feels valued, supported, and free to express their true selves without fear of judgment or discrimination. This principle encourages open-mindedness, empathy, and the appreciation of the unique qualities each individual brings to the table."
    }
  ]
  return (
    <>
    <div className={styles.Values}>
      <h1>Values</h1>
      <div className={styles.valuecontainer}>
        {data.map((element,index)=>{return(
          <Card key={index} img1={element.img1} title={element.title} desc={element.desc}/>
        )})}
      </div>
    </div>
    
    </>
  );
};

export default Values;
