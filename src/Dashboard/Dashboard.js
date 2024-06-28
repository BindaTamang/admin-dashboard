// src/components/Dashboard.jsx
import React from "react";
import DashboardCard from "./DashboardCard"; // Ensure this import is not duplicated
import { Grid } from "@mui/material";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import ItemCard from "./ItemCard";
import ProjectsCard from "./ProjectsCard";
import "./Dashboard.scss";
import OrdersoverviewCard from "./OrdersoverviewCard";

const Dashboard = () => {
  const items = [
    {
      id: 1,
      name: "Website Views",
      description: "Last Campaign Performance",
      image: "./img/webs.png",
      footerIcon: <FaCalendarAlt />,
      footerText: "campaign sent 2 days ago",
    },
    {
      
      name: "Daily Sales",
      value: "(+15%)",
      description: "increase in today sales.",
      image: "./img/sales.jpg",
      footerIcon: <FaCalendarAlt />,
      footerText: "updated 4 min ago",
    },
    {
      
      name: "Completed Tasks",
      description: "Last Campaign Performance",
      image: "./img/tasks.jpg",
      footerIcon: <FaCalendarAlt />,
      footerText: "just updated",
    },
  ];
  const projects = [
    {
      
      companyLogo: "../img/logo-xd.svg",
      companyName: "Material SD Version",
      members: [
        { name: "Ryan Tompson", image: "../img/team-1.jpg"},
        { name: 'Romina Hadid', imgage: '../img/team-2.jpg'},
        { name: 'Alexander Smith', imgage: '../img/team-3.jpg'},
        { name: 'Jessica Doe', imgage: '../img/team-4.jpg'}
      ],
      budget: "$14,000",
      completion: 60,
    },
    {
      companyLogo: "../img/logo-atlassian.svg",
      companyName: "Add Progress Track",
      members: [
        { name: "Romina Hadid", image: "../img/team-2.jpg" },
        {  name: 'Jessica Doe', imgage: '../img/team-4.jpg'}
      ],
      budget: "$3,000",
      completion: 10,
    },
    {
      companyLogo: "../img/logo-slack.svg",
      companyName: "Fix Platform Errors",
      members: [
        { name: "Romina Hadid", image: "../img/team-2.jpg" },
        {  name: 'Jessica Doe', imgage: '../img/team-4.jpg'}
      ],
      budget: "Not set",
      completion: 100,
    },
    {
      companyLogo: "../img/logo-spotify.svg",
      companyName: "Launch our Mobile App",
      members: [
        { name: "Ryan Tompson", image: "../img/team-1.jpg" },
        { name: 'Romina Hadid', imgage: '../img/team-2.jpg'},
        { name: 'Alexander Smith', imgage: '../img/team-3.jpg'},
        { name: 'Jessica Doe', imgage: '../img/team-4.jpg'}
      ],
      budget: "$20,500",
      completion: 100,
    },
    {
      companyLogo: "../img/logo-jira.svg",
      companyName: "Add the New Online Pricing Page",
      members: [{name: "Ryan Tompson", image: "../img/team-1.jpg" }],
      budget: "$500",
      completion: 25,
    },
    {
      companyLogo: "../img/logo-invision.svg",
      companyName: "Launch our Mobile App",
      members: [
        { 
          id: 1,
          name: "Ryan Tompson", 
          image: "../img/team-1.jpg" ,
          
        },
        {
          
          name: 'Jessica Doe', 
        imgage: '../img/team-4.jpg'
      }
      ],
      budget: "$2,000",
      completion: 40,
    },        
  ];

  return (
    <div className="dashboard">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard
            icon={{ name: "weekend", color: "info", icon: <FaUser /> }}
            title="Today's Money"
            value="$53K"
            footerIcon={{ value: "+55%", color: "success" }}
            footerText="than last week"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard
            icon={{ name: "person", color: "primary" }}
            title="Today's Users"
            value="2,300"
            footerIcon={{ value: "+3%", color: "success" }}
            footerText="than last month"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard
            icon={{ name: "person", color: "success" }}
            title="New Clients"
            value="3,462"
            footerIcon={{ value: "-2%", color: "danger" }}
            footerText="than yesterday"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard
            icon={{ name: "weekend", color: "info" }}
            title="Sales"
            value="$103,430"
            footerIcon={{ value: "+5%", color: "success" }}
            footerText="than yesterday"
          />
        </Grid>
      </Grid>
      <div className="item-list">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
      <div className="flex-container">
        <div className="project-container">
          <ProjectsCard projects={projects} />
        </div>
        <div className="orderoverview-container">
          <OrdersoverviewCard />
        </div>
      </div>
      </div>
      )
};

export default Dashboard;
