import { Editor } from "@tinymce/tinymce-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { projectCategoryAction } from "../../redux/action/projectCategoryAction";
import { createProjectAction } from "../../redux/action/projectAction";

export default function CreateProject(props) {
  const projectCategory = useSelector((state) => {
    return state.projectCategoryReducer.projectCategory;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    getApiProjectCategory();
    // getApiCreateProject();
  }, []);

  const getApiProjectCategory = () => {
    const action = projectCategoryAction();
    dispatch(action);
  };

  // const getApiCreateProject = () => {
  //   let action = createProjectAction(values);
  //   dispatch(action);
  // }

  const renderProjectCategory = () => {
    return projectCategory.map((projectCategory) => {
      return (
        <option key={projectCategory.id} value={projectCategory.id}>
          {projectCategory.projectCategoryName}
        </option>
      );
    });
  };

  const categoryFormik = useFormik({
    initialValues: {
      projectName: "",
      categoryId: projectCategory.id,
      description: "",
      alias: "",
    },
    validationSchema: Yup.object({
      projectName: Yup.string().required("Vui lòng nhập tên dự án"),
    }),
    onSubmit: (values) => {
      // console.log("values create submit: ", values);
      let action = createProjectAction(values);
      dispatch(action);
    },
  });

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    setFieldValue,
    touched,
    values,
    errors,
  } = categoryFormik;

  const handleEditorChange = (content) => {
    setFieldValue("description", content);
    // console.log("content: ", content);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ width: "60%" }} className="mt-4">
        {/* Project name */}
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            className="form-control"
            name="projectName"
            placeholder="Tên dự án"
            // required="required"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.projectName}
          />
          {touched.projectName && errors.projectName ? (
            <div
              className="d-flex text-danger"
              style={{ margin: "0px", color: "red" }}
            >
              {errors.projectName}
            </div>
          ) : null}
        </div>
        {/* Category */}
        <div className="mb-3">
          <label className="form-label">Category</label>
          <select
            className="form-control"
            name="categoryId"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.categoryId}
          >
            {renderProjectCategory()}
          </select>
        </div>
        {/* Description */}
        <div className="mb-3">
          <label className="form-label">Description</label>
          <Editor
            name="description"
            initialValue="<p>Description</p>"
            init={{
              height: 300,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | " +
                "bold italic backcolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={handleEditorChange}
            value={values.description}
            onClick={(values) => {
              // getApiCreateProject(values);
              const action = createProjectAction(values);
              dispatch(action);
            }}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Save
        </button>
        <button
          type="button"
          className="btn btn-secondary ml-3"
          onClick={() => {
            props.history.goBack();
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
