import { Editor } from "@tinymce/tinymce-react";
import { Input } from "antd";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function ProjectDetail() {
  const projectDetail = useSelector((state) => state.projectReducer.projectDetail);
  // console.log("project-detail: ", projectDetail.members);
  
  return (
    <form action="">
      <div className="mb-3">
        <label className="form-label">Mã dự án</label>
        <Input
          className="form-control"
          name="projectId"
          value={projectDetail.id}
          readOnly="readOnly"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Tên dự án</label>
        <Input
          className="form-control"
          name="projectName"
          value={projectDetail.projectName}
          readOnly="readOnly"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Category</label>
        <select className="form-control" name="categoryId" readOnly="readOnly">
          <option>{projectDetail.projectCategory?.name}</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <Editor
          name="description"
          initialValue={projectDetail.description}
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
          value={projectDetail.creator?.name}
          readOnly="readOnly"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Member</label>
        <Input
          className="form-control"
          name="member"
          value={ projectDetail.members != '[]' ? projectDetail.members?.map(item => ` ${item.name}`) : ''}
          readOnly="readOnly"
        />
      </div>
    </form>
  );
}
