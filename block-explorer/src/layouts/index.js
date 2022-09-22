import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "../components/shared-comps/Navbar";

function DashboardLayout() {
  return (
    <Box >
      <CssBaseline />
      <Navbar/>
        <Outlet />
    </Box>
  );
}

DashboardLayout.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayout;
