import React from "react";
import "./issuesDetailsCard.css";
import UserPic from "../../assets/images/user-id.png";
import { Button } from "antd";
import {
  LocationBlue,
  DownloadBlue,
  Darkclock,
  SolvedGreen,
  ProgIcon,
} from "../constants/Icons";

const IssuesDetailsCard = ({ issueQueue }) => {
  return (
    <>
      <section className="issues-details">
        <section className="issue-top-bar">
          <h3>Saftey Lifting</h3>
          <div className="user-details">
            <h4>Mikal Jackson</h4>
            <div className="user-img">
              <img src={UserPic} alt="user-pic" />
            </div>
          </div>
        </section>
        <section className="issue-body-bar">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>
        </section>
        <section className="issue-footer-bar">
          <section className="footer-left">
            {issueQueue === "Issue Solved" ? (
              <Button className="issue-solved-btn">
                {SolvedGreen} {issueQueue}
              </Button>
            ) : (
              <>
                {issueQueue === "Progress Issues" ? (
                  <Button className="issue-progress-btn">
                    {ProgIcon} {issueQueue}
                  </Button>
                ) : (
                  <Button className="issue-open-btn">
                    {ProgIcon} {issueQueue}
                  </Button>
                )}
              </>
            )}

            <Button>{LocationBlue}Location</Button>
            <Button>{DownloadBlue}Pictures</Button>
          </section>
          <section className="footer-right">
            <Button>{Darkclock}24, Jan, 2021</Button>
          </section>
        </section>
      </section>
    </>
  );
};

export default IssuesDetailsCard;
