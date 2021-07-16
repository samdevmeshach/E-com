import React,{useState,useEffect} from "react";
import './style.scss'
import {data} from './SidebarData.js';
import {Link, Redirect, withRouter} from 'react-router-dom'

const isActive = (history,path) =>{
    if(history.location.pathname === path){
        return { color: "#2470dc"}
    }
    else{
        return {border:"none"}
    }
}



const Sidebar = ({history}) => {   
   
   
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
              {data.map((item, index) => {
              return (
                <li className="nav-item" key={index}>
                  <Link className="nav-link" style={isActive(history,item.path)} aria-current="page" to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
 
                {/* <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <Icon.Home className="mx-2" size={15} />
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <Icon.File className="mx-2" size={15} />
                    Orders
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <Icon.ShoppingCart className="mx-2" size={15} />
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <Icon.Users className="mx-2" size={15} />
                    Customers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="bar-chart-2"></span>
                    <Icon.BarChart2 className="mx-2" size={15} />
                    Reports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <Icon.Layers className="mx-2" size={15} />
                    Integrations
                  </a>
                </li> */}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Sidebar);
