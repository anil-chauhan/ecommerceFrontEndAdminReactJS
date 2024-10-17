import React from "react";
import { Link } from "react-router-dom";
import logo from "./../logo.svg";

const Header = () => {
  return (
    <nav class="main-header navbar navbar-expand  navbar-dark navbar-dark">
      <ul class="navbar-nav">
        {/* Menu burger */}
        <li class="nav-item">
          <Link class="nav-link" data-widget="pushmenu" to="#" role="button">
            <i class="fas fa-bars"></i>
          </Link>
        </li>
        {/* Menu Home */}
        {/* <li class="nav-item d-none d-sm-inline-block">
        <Link to="#" class="nav-link">
          Home
        </Link>
      </li> */}
        {/* Menu Contact */}
        {/* <li class="nav-item d-none d-sm-inline-block">
        <Link to="#" class="nav-link">
          Contact
        </Link>
      </li> */}
      </ul>
      <ul class="navbar-nav ml-auto">
        {/* Messege Link button */}
        <li class="nav-item dropdown">
          <Link class="nav-link" data-toggle="dropdown" to={"#"}>
            <i class="far fa-comments"></i>
            <span class="badge badge-danger navbar-badge">3</span>
          </Link>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <Link to={"#"} class="dropdown-item">
              <div class="media">
                <img
                  src={logo}
                  className="img-size-50 mr-3 img-circle"
                  alt="User Avatar"
                />
                <div class="media-body">
                  <h3 class="dropdown-item-title">
                    Brad Diesel
                    <span class="float-right text-sm text-danger">
                      <i class="fas fa-star"></i>
                    </span>
                  </h3>
                  <p class="text-sm">Call me whenever you can...</p>
                  <p class="text-sm text-muted">
                    <i class="far fa-clock mr-1"></i> 4 Hours Ago
                  </p>
                </div>
              </div>
            </Link>
            <div class="dropdown-divider"></div>
            <Link to={"#"} class="dropdown-item">
              <div class="media">
                {/* <img src="../../dist/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3"> */}
                <img
                  src={logo}
                  className="img-size-50 img-circle mr-3"
                  alt="User Avatar"
                />
                <div class="media-body">
                  <h3 class="dropdown-item-title">
                    John Pierce
                    <span class="float-right text-sm text-muted">
                      <i class="fas fa-star"></i>
                    </span>
                  </h3>
                  <p class="text-sm">I got your message bro</p>
                  <p class="text-sm text-muted">
                    <i class="far fa-clock mr-1"></i> 4 Hours Ago
                  </p>
                </div>
              </div>
            </Link>
            <div class="dropdown-divider"></div>
            <Link to={"#"} class="dropdown-item">
              <div class="media">
                {/* <img src={"../../dist/img/user3-128x128.jpg"} alt="User Avatar" class="img-size-50 img-circle mr-3"> */}
                <img
                  src={logo}
                  className="img-size-50 img-circle mr-3"
                  alt="User Avatar"
                />
                <div class="media-body">
                  <h3 class="dropdown-item-title">
                    Nora Silvester
                    <span class="float-right text-sm text-warning">
                      <i class="fas fa-star"></i>
                    </span>
                  </h3>
                  <p class="text-sm">The subject goes here</p>
                  <p class="text-sm text-muted">
                    <i class="far fa-clock mr-1"></i> 4 Hours Ago
                  </p>
                </div>
              </div>
            </Link>
            <div class="dropdown-divider"></div>
            <Link to="#" class="dropdown-item dropdown-footer">
              See All Messages
            </Link>
          </div>
        </li>
        {/* Notification Link button */}
        <li class="nav-item dropdown">
          <Link class="nav-link" data-toggle="dropdown" to={"#"}>
            <i class="far fa-bell"></i>
            <span class="badge badge-warning navbar-badge">15</span>
          </Link>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span class="dropdown-item dropdown-header">15 Notifications</span>
            <div class="dropdown-divider"></div>
            <Link to="#" class="dropdown-item">
              <i class="fas fa-envelope mr-2"></i> 4 new messages
              <span class="float-right text-muted text-sm">3 mins</span>
            </Link>
            <div class="dropdown-divider"></div>
            <Link to="#" class="dropdown-item">
              <i class="fas fa-users mr-2"></i> 8 friend requests
              <span class="float-right text-muted text-sm">12 hours</span>
            </Link>
            <div class="dropdown-divider"></div>
            <Link to="#" class="dropdown-item">
              <i class="fas fa-file mr-2"></i> 3 new reports
              <span class="float-right text-muted text-sm">2 days</span>
            </Link>
            <div class="dropdown-divider"></div>
            <Link to="#" class="dropdown-item dropdown-footer">
              See All Notifications
            </Link>
          </div>
        </li>
        {/* Fullscreen Link button */}
        <li class="nav-item">
          <Link
            class="nav-link"
            data-widget="fullscreen"
            to={"#"}
            role="button"
          >
            <i class="fas fa-expand-arrows-alt"></i>
          </Link>
        </li>
        {/* Control link button */}
        {/* <li class="nav-item">
        <Link
          class="nav-link"
          data-widget="control-sidebar"
          data-slide="true"
          to="#"
          role="button"
        >
          <i class="fas fa-th-large"></i>
        </Link>
      </li> */}
      </ul>
    </nav>
  );
};

export default Header;
