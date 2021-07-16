import React,{useState,useEffect} from "react";
import {Link, Redirect, withRouter} from 'react-router-dom'
import Sidebar from "../admin/sidebar";
import Header from "../header";

const isActive = (history,path) =>{
    if(history.location.pathname === path){
        return { color: "#2470dc"}
    }
    else{
        return {border:"none"}
    }
}



const Dashboard = ({history}) => {   
   
   
  return (
    <div>
        <Header />
        <Sidebar />
    </div>
  );
};

export default Dashboard;
