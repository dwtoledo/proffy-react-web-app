import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import teacherFiltersValidators from "./validators/teachers-filters-validators";
import "./styles.css";

interface IFilterFormInputs {
  teacher_subject: string;
  class_week_days: string;
  class_time: string;
}

type TeachersFilterProps = {
  filtersOutput: any;
};

function TeachersFilter({ filtersOutput }: TeachersFilterProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFilterFormInputs>({
    resolver: yupResolver(teacherFiltersValidators),
  });

  const onSubmit: SubmitHandler<IFilterFormInputs> = (
    userInputs: IFilterFormInputs
  ) => {
    filtersOutput(userInputs);
  };

  return (
    <form className="teachers-list__filters" onSubmit={handleSubmit(onSubmit)}>
      <div className="teachers-list__input">
        <label htmlFor="teacher_subject">Subject:</label>
        <input
          type="text"
          id="teacher_subject"
          {...register("teacher_subject")}
        />
        <p
          style={{
            display: errors.teacher_subject?.message ? "block" : "none",
          }}
        >
          {errors.teacher_subject?.message}
        </p>
      </div>

      <div className="teachers-list__input">
        <label htmlFor="class_week_days">Week day:</label>
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
        <label htmlFor="class_time">Time:</label>
        <input type="time" id="class_time" {...register("class_time")} />
      </div>

      <div className="teachers-list__input">
        <label style={{ visibility: "hidden" }}>Search:</label>
        <button type="submit" className="teachers-list__find-bttn">
          Find
        </button>
      </div>
    </form>
  );
}

export default TeachersFilter;
