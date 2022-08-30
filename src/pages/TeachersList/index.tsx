import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import filtersValidators from "./validators/filters-validators";
import PageHeader from "../../components/PageHeader";

import "./styles.css";

interface IFilterFormInputs {
  teacher_subject: string;
  class_week_days: string;
  class_time: string;
}

function TeachersList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFilterFormInputs>({
    resolver: yupResolver(filtersValidators),
  });

  const onSubmit = (data: IFilterFormInputs) => {
    console.log(data);
  };

  return (
    <div id="teachers-list">
      <PageHeader title="Available Proffies">
        <form
          className="teachers-list__filters"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="teachers-list__input">
            <label htmlFor="teacher_subject">Subject</label>
            <input
              type="text"
              id="teacher_subject"
              {...register("teacher_subject")}
            />
            <p>{errors.teacher_subject?.message}</p>
          </div>

          <div className="teachers-list__input">
            <label htmlFor="class_week_days">Week day</label>
            <select id="class_week_days" {...register("class_week_days")}>
              <option value="all">All</option>
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wednesday">Wednesday</option>
              <option value="thursday">Thursday</option>
              <option value="friday">Friday</option>
              <option value="saturday">Saturday</option>
              <option value="sunday">Sunday</option>
            </select>
          </div>

          <div className="teachers-list__input">
            <label htmlFor="class_time">Time</label>
            <input type="time" id="class_time" {...register("class_time")} />
          </div>

          <button type="submit">Search</button>
        </form>
      </PageHeader>

      <div className="teachers-list__content container">
        <h2>teachers list content</h2>
      </div>
    </div>
  );
}

export default TeachersList;
