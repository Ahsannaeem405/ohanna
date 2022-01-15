import "./workflowTag.css";

const WorkflowTag = ({ title, subtitle }) => {
  return (
    <section className="workflow-tag_container">
      <section className="title">{title}</section>
      <section className="subtitle">{subtitle}</section>
    </section>
  );
};

export default WorkflowTag;
