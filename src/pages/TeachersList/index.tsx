import { useEffect, useState } from "react";

import PageHeader from "../../components/PageHeader";
import TeacherCard from "../../components/TeacherCard";
import TeachersFilter from "../../components/TeachersFilter";

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
        <TeacherCard />
        <TeacherCard />
      </div>
    </div>
  );
}

export default TeachersList;
