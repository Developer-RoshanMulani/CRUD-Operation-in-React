import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [apiData, setApiData] = useState([]);

  const getData = () => {
    axios
      .get("https://66d830cf37b1cadd8053be0d.mockapi.io/crud")
      .then((response) => {
        setApiData(response.data);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://66d830cf37b1cadd8053be0d.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      });
  };

  const setDataToStorage = (id, name, age, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("email", email);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="mb-2 mt-2">
            <Link to="/create">
              <button className="btn btn-primary">Create New Data</button>
            </Link>
          </div>

          <table className="table table-bordered table-striped table-dark table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>EMAIL</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {apiData.map((item) => {
                return (
                  <>
                    <tr>
                      <th>{item.id}</th>
                      <td>{item.e_name}</td>
                      <td>{item.e_age}</td>
                      <td>{item.e_email}</td>
                      <td>
                        <Link to="/edit">
                          <button
                            className="btn btn-primary"
                            onClick={() =>
                              setDataToStorage(
                                item.id,
                                item.e_name,
                                item.e_age,
                                item.e_email
                              )
                            }
                          >
                            Edit
                          </button>
                        </Link>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            if (
                              window.confirm("Are You Sure To Delete Data ??")
                            ) {
                              handleDelete(item.id);
                            }
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Read;
