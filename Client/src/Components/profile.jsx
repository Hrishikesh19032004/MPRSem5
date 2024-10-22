import React from 'react';
import '../Styles/profile.css';
import { NavLink } from 'react-router-dom';
import userImg from '../Images/user.png'
import { useAuth } from '../store/auth';
const Profile = () => {
  const {user} = useAuth();
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <ul className="list-unstyled">
              <li className="dropdown ml-2">
                <div className="profile-icon-wrapper">
                  <div className="avatar avatar-md avatar-indicators avatar-online">
                    <img
                      alt="avatar"
                      src={userImg}
                      className="rounded-circle"
                    />
                  </div>

                  <div className="dropdown-menu" aria-labelledby="dropdownUser">
                    <div className="dropdown-item">
                      <div className="d-flex py-2">
                        
                        <div className="ml-3 lh-1">
                          <h5 className="mb-0" style={{fontSize:'1rem'}}>{user.username}</h5>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-divider"></div>
                    
                    <ul className="list-unstyled nav-links">
                      <li className="dropdown-item-separator">
                        <NavLink className="dropdown-item" to="/profile">
                          <span className="mr-1">
                            <i className="feather icon-user"></i>
                          </span>
                          Profile
                        </NavLink>
                      </li>
                      <li className="dropdown-item-separator">
                        <NavLink className="dropdown-item" to="/courses">
                          <span className="mr-1">
                            <i className="feather icon-book"></i>
                          </span>
                          Courses
                        </NavLink>
                      </li>
                      <li className="dropdown-item-separator">
                        <NavLink className="dropdown-item" to="/enrolled-courses">
                          <span className="mr-1">
                            <i className="feather icon-book"></i>
                          </span>
                          Enrolled Courses
                        </NavLink>
                      </li>
                      <li className="dropdown-item-separator">
                        <NavLink className="dropdown-item" to="/logout">
                          <span className="mr-1">
                            <i className="feather icon-power"></i>
                          </span>
                          Log Out
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;