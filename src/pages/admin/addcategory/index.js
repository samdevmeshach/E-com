import React, { useState } from "react";
import { isAuthenticated } from "../../../api/auth";
import { Link } from "react-router-dom";
import { createCategory } from "../../../api/apiAdmin";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import SideBar from '../../../component/admin/sidebar'
import Header from '../../../component/header';
const AddCategory = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { user, token } = isAuthenticated();

  const handleChange = (e) => {
    setError("");
    setName(e.target.value);
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    createCategory(user._id, token, { name }).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setError("");
        setSuccess(true);
      }
    });
  };

  const newCategoryForm = () => (
    <div>
      <form onSubmit={clickSubmit}>
        <div className="form-group mt-4">
          <label className="text-muted">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            value={name}
            autoFocus
          />
        </div>
        <button className="btn btn-outline-primary mt-3">Create Category</button>
      </form>
    </div>
  );

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSuccess(false);
  };

  const handleCloseError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setError(false);
  };

  const showSuccess = () => {
    if (success) {
      return (
        <Snackbar open={success} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            {`${name} is created!`}
          </Alert>
        </Snackbar>
      );
    }
  };

  const showError = () => {
    if (error) {
      return (
        <Snackbar
          open={error}
          autoHideDuration={6000}
          onClose={handleCloseError}
        >
          <Alert onClose={handleCloseError} severity="error">
            {`${name} already exist`}
          </Alert>
        </Snackbar>
      );
    }
  };

  return (
    <div>
        <Header />
        <SideBar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 ">
          <div class="container">
          {showError()}
          {showSuccess()}
          {newCategoryForm()}
          </div>
          </div>
          </main>
    </div>
  );
};

export default AddCategory;
