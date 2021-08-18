import React, { useState, useEffect } from "react";
import "./style.scss";
import Header from "../../../component/header";
import Sidebar from "../../../component/admin/sidebar";
import { connect, useSelector } from "react-redux";
import { getCategory,deleteCat} from "../../../redux/action";
import * as Icon from "react-feather";
import { isAuthenticated } from "../../../api/auth";
const AdminCategory = ({ category,deleteCategory,history }) => {
  const {user,token} = isAuthenticated()
  const categoryList = useSelector((state) => state.data.category);
  useEffect(() => {
    category();
  }, []);
const deleteCate = (id) => {
    deleteCategory(user._id,token,id);
}
  return (
    <div className="Category">
      <Header />
      <Sidebar />
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 ">
          <div class="container">
            <table class="table table-borderless">
              {categoryList.map((data, i) => {
                return (
                  <tr>
                    <td>{data.name}</td>
                    {/* <Icon.Edit className="mx-2 mt-3 feather" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top" size={15} onClick={(e) => editPage(e,data._id)} /> */}
                    <Icon.Trash className="mx-2 feather" data-bs-toggle="modal" data-bs-target={`#exampleModal${i}`} size={15}/>

                        {/* model */}

                        <div class="modal fade" id={`exampleModal${i}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">{data.name}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                Are you sure want to delete {data.name}?
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={() => deleteCate(data._id)}>Confirm</button>
                              </div>
                            </div>
                          </div>
                        </div>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

const mapDispatchToProp = {
  category : getCategory,
  deleteCategory : deleteCat
};

export default connect(null, mapDispatchToProp)(AdminCategory);
