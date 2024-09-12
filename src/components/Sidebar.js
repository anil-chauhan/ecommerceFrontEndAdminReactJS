import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav class="mt-2">
      <ul
        class="nav nav-pills nav-sidebar flex-column"
        data-widget="treeview"
        role="menu"
        data-accordion="false"
      >
        <li class="nav-item">
          <Link to="#" class="nav-link">
            <i class="nav-icon fas fa-tachometer-alt"></i>
            <p>Dashboard</p>
          </Link>
        </li>
        <li class="nav-item">
          <Link to="fileexplorer" class="nav-link">
            <i class="nav-icon fas fa-folder-open"></i>
            <p>File Explorer</p>
          </Link>
        </li>
        <li class="nav-item">
          <Link to={"#"} class="nav-link">
            <i class="nav-icon fas fa-tools"></i>
            <p>Settings</p>
          </Link>
        </li>
        {/*<li class="nav-item">
          <Link to={"#"} class="nav-link">
            <i class="nav-icon fas fa-chart-pie"></i>
            <p>Charts</p>
          </Link>
        </li>
        <li class="nav-item">
          <Link to={"#"} class="nav-link">
            <i class="nav-icon fas fa-tree"></i>
            <p>UI Elements</p>
          </Link>
        </li>
        <li class="nav-item">
          <Link to={"#"} class="nav-link">
            <i class="nav-icon fas fa-edit"></i>
            <p>Forms</p>
          </Link>
        </li>
        <li class="nav-item">
          <Link to={"#"} class="nav-link">
            <i class="nav-icon fas fa-table"></i>
            <p>Tables</p>
          </Link>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="../tables/simple.html" class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Simple Tables</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="../tables/data.html" class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>DataTables</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="../tables/jsgrid.html" class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>jsGrid</p>
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-header">MISCELLANEOUS</li>
        <li class="nav-item">
          <a href="../../iframe.html" class="nav-link">
            <i class="nav-icon fas fa-ellipsis-h"></i>
            <p>Tabbed IFrame Plugin</p>
          </a>
        </li>
        <li class="nav-item">
          <a href="https://adminlte.io/docs/3.1/" class="nav-link">
            <i class="nav-icon fas fa-file"></i>
            <p>Documentation</p>
          </a>
        </li>
        <li class="nav-header">MULTI LEVEL EXAMPLE</li>
        <li class="nav-item">
          <Link to={"#"} class="nav-link">
            <i class="fas fa-circle nav-icon"></i>
            <p>Level 1</p>
          </Link>
        </li>
        <li class="nav-item">
          <Link to={"#"} class="nav-link">
            <i class="nav-icon fas fa-circle"></i>
            <p>Level 1</p>
          </Link>
        </li>
        <li class="nav-item">
          <Link to={"#"} class="nav-link">
            <i class="fas fa-circle nav-icon"></i>
            <p>Level 1</p>
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Sidebar;
