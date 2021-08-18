import React, { useEffect,useState } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import {connect,useSelector} from 'react-redux'
import {getCategory, getFilter} from '../../redux/action'
import Checkbox from "../checkbox";
const Sidebar = ({category,Myfilter}) => {
    const [myFilter,setMyFilter] = useState({
      filter:{category:[],price:[]}
  })
  const [limit,setLimit] = useState(8)
  const [skip,setSkip] = useState(0)
  const handleFilter = (filter,filterBy) => {
    const newFilter = {...myFilter}
    newFilter.filter[filterBy] = filter
    setMyFilter(newFilter)
    Myfilter({skip,limit,myFilter})
}
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
            className="col-md-3 col-lg-2 d-lg-block bg-light sidebar collapse"
          >
            <div className="position-sticky pt-3 m-3">
              <ul className="nav flex-column">
                  <Checkbox  categories={categories} handleFilter={filter => handleFilter(filter,'category')}/>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToprop = {
    category : getCategory,
    Myfilter: getFilter
}

export default connect(null,mapDispatchToprop) (Sidebar);
