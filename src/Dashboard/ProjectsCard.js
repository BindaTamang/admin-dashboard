import React, { useState } from "react";
import "./ProjectCard.scss";

const ProjectsCard = ({ projects }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="row mb-4">
      <div className="col-lg-8 col-md-6 mb-md-0 mb-4">
        <div className="project-card">
          <div className="project-card-header pb-0">
            <div className="row">
              <div className="col-lg-6 col-7">
                <h3>Projects</h3>
                <p className="text-sm mb-0">
                  <i className="fa fa-check text-info" aria-hidden="true"></i>
                  <span className="font-weight-bold ms-1">30 done</span> this
                  month
                </p>
              </div>
              <div className="col-lg-6 col-5 my-auto text-end">
                <div className="dropdown float-lg-end pe-4">
                  <a
                    className="cursor-pointer"
                    id="dropdownTable"
                    onClick={toggleDropdown}
                  >
                    <i className="fa fa-ellipsis-v text-secondary"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body px-0 pb-2">
            <div className="table-responsive">
              <table className="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Companies
                    </th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                      Members
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Budget
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Completion
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project, index) => (
                    <tr key={index}>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div className="project-logo flex">
                            <img
                              src={project.companyLogo}
                              className="avatar avatar-sm rounded-circle me-3"
                              alt={project.companyName}
                            />
                            <h6 className="mb-0 text-sm">
                              {project.companyName}
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="avatar-group mt-2">
                          {project.members.map((member, memberIndex) => (
                            <div
                              key={memberIndex}
                              className={`avatar avatar-wrapper position-${memberIndex}`}
                              style={{
                                left:` ${index * 10}px`, 
                                zIndex:` ${index}`, 
                              }}
                              
                            >
                              <img
                                src={member.image} alt={member.name}
                              />
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="text-xs font-weight-bold">
                          {project.budget}
                        </span>
                      </td>
                      <td className="align-middle">
                        <div className="progress-wrapper w-75 mx-auto">
                          <div className="progress-info">
                            <div className="progress-percentage">
                              <span className="text-xs font-weight-bold">
                                {project.completion}%
                              </span>
                            </div>
                          </div>
                          <div className="progress">
                            <div
                              className="progress-bar bg-gradient-info"
                              role="progressbar"
                              style={{ width: `${project.completion}%` }}
                              aria-valuenow={project.completion}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
