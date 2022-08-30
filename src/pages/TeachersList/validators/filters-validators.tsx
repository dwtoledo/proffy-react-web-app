import * as yup from "yup";

const filtersValidators = yup.object().shape({
  teacher_subject: yup
    .string()
    .min(2, "subject must have at least 2 characters"),
});

export default filtersValidators;
