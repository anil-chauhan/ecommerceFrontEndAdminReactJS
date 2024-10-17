import React from "react";
import { Link } from "react-router-dom";

const LogoHeader = () => {
  return (
    <Link to="../../index3.html" class="brand-link">
      <img
        src={`${process.env.PUBLIC_URL}/assets/dist/img/AdminLTELogo.png`}
        className="brand-image img-circle elevation-3"
        alt="AdminLTE Logo"
        style={{ opacity: "0.8" }}
      />
      <span class="brand-text font-weight-light">Munna Store</span>
    </Link>
  );
};

export default LogoHeader;
