import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "./SearchBar.utils";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <Formik
      initialValues={{ query: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSearch(values.query);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col sm:flex-row justify-center m-4">
          <Field name="query">
            {({ field, meta }: any) => (
              <div className="w-full sm:max-w-md">
                <input
                  type="text"
                  {...field}
                  placeholder="Search by country name, ISO code, or region"
                  className={`px-4 py-2 border rounded w-full ${
                    meta.touched && meta.error ? "border-red-500" : ""
                  }`}
                />
                <ErrorMessage
                  name={field.name}
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>
            )}
          </Field>
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 sm:mt-0 sm:ml-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Search
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SearchBar;
