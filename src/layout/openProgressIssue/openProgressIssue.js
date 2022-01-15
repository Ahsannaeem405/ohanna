import React from 'react'
import './openProgressIssue.css'
import IssuesHeader from "../../components/issuesHeader/issuesHeader";
import IssuesDetailsCard from "../../components/issuesDetailsCard/issuesDetailsCard";

const OpenProgressIssue = () => {
    return (
        <section className="open-issue">
          <IssuesHeader />
          <section className="showIssueCard">
            <section className="heading-bar">Progress Issues</section>
            <section className="body">
              <IssuesDetailsCard issueQueue ="Progress Issues"/>
              <IssuesDetailsCard issueQueue ="open"/>
              <IssuesDetailsCard issueQueue ="Progress Issues"/>
              <IssuesDetailsCard issueQueue ="Progress Issues"/>
            </section>
          </section>
        </section>
      );
}

export default OpenProgressIssue
