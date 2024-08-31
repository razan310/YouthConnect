import Project1 from "../Theproject/Project";
import styles from './OurProjects.module.css';
import image1_1 from './../../assets/images/project1.1.png';
import image1_2 from './../../assets/images/project1.2.png';
import image2_1 from './../../assets/images/project2.1.png';
import image2_2 from './../../assets/images/project2.2.png';
import image3_1 from './../../assets/images/project6.2.png';
import image3_2 from './../../assets/images/project2.png';
import image4_1 from './../../assets/images/project4.1.png';
import image4_2 from './../../assets/images/project4.2.png';
import image5_1 from './../../assets/images/project5.1.png';
import image5_2 from './../../assets/images/project5.2.png';

function OurProjects() {
  const properties = [
    { image1: image1_1, image2: image1_2, title: "Youth.tec Project", desc: 'A session focused on technological knowledge,We are young people striving to contribute to building a more peaceful society, enhancing the role of women in the community, integrating individuals with special needs with healthy individuals, and promoting the culture of peace through art.', rev: "", style1: "style1" },
    { image1: image2_1, image2: image2_2, title: "Identity Project", desc: 'A form was launched to participate in the Eco Camp project,We are young people striving to contribute to building a more peaceful society, enhancing the role of women in the community, integrating individuals with special needs with healthy individuals, and promoting the culture of peace through art.', rev: "style.revers", style1: "" },
    { image1: image4_1, image2: image4_2, title: "From Us Among Us Project", desc: 'Two sessions were conducted on community concepts,We are young people striving to contribute to building a more peaceful society, enhancing the role of women in the community, integrating individuals with special needs with healthy individuals, and promoting the culture of peace through art.',rev: "", style1: "style1" },
    { image1: image3_1, image2: image3_2, title: "Collag Project", desc: 'A team of 15 young men and women,We are young people striving to contribute to building a more peaceful society, enhancing the role of women in the community, integrating individuals with special needs with healthy individuals, and promoting the culture of peace through art.', rev: "style.revers", style1: ""  },
    { image1: image5_1, image2: image5_2, title: "Eco Camp Project", desc: 'A form was launched to participate in the Eco Camp project,We are young people striving to contribute to building a more peaceful society, enhancing the role of women in the community, integrating individuals with special needs with healthy individuals, and promoting the culture of peace through art.', rev: "", style1: "style1" }
  ];

  return (
    <div className={styles.ourProjects}>
      <h1> Our Projects </h1>
      
      {properties.map((property, index) => (
        <Project1
          key={index}
          title={property.title}
          desc={property.desc}
          firstImg={property.image1}
          secImg={property.image2}
          rev={property.rev}
          style1={property.style1}
        />
      ))}
    </div>
  );
}

export default OurProjects;
