import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  query: Yup.string()
    .trim()
    .min(2, "Search query must be at least 2 characters long"),
});
