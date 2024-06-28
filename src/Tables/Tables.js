import React from 'react';
import AuthorsTable from './AuthorsTable'; // Ensure correct path to AuthorsTable component
import ProjectsTable from './ProjectsTable'; // Adjust as per your project structure
import './Tables.scss'

const Table = () => {
  const authors = [
    {
      id: 1,
      name: 'John Michael',
      email: 'john@creative-tim.com',
      avatar: '../img/team-2.jpg', // Adjust avatar path based on your project structure
      function: 'Manager',
      department: 'Organization',
      status: 'Online',
      employedDate: '23/04/18'
    },
    {
      id: 2,
      name: 'Alexa Liras',
      email: 'alexa@creative-tim.com',
      avatar: '../img/team-3.jpg', // Adjust avatar path based on your project structure
      function: 'Programator',
      department: 'Developer',
      status: 'Offline',
      employedDate: '11/01/19'
    },
    {
      id: 3,
      name: 'Laurent Perrier',
      email: 'laurent@creative-tim.com',
      avatar: '../img/team-4.jpg', // Adjust avatar path based on your project structure
      function: 'Executive',
      department: 'Projects',
      status: 'Online',
      employedDate: '19/09/17'
    },
    // Add more authors as needed
  ];
  const projects = [
    {
      name: 'Asana',
      logo: '../img/logo-asana.svg',
      budget: '$2,500',
      status: 'working',
      completion: 60,
    },
    {
      name: 'Github',
      logo: '../img/github.svg',
      budget: '$5,000',
      status: 'done',
      completion: 100,
    },
    {
      name: 'Atlassian',
      logo: '../img/logo-atlassian.svg',
      budget: '$3,400',
      status: 'canceled',
      completion: 30,
    },
    {
      name: 'Bootstrap',
      logo: '../img/bootstrap.svg',
      budget: '$14,000',
      status: 'working',
      completion: 80,
    },
    {
      name: 'Slack',
      logo: '../img/logo-slack.svg',
      budget: '$1,000',
      status: 'canceled',
      completion: 0,
    },
    {
      name: 'Devto',
      logo: '../img/devto.svg',
      budget: '$2,300',
      status: 'done',
      completion: 100,
    },
  ];


  return (
    <div className='tables'>
      <div className='author-table'>
      <AuthorsTable authors={authors} />
      </div>
      <div className='project-table'>
        <ProjectsTable projects={projects}/> {/* Adjust this according to your project */}
      </div>
      
      
    </div>
  );
};

export default Table;
