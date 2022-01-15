import { Link } from "react-router-dom";
import "./sideBarButton.css";

const SideBarButton = ({
  iconAndTitleHandle,
  clickHandler,
  clickedTab,
  name,
  routerName,
  icon,
  // arrow,
  // mustOpen,
}) => {
  console.log("link name:", name)

  return (
    <section className="sidebar-button-container">
      <Link
        to={routerName}
        onClick={() => {
          clickHandler(routerName);
          iconAndTitleHandle(icon, name);
        }}
      >
        <section
          className={
            clickedTab === routerName ? "clicked-button" : "sidebar-button"
          }
        >
          <section
            className={
              clickedTab === routerName
                ? "clicked-button_left"
                : "sidebar-button_left"
            }
          >
            <section
              className={
                clickedTab === routerName
                  ? "clicked-button_icon"
                  : "sidebar-button_icon"
              }
            >
              {icon}
            </section>
            <section
              className={
                clickedTab === routerName
                  ? "clicked-button_title"
                  : "sidebar-button_title"
              }
            >
              {name}
            </section>
          </section>
          {/* {arrow && <section className="arrow">{ArrowSVG}</section>} */}
        </section>
      </Link>
    </section>
  );
};

export default SideBarButton;
