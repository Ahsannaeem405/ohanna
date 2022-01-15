import { Card, DatePicker, Button } from "antd";
import "./customCard.css";
import { Add } from "../constants/Icons";
import { AddFileButton } from "../constants/Buttons";
import { useLocation } from "react-router-dom";

const CustomCard = (props) => {
  const location = useLocation().pathname;
  console.log("In menu path:", location)
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <Card
      className="card-header-container"
      title={
        <section className="card-header">
          {location === "/training-management" ||
          location === "/career-development-plan" ? (
            <>
            <section className="search-input">Search </section>
            <input type="search" className="search-input-item" placeholder="Employees Name "/>
            </>
          ) : (
            <>
             <section className="select-date">Select Period</section>
          <div className="get-date">
            <DatePicker
              placeholder="Start date time"
              size="large"
              onChange={onChange}
            />
            <DatePicker
              placeholder="End date time"
              size="large"
              onChange={onChange}
            />
          </div>

            </>
          )}

          <section className="add-file icon">
            {Add}
            Add Filter
          </section>
        </section>
      }
      bordered={false}
      {...props}
    ></Card>
  );
};

export default CustomCard;
