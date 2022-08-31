import { useEffect, useState } from "react";

import PageHeader from "../../components/PageHeader";
import TeachersFilter from "./components/TeachersFilter";

import "./styles.css";

function TeachersList() {
  const [filters, setFilters] = useState("");

  const filtersOutput = async (userInputs: any) => {
    setFilters(userInputs);
  };

  useEffect(() => {
    console.log(filters);
  });

  return (
    <div id="teachers-list">
      <PageHeader
        title="Available Proffies"
        description="Filter the amazing teachers we have:"
      >
        <TeachersFilter filtersOutput={filtersOutput} />
      </PageHeader>

      <div className="teachers-list__content container">
        <h2>teachers list content</h2>
      </div>
    </div>
  );
}

export default TeachersList;
