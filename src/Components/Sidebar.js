import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
// import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { FaInbox, FaTable, FaMoneyBill, FaBell, FaUser, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import VrpanoIcon from '@mui/icons-material/Vrpano';
import FormatTextdirectionRToLIcon from '@mui/icons-material/FormatTextdirectionRToL'; // Assuming a general RTL icon
import { closeSidebar } from '../features/LayoutSlice';
import './Sidebar.scss'

const Sidebar = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.layout.isSidebarOpen)//select the state
  const items = [
    { text: 'Dashboard', icon: <FaInbox /> },
    { text: 'Table', icon: <FaTable /> },
    { text: 'Billing', icon: <FaMoneyBill /> },
    { text: 'Virtual Reality', icon: <VrpanoIcon /> },
    { text: 'RTL', icon: <FormatTextdirectionRToLIcon /> },
    { text: 'Notification', icon: <FaBell /> },
    {text: 'Account Pages', items: [
        { text: 'Profile', icon: <FaUser /> },
        { text: 'Sign In', icon: <FaSignInAlt /> },
        { text: 'Sign up', icon: <FaUserPlus /> },
    ]}
  ];

  return (
    <div open={isSidebarOpen} onClose={() => dispatch(closeSidebar())} className='sidebar-main'>
      <div className="sidebar">
        <div className="sidebar-header">
          <a>
            <span className="sidebar-title">Admin Dashboard</span>
            <button className="x-btn" onClick={() => dispatch(closeSidebar())}>X</button>
          </a>
          
        </div>
        <List>
        {items.map((item, index) => (
            <React.Fragment key={index}>
              {item.items ? (
                <React.Fragment>
                  <ListItem>
                    <ListItemText primary={item.text} />
                  </ListItem>
                  <List component="div" disablePadding>
                    {item.items.map((subItem, subIndex) => (
                      <ListItem key={subIndex} className="nested-list-item">
                        <ListItemIcon>{subItem.icon}</ListItemIcon>
                        <ListItemText primary={subItem.text} />
                      </ListItem>
                    ))}
                  </List>
                </React.Fragment>
              ) : (
                <ListItem>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              )}
            </React.Fragment>
          ))}
        </List>
        <div className='sidebar-footer'>
          <a type='button' className='footer-btn'>Documentation</a>
          <a type='button' className='footer-btn'>Upgrade to Pro</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
