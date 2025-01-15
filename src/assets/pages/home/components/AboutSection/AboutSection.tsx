import styles from "./AboutSection.module.css";
// import Stat from "../Stat";
import Fade from "../../../../globalComponents/Fade/Fade";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../../../../App";

const AboutSection = () => {
  // Get the current date
  // const currentDate = new Date();

  // // Set the start date to December 2022
  // const startDate = new Date('December 2022');

  // Calculate the difference in months
  // const diffMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
  //   (currentDate.getMonth() - startDate.getMonth());

  // Round the difference
  //const roundedMonths = Math.round(diffMonths);

  return (
    <div>
      <span className={styles.header}>ABOUT ME</span>
      {/* <Fade>
        <div className={styles.stats}>
          <Stat className={styles.stat} statValue={roundedMonths}>
            Months in Business
          </Stat>
          <Stat
            className={styles.stat}
            statValue={5000}
            suffix="+"
            duration={3.3}
          >
            Macarons Baked
          </Stat>
          <Stat className={styles.stat} statValue={250} suffix="+" duration={3}>
            Orders
          </Stat>
        </div>
      </Fade> */}
      <div className={styles.textContainer}>
        <div className={styles.textWrapper}>
          <Fade>
            <span className={styles.text}>
              GoPastries is a Board-of-Health-certified, Residential Kitchen
              bakery, that started out of a passion for baking in December 2022!
              I offer wide selection of customizable, unique products.
            </span>
          </Fade>
        </div>
        <Fade>
          <div className={styles.buttonContainer}>
            <Tilt tiltReverse={true} tiltMaxAngleX={20} tiltMaxAngleY={20}>
              <Link onClick={scrollToTop} to="/Menu">
                <button className={styles.menuButton}>See Menu</button>
              </Link>
            </Tilt>
            <Tilt tiltReverse={true} tiltMaxAngleX={20} tiltMaxAngleY={20}>
              <Link onClick={scrollToTop} to="/about">
                <button className={styles.aboutButton}>Learn More</button>
              </Link>
            </Tilt>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default AboutSection;
