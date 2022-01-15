import { Card } from "antd";
import CustomCard from "../../components/customCard/CustomCard";
import Person from "../../components/person/Person";
import redeem from "../../assets/images/redeem.png";
import redeem1 from "../../assets/images/redeem1.png";
import redeem2 from "../../assets/images/redeem2.png";
import redeem3 from "../../assets/images/redeem3.png";
import redeem4 from "../../assets/images/redeem4.png";
import redeem5 from "../../assets/images/redeem5.png";
import personImage1 from "../../assets/images/person-image1.png";
import personImage2 from "../../assets/images/person-image2.png";
import personImage4 from "../../assets/images/person-image4.png";
import personImage5 from "../../assets/images/person-image5.png";

import "./trainingManagement.css";

const TrainingManagement = () => {
  return (
    <section>
      <section className="training-management">
        <CustomCard>
          <section className="card">
            <Card>
              <Person name="Robert Jackson" image={personImage1} icon="down" Tpoints="60.2" Rpoints="50.2" />
            </Card>
          </section>

          <section className="card">
            <Card>
              <Person name="Jhon Danial" image={personImage2} Tpoints="40.2" Rpoints="30.2"/>
            </Card>
          </section>

          <section className="card">
            <Card>
              <Person name="David Malan" image={personImage5} Tpoints="40.2" Rpoints="30.2"/>
            </Card>
          </section>

          <section className="card">
            <Card>
              <Person name="Ellan Walker" image={personImage4} icon="down" Tpoints="60.2" Rpoints="50,2"/>
            </Card>
          </section>

          <section className="most-visit-card">
            <section className="most-visit">
              <section className="most-visit_top">
                <section className="most-visit_top-right">
                  <section className="most-visited-course">
                    Most Visited Course
                  </section>
                  <section className="group-support">
                    <section className="group">Group:</section>
                    <section>Support</section>
                  </section>
                </section>
                <section className="most-visit_top-left">View Detail</section>
              </section>

              <section className="most-visit_bottom">
                <section className="item">
                  <section className="item-title">Sam Johnson</section>
                  <section className="most-visit-buttons">
                    <section className="most-visit-button">normal</section>
                    <section className="most-visit-button">normal</section>
                    <section className="most-visit-button mx-btn">normal</section>
                  </section>
                </section>

                <section className="item">
                  <section className="item-title">Mandy Trend</section>
                  <section className="most-visit-buttons">
                    <section className="most-visit-button">normal</section>
                    <section className="most-visit-button">normal</section>
                    <section className="most-visit-button mx-btn">normal</section>
                  </section>
                </section>

                <section className="item">
                  <section className="item-title">Cody Wilson</section>
                  <section className="most-visit-buttons">
                    <section className="most-visit-button">normal</section>
                    <section className="most-visit-button mx-btn">normal</section>
                    <section className="most-visit-button">normal</section>
                  </section>
                </section>

                <section className="item">
                  <section className="item-title">John Silt</section>
                  <section className="most-visit-buttons">
                    <section className="most-visit-button">normal</section>
                    <section className="most-visit-button">normal</section>
                    <section className="most-visit-button mx-btn">normal</section>
                  </section>
                </section>
                <section className="item">
                  <section className="item-title">Sam Johnson</section>
                  <section className="most-visit-buttons">
                    <section className="most-visit-button">normal</section>
                    <section className="most-visit-button">normal</section>
                    <section className="most-visit-button mx-btn">normal</section>
                  </section>
                </section>

                <section className="item">
                  <section className="item-title">Mandy Trend</section>
                  <section className="most-visit-buttons">
                    <section className="most-visit-button">normal</section>
                    <section className="most-visit-button">normal</section>
                    <section className="most-visit-button mx-btn">normal</section>
                  </section>
                </section>

                <section className="item">
                  <section className="item-title">Cody Wilson</section>
                  <section className="most-visit-buttons">
                    <section className="most-visit-button">normal</section>
                    <section className="most-visit-button mx-btn">normal</section>
                    <section className="most-visit-button">normal</section>
                  </section>
                </section>

                <section className="item">
                  <section className="item-title">John Silt</section>
                  <section className="most-visit-buttons">
                    <section className="most-visit-button">normal</section>
                    <section className="most-visit-button">normal</section>
                    <section className="most-visit-button mx-btn">normal</section>
                  </section>
                </section>
                
                
              </section>
            </section>
          </section>

          <section className="redeem">
            <section className="redeem-title">
              Redeem Option Integration
            </section>
            <section className="redeem-images">
              <img src={redeem} className="redeem-image" alt="redeem" />
              <img
                src={redeem1}
                className="redeem-image-height"
                alt="redeem1"
              />
              <img src={redeem2} className="redeem-image" alt="redeem2" />
              <img src={redeem3} className="redeem-image" alt="redeem3" />
              <img src={redeem4} className="mx-height-img" alt="redeem4" />
              <img src={redeem5} className="redeem-image" alt="redeem5" />
            </section>
          </section>
        </CustomCard>
      </section>
    </section>
  );
};

export default TrainingManagement;
