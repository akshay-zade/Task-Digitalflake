import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Category.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../untils/constant";

const Category = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/categorylist");
  };

  const [category, setCategory] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [updateUI, setUpdateUI] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  useEffect(() => {
    axios.get(`${baseUrl}/get`).then((res) => {
      console.log(res.data);
      setCategory(res.data);
    });
  }, [updateUI]);

  const addCategory = () => {
    axios.post(`${baseUrl}/save`, { task: newCategory }).then((res) => {
      console.log(res.date);
      setNewCategory("");
      setUpdateUI((prevState) => !prevState);
    });
  };

  const updatemode = (id, text) => {
    console.log(text);
    setNewCategory(text);
    setUpdateId(id);
  };

  const updateCategory = () => {
    axios
      .put(`${baseUrl}/update/${updateId}`, { task: newCategory })
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
        setUpdateId(null);
        setNewCategory("");
      });
  };

  return (
    <div>
      <Header />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <Sidebar />
            </div>
            <div className="col-md-10">
              <div>
                <form onSubmit={handleSubmit}>
                  <fieldset>
                    <legend className="font-weight-bold">Add Category</legend>
                    <div class="mb-3">
                      <label class="form-label">Categoery Name</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Your Categoery Name"
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Description</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Description"
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Status</label>
                      <select class="form-select">
                        <option>Active</option>
                      </select>
                    </div>

                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;
