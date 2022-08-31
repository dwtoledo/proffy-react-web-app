import * as yup from "yup";

const teacherFiltersValidators = yup.object().shape({
  teacher_subject: yup
    .string()
    .min(2, "Subject must have at least 2 characters!"),
});

export default teacherFiltersValidators;
