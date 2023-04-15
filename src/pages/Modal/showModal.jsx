import { Editor } from "@tinymce/tinymce-react";
import { Input, Modal } from "antd";
import React from "react";

export default function showModal() {
  return (
    <Modal
      title="Basic Modal"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <form action="">
        <div className="mb-3">
          <label className="form-label">Mã dự án</label>
          <Input
            className="form-control"
            name="id"
            value={project.id}
            readOnly="readOnly"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tên dự án</label>
          <Input
            className="form-control"
            name="projectName"
            value={project.projectName}
            readOnly="readOnly"
          />
        </div>
        {/* <div className="mb-3">
        <label className="form-label">Danh mục</label>
        <Input
          className="form-control"
          name="categoryId"
          value={project.categoryName}
          readOnly="readOnly"
        />
      </div> */}
        <div className="mb-3">
          <label className="form-label">Category</label>
          <select
            className="form-control"
            name="categoryId"
            readOnly="readOnly"
          >
            <option>{project.categoryName}</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <Editor
            name="description"
            initialValue={project.description}
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
            value={project.creator.name}
            readOnly="readOnly"
          />
        </div>
        {/* <div className="mb-3">
        <label className="form-label">Member</label>
        <Input
          className="form-control"
          name="member"
          value={project.members}
          readOnly="readOnly"
        />
      </div> */}
      </form>
    </Modal>
  );
}
