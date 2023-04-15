import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProjectAction,
  projectDetailAction,
  projectListAction,
} from "../../redux/action/projectAction";
import { useRef } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AutoComplete,
  Avatar,
  Button,
  Modal,
  Popconfirm,
  Popover,
  Space,
  Table,
  Tag,
} from "antd";
import { EyeOutlined, FormOutlined, DeleteOutlined } from "@ant-design/icons";
import { SEARCH_USER } from "../../redux/types/projectListType";
import ProjectDetail from "./ProjectDetail";

export default function ProjectManagement() {
  const projectList = useSelector((state) => state.projectReducer.projectList);
  // console.log("Project List: ", projectList);

  const projectDetail = useSelector(
    (state) => state.projectReducer.projectDetail
  );
  // console.log("projectDetail: ", projectDetail);

  const usersSearched = useSelector((state) => state.userReducer.usersSearched);
  // console.log("usersSearched: ", usersSearched);
  const [userSearch, setUserSearch] = useState("");

  const dispatch = useDispatch();

  const [state, setState] = useState({
    filteredInfo: null,
    sortedInfo: null,
  });

  useEffect(() => {
    getApiProjectManagement();
    // getApiProjectDetail();
  }, []);

  const searchRef = useRef(null);

  const handleChange = (pagination, filters, sorter, extra) => {
    // console.log("filters, sorter: ", pagination, filters, sorter, extra);
    setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  const clearFilters = () => {
    setState({
      filteredInfo: null,
    });
  };

  const clearAll = () => {
    setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  let { sortedInfo, filteredInfo } = state;
  sortedInfo = sortedInfo || {};
  filteredInfo = filteredInfo || {};

  const content = (record, index) => {
    // console.log("record: ", record);
    return (
      <div>
        <AutoComplete
          value={userSearch}
          onChange={(value) => {
            setUserSearch(value);
          }}
          options={usersSearched
            ?.filter((user) => {
              let index = record.members.findIndex(
                (member) => member.userId === user.userId
              );
              if (index !== -1) {
                return false;
              }
              return true;
            })
            .map((user, index) => {
              return { label: user.login, value: user.userId, key: index };
            })}
          style={{ width: "100%" }}
          onSelect={(value, option) => {
            setUserSearch(option.label);
            dispatch({
              type: GET_LIST_MEMBER,
              project: {
                ...record,
                members: [...record.members, { id: value }],
              },
            });
          }}
          onSearch={(value) => {
            if (searchRef.current) {
              clearTimeout(searchRef.current);
            }
            searchRef.current = setTimeout(() => {
              dispatch({
                type: SEARCH_USER,
                projectName: value,
              });
            }, 300);
          }}
          placeholder="Username"
        />
      </div>
    );
  };

  // console.log("projectList: ", projectList);
  let dataListProject = projectList.map((item) => {
    // console.log("item: ", item);
    return {
      ...item,
      projectCategoryName: item.projectCategoryName,
    };
  });

  const getApiProjectManagement = () => {
    const action = projectListAction();
    dispatch(action);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showProjectDetail = (id) => {
    setIsModalOpen(true);
    const action = projectDetailAction(id);
    dispatch(action);
  };

  const deleteProject = (id) => {
    const action = deleteProjectAction(id)
    dispatch(action)
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      width: "100px",
    },
    {
      title: "Project Name",
      dataIndex: "projectName",
      key: "projectName",
      render: (text, record) => {
        return (
          <NavLink to={`/board/${record.alias}`} style={{ cursor: "pointer" }}>
            {text}
          </NavLink>
        );
      },
      sorter: (a, b) => a.projectName.length - b.projectName.length,
      sortOrder: sortedInfo.columnKey === "projectName" && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: "Category",
      dataIndex: "categoryName",
      key: "categoryName",
      filters: [
        { text: "Dự án web", value: "Dự án web" },
        { text: "Dự án phần mềm", value: "Dự án phần mềm" },
        { text: "Dự án di động", value: "Dự án di động" },
      ],
      filteredValue: filteredInfo.categoryName || null,
      onFilter: (value, record) => record.categoryName.includes(value),
      sorter: (a, b) => a.categoryName.length - b.categoryName.length,
      sortOrder: sortedInfo.columnKey === "categoryName" && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: "Creator",
      dataIndex: "creator",
      key: "creator",
      sorter: (a, b) => a.creator.name.length - b.creator.name.length,
      sortOrder: sortedInfo.columnKey === "creator" && sortedInfo.order,
      ellipsis: true,
      render: (text, record) => {
        // console.log("record: ", record);
        return record.creator.name === "admin" ? (
          <Tag color="#f50" key={record.creator.id}>
            {record.creator.name}
          </Tag>
        ) : record.creator.name === "members" ? (
          <Tag color="#108ee9" key={record.creator.id}>
            {record.creator.name}
          </Tag>
        ) : (
          <Tag color="#1ca027" key={record.creator.id}>
            {record.creator.name}
          </Tag>
        );
      },
    },
    {
      title: "Members",
      dataIndex: "member",
      key: "member",
      render: (text, record, index) => {
        return (
          <>
            <Avatar.Group
              maxCount={2}
              maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
              key={index}
            >
              {record.members.map((member) => {
                // console.log("member: ", member);
                return member.avatar === "" || member.avatar === null ? (
                  <Avatar key={member.userId}>
                    {member.login.charAt(0).toUpperCase()}
                  </Avatar>
                ) : (
                  <Avatar src={member.avatar} key={member.userId} />
                );
              })}
            </Avatar.Group>
            <Popover
              placement="topLeft"
              title={"Add Member"}
              content={content(record, index)}
              trigger="click"
            >
              <Button
                type="primary"
                size="small"
                style={{ fontWeight: "bold", fontSize: 15 }}
              >
                +
              </Button>
            </Popover>

            <Popover
              placement="topLeft"
              title={"Members"}
              content={() => {
                return (
                  <table className="table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Avatar</th>
                        <th>Account</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {record.members?.map((member) => {
                        return (
                          <tr key={member.userId}>
                            <th>{member.userId}</th>
                            <td>
                              {member.avatar === "" ||
                              member.avatar === null ? (
                                <Avatar key={member.id}>
                                  {member.login.charAt(0).toUpperCase()}
                                </Avatar>
                              ) : (
                                <Avatar
                                  src={member.avatar}
                                  key={member.userId}
                                />
                              )}
                            </td>
                            <td>{member.login}</td>
                            <td>
                              <Button
                                className="ml-1"
                                type="danger"
                                size="small"
                                style={{ fontWeight: "bold", fontSize: 15 }}
                                // onClick={() => {
                                //   dispatch({
                                //     type: DELETE_MEMBER_FROM_PROJECT_SAGA,
                                //     project: {
                                //       ...record,
                                //       members: record.members.filter(
                                //         (item) => item.id !== member.id
                                //       ),
                                //     },
                                //   });
                                // }}
                              >
                                X
                              </Button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                );
              }}
              trigger="click"
            >
              <Button
                className="ml-1"
                type="danger"
                size="small"
                style={{ fontWeight: "bold", fontSize: 15 }}
              >
                X
              </Button>
            </Popover>
          </>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "",
      key: "id",
      width: "150px",
      render: (text, record, index) => (
        // console.log("record action: ", record);
        <>
          <div style={{ display: "flex" }}>
            <div>
              <span
                style={{ cursor: "pointer" }}
                key={index}
                onClick={() => {
                  // console.log('record: ', record.id);
                  showProjectDetail(record.id);
                }}
              >
                <EyeOutlined style={{ fontSize: 18 }} />
              </span>
            </div>
            <div>
              <span
                className="bg-primary text-white ml-3"
                style={{
                  padding: 6,
                  borderRadius: "3px",
                  paddingBottom: 8,
                  cursor: "pointer",
                }}
                onClick={() => {
                  // showEditProjectDrawer(record.id);
                }}
              >
                <FormOutlined style={{ fontSize: 18 }} />
              </span>
            </div>
            <div>
              <span>
                <Popconfirm
                  title="Xóa dự án?"
                  // onConfirm={() => {
                  //   // dispatch({
                  //   //   type: DELETE_PORJECT_SAGA,
                  //   //   id: record.id,
                  //   //   Creator: record.Creator,
                  //   // });
                  // }}
                  onConfirm={() => {
                    deleteProject(record.id);
                  }}
                  okText="Yes"
                  cancelText="No"
                >
                  <span
                    className="bg-danger text-white ml-2"
                    style={{
                      padding: 6,
                      borderRadius: "3px",
                      paddingBottom: 8,
                      cursor: "pointer",
                    }}
                  >
                    <DeleteOutlined style={{ fontSize: 18 }} />
                  </span>
                </Popconfirm>
              </span>
            </div>
          </div>
          <Modal
            title="Thông tin chi tiết"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            width={1000}
          >
            <ProjectDetail />
          </Modal>
        </>
      ),
    },
  ];

  return (
    <div className="mt-5">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <Space style={{ marginBottom: 16 }}>
          <Button onClick={clearFilters}>Clear filters</Button>
          <Button onClick={clearAll}>Clear filters and sorters</Button>
        </Space>
        <Space>
          <NavLink to="/Project/createProjectAuthorize">
            <button className="btn btn-success btn-sm" type="button">
              <i className="fa fa-plus"></i>
              <span style={{ marginLeft: 4 }}>Create New Project</span>
            </button>
          </NavLink>
        </Space>
      </div>
      <Table
        columns={columns}
        rowKey={"id"}
        dataSource={dataListProject}
        onChange={handleChange}
      />
      {/* {console.log("dataListProject", dataListProject)} */}
    </div>
  );
}
