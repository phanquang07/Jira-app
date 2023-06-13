import { Editor } from "@tinymce/tinymce-react";
import { Input } from "antd";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function EditProject() {
  const editProject = useSelector((state) => state.projectReducer.editProject);
  console.log("edit project: ", editProject);

  return (
    <form action="">
      <div className="mb-3">
        <label className="form-label">Mã dự án</label>
        <Input
          className="form-control"
          name="projectId"
          value={editProject.id}
          readOnly="readOnly"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Tên dự án</label>
        <Input
          className="form-control"
          name="projectName"
          value={editProject.projectName}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Category</label>
        <select className="form-control" name="categoryId">
          <option>{editProject.projectCategory?.name}</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <Editor
          name="description"
          initialValue={editProject.description}
          init={{
            height: 170,
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
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Creator</label>
        <Input
          className="form-control"
          name="creatorName"
          value={editProject.creator?.name}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Member</label>
        <Input
          className="form-control"
          name="member"
          value={
            editProject.members != "[]"
              ? editProject.members?.map((item) => ` ${item.name}`)
              : ""
          }
        />
      </div>
    </form>
  );
}
