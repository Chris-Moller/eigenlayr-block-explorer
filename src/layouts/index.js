import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "../components/shared-comps/Navbar";
import Footer from "../components/shared-comps/Footer"

function DashboardLayout() {
  return (
<>
      <CssBaseline />
      <Navbar/>
        <Outlet />
        <Footer/>
        </>

  );
}

DashboardLayout.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayout;
