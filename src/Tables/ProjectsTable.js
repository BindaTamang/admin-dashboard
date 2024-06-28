import React from 'react';
import './ProjectTable.scss'

const ProjectsTable = ({projects}) => {
 
  return (
    <div className='project-container-fluid'>
    <div className="project-row">
      <div className="col-12">
        <div className="project-card my-4">
          <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
              <h6 className="text-white text-capitalize ps-3">Projects table</h6>
            </div>
          </div>
          <div className="card-body px-0 pb-2">
            <div className="table-responsive p-0">
              <table className="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Project</th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Budget</th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Status</th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">Completion</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project, index) => (
                    <tr key={index}>
                      <td>
                        <div className="d-flex px-2">
                          <div>
                            <img src={project.logo} className="avatar avatar-sm rounded-circle me-2" alt={project.name} />
                          </div>
                          <div className="my-auto">
                            <h6 className="mb-0 text-sm">{project.name}</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-sm font-weight-bold mb-0">{project.budget}</p>
                      </td>
                      <td>
                        <span className="text-xs font-weight-bold">{project.status}</span>
                      </td>
                      <td className="align-middle text-center">
                        <div className="d-flex align-items-center justify-content-center">
                          <span className="me-2 text-xs font-weight-bold">{`${project.completion}%`}</span>
                          <div>
                            <div className="progress">
                              <div className={`progress-bar ${project.status === 'done' ? 'bg-gradient-success' : 'bg-gradient-info'}`} role="progressbar" aria-valuenow={project.completion} aria-valuemin="0" aria-valuemax="100" style={{ width: `${project.completion}%` }}></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">
                        <button className="btn btn-link text-secondary mb-0">
                          <i className="fa fa-ellipsis-v text-xs"></i>
                        </button>
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
    </div>
  );
};

export default ProjectsTable;
