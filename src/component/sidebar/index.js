import React, { useEffect } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import {connect,useSelector} from 'react-redux'
import {getCategory} from '../../redux/action'
import Checkbox from "../checkbox";
const Sidebar = ({category}) => {
    const categories = useSelector(state => state.data.category)
    useEffect(() => {
        category();
    },[])
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                  <Checkbox  categories={categories}/>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToprop = {
    category : getCategory
}

export default connect(null,mapDispatchToprop) (Sidebar);
