import { Card } from "antd";
import { AddFileButton } from "../../components/constants/Buttons";
import Person from "../../components/person/Person";
import personImage1 from "../../assets/images/person-image1.png";
import personImage2 from "../../assets/images/person-image2.png";
import personImage3 from "../../assets/images/person-image3.png";
import personImage4 from "../../assets/images/person-image4.png";
import personImage5 from "../../assets/images/person-image5.png";
import personImage6 from "../../assets/images/person-image6.png";
import CustomCard from "../../components/customCard/CustomCard";
import PersonCard from "../../components/personCard/personCard";
import "./careerDevelopmentPlan.css";

const CareerDevelopmentPlan = () => {
  return (
    <section className="career-development-plan">
      <CustomCard>
          <section className="card">
            <Card>
              <PersonCard name="Robert Jackson" img={personImage6} />
            </Card>
          </section>
          <section className="card">
            <Card>
              <PersonCard name="Sara Emma" img={personImage5} />
            </Card>
          </section>
          <section className="card">
            <Card>
              <PersonCard name="Sophia Amelia" img={personImage3} />
            </Card>
          </section>
          <section className="card">
            <Card>
              <PersonCard name="Robert Jackson" img={personImage4} />
            </Card>
          </section>
          <section className="card">
            <Card>
              <PersonCard name="Robert Jackson" img={personImage2} />
            </Card>
          </section>
          <section className="card">
            <Card>
              <PersonCard name="Robert Jackson" img={personImage1} />
            </Card>
          </section>
          
        </CustomCard>
    </section>
  );
};

export default CareerDevelopmentPlan;
