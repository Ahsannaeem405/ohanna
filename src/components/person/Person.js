// import image from "./../../assets/images/man.jpg";
import "./person.css";

const Person = ({ name, image, icon, Tpoints, Rpoints }) => {
  return (
    <section className="person">
      {<img className="person-image" src={image} alt="walton" />}
      <section className="person-information">
        <section className="person-information-top">
          <section className="person-information-top_left">
            <section className="person-infromation">
              <section className="person-information_name">{name}</section>
              <section className="person-information_designation">
                Forklift Driver
              </section>
            </section>
            <section className="view-profile">View Progress</section>
          </section>
          <section className="person-information-top_right">
            <section className="person-information_time">
              <section>
                {
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.27148 0.337891C3.41153 0.337891 0.271484 3.47794 0.271484 7.33789C0.271484 11.1978 3.41153 14.3379 7.27148 14.3379C11.1314 14.3379 14.2715 11.1978 14.2715 7.33789C14.2715 3.47794 11.1314 0.337891 7.27148 0.337891ZM10.6006 10.9586C10.4868 11.0723 10.3375 11.1296 10.1882 11.1296C10.0389 11.1296 9.88943 11.0723 9.77579 10.9586L6.85909 8.04199C6.74939 7.93294 6.68819 7.78468 6.68819 7.62959V3.83789C6.68819 3.51532 6.94945 3.25459 7.27148 3.25459C7.59352 3.25459 7.85478 3.51532 7.85478 3.83789V7.38809L10.6006 10.1338C10.8286 10.3619 10.8286 10.7305 10.6006 10.9586Z"
                      fill="#5E5E5E"
                    />
                  </svg>
                }
              </section>
              <section className="person-information_time-name">
                Short Time
              </section>
            </section>
          </section>
        </section>
        <section className="person-information-bottom">
          <section className="person-information-bottom_left">
            <section className="person-information-bottom_left-button green-style">
              <section className="person-information-bottom_left-button-title">
                Total Points:
              </section>
              <section className="person-information-bottom_left-button-value">
                {Tpoints}
              </section>
            </section>
            <section className="person-information-bottom_left-button orange-style">
              <section className="person-information-bottom_left-button-title">
                Redeem Points:
              </section>
              <section className="person-information-bottom_left-button-value">
                {Rpoints}
              </section>
            </section>
            {icon === "down" ? (
              <section className="person-information-bottom_left-icon">
                <section>
                  {
                    <svg
                      width="26"
                      height="23"
                      viewBox="0 0 26 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.4513 22.0538L25.7013 2.0539C25.9188 1.6664 25.9138 1.1939 25.6913 0.811404C25.4663 0.426406 25.0563 0.191406 24.6113 0.191406L2.11136 0.191405C1.66636 0.191405 1.25636 0.426405 1.03136 0.811403C0.918861 1.0064 0.861362 1.2239 0.861362 1.4414C0.861362 1.6514 0.913862 1.8639 1.02136 2.0539L12.2713 22.0538C12.4938 22.4463 12.9088 22.6913 13.3613 22.6913C13.8138 22.6913 14.2288 22.4463 14.4513 22.0538Z"
                        fill="#E75757"
                      />
                    </svg>
                  }
                </section>
                <section className="person-information-bottom_left-icon-title">
                  4 points
                </section>
              </section>
            ) : (
              <section className="person-information-bottom_left-icon">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    clip-path="url(#clip0_633_7933)"
                    filter="url(#filter0_i_633_7933)"
                  >
                    <path
                      d="M12.2713 2.58874L1.02138 22.5887C0.803876 22.9762 0.808876 23.4487 1.03138 23.8312C1.25637 24.2162 1.66637 24.4512 2.11137 24.4512L24.6113 24.4512C25.0563 24.4512 25.4663 24.2162 25.6913 23.8312C25.8038 23.6362 25.8613 23.4187 25.8613 23.2012C25.8613 22.9912 25.8088 22.7787 25.7013 22.5887L14.4513 2.58874C14.2288 2.19624 13.8138 1.95124 13.3613 1.95124C12.9088 1.95124 12.4938 2.19624 12.2713 2.58874Z"
                      fill="#13A321"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_i_633_7933"
                      x="0.861328"
                      y="0.701172"
                      width="25"
                      height="29"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite
                        in2="hardAlpha"
                        operator="arithmetic"
                        k2="-1"
                        k3="1"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="shape"
                        result="effect1_innerShadow_633_7933"
                      />
                    </filter>
                    <clipPath id="clip0_633_7933">
                      <rect
                        width="25"
                        height="25"
                        fill="white"
                        transform="translate(0.861328 25.7012) rotate(-90)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <section className="person-information-bottom_left-icon-title-up">
                  4 points
                </section>
              </section>
            )}
          </section>
          <section className="person-information-bottom_right">
            <section className="person-information-bottom_right-button">
              List of Certificate
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Person;
