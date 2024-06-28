import React from 'react';
import { Icon } from '@mui/material';
import PropTypes from 'prop-types';
import './DashboardCard.scss'


const DashboardCard = ({ icon, title, value, footerText, footerIcon }) => {
  return (
    <div className="card border-primary">
      <div>
      <div className={`icon icon-lg bg-gradient-${icon.color}`}>
        <Icon>{icon.name}</Icon>
      </div>
      <div className="text-end">
        <p className="text-sm">{title}</p>
        <h4>{value}</h4>
      </div>
      <hr className="horizontal" />
      <div className="card-footer">
        <p className="text-sm">
          <span className={`text-sm font-weight-bolder text-${footerIcon.color}`}>
            {footerIcon.value}
          </span>
          {" "}
          {footerText}
        </p>
      </div>
      </div>
       
    </div>
  );
}

DashboardCard.propTypes = {
  icon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  footerIcon: PropTypes.shape({
    value: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};

export default DashboardCard;
