import "./solvedIssue.css";
import IssuesHeader from "../../components/issuesHeader/issuesHeader";
import IssuesDetailsCard from "../../components/issuesDetailsCard/issuesDetailsCard";
const SolvedIssue = () => {
  return (
    <section className="solved-issue">
      <IssuesHeader />
      <section className="showIssueCard">
        <section className="heading-bar">Solved Issues</section>
        <section className="body">
          <IssuesDetailsCard issueQueue ="Issue Solved"/>
          <IssuesDetailsCard issueQueue ="Issue Solved"/>
          <IssuesDetailsCard issueQueue ="Issue Solved"/>
          <IssuesDetailsCard issueQueue ="Issue Solved"/>
        </section>
      </section>
    </section>
  );
};
export default SolvedIssue;
