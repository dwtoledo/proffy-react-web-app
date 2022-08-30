import PageHeader from "../../components/PageHeader";

import "./styles.css";

function TeacherForm() {
  return (
    <div id="teacher-form">
      <PageHeader
        title="How amazing that you want to teach"
        description="Please fill out the application form:"
      />

      <div className="teacher-form__content container">
        <h2>teacher form content</h2>
      </div>
    </div>
  );
}

export default TeacherForm;
