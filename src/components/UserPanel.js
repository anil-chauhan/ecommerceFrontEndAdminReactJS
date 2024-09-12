import React from "react";
import { Link } from "react-router-dom";

const UserPanel = () => {
  return (
    <div class="user-panel mt-3 pb-3 mb-3 d-flex">
      <div class="image">
        <img
          src={`${process.env.PUBLIC_URL}/assets/dist/img/user2-160x160.jpg`}
          className="img-circle elevation-2"
          alt="UserImage"
        />
      </div>
      <div class="info">
        <Link to={"#"} class="d-block">
          Administrator Coy
        </Link>
      </div>
    </div>

    //   <div class="form-inline">
    //     <div class="input-group" data-widget="sidebar-search">
    //       <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
    //       <div class="input-group-append">
    //         <button class="btn btn-sidebar">
    //           <i class="fas fa-search fa-fw"></i>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
  );
};

export default UserPanel;
