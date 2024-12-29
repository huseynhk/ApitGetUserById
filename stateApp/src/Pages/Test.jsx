import React, { useState, useEffect } from "react";
import { GetDatas } from "../api/getRequest";
import { toast } from "react-toastify";
import { Table, Spinner } from "react-bootstrap";
import { FaEye } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../constant/router";

function Manager() {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleData = async () => {
    setLoading(true);
    try {
      const response = await GetDatas();
      setDatas(response.users);
      setLoading(false);
    } catch (error) {
      toast.error("Failed to load products!", {
        autoClose: 1500,
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  const getRoleStyle = (role) => {
    switch (role) {
      case "admin":
        return { color: "blue" };
      case "moderator":
        return { color: "red" };
      case "user":
        return { color: "green" };
      default:
        return {};
    }
  };

  return (
    <div style={{ margin: "20px", textAlign: "center" }}>
      <h1>Data Manager</h1>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <Table
          striped
          bordered
          hover
          style={{ borderRadius: "8px", overflow: "hidden" }}
        >
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Age</th>
              <th>Role</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.age}</td>
                <td className="fw-bold" style={getRoleStyle(user.role)}>
                  {user.role}
                </td>
                {/* <td
                  className={`role-cell ${
                    user.role == "admin"
                      ? "admin"
                      : user.role === "moderator"
                      ? "moderator"
                      : "user"
                  }`}
                >
                  {user.role}
                </td> */}
                <td>
                  <FaEye
                    size={30}
                    color="blue"
                    className="eye-icon"
                    onClick={() => navigate(`${ROUTER.Detail}/${user.id}`)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default Manager;
