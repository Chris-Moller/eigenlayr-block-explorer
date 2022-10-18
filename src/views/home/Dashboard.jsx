import { Box, Typography } from "@mui/material";
import Chart from "./Chart";

const Dashboard = ({ latestDash }) => {
  return (
    <Box sx={{
        borderRadius: "10px",
        border: "solid",
        borderWidth: "0.5px",
        borderColor: "#817dac",
        paddingLeft: "40px",
        paddingRight: "40px",
        paddingTop: "10px",
        marginBottom: "15px",
        backgroundColor: "#d4dfef",
    }}>
    <Typography
    variant="h5"
    sx={{
        textAlign: "left",
        color: "black"
        
    }}
  >
    <span>Transaction count</span>
  </Typography>
    <Box
      sx={{
        paddingTop: "20px",
        
      }}
    >

      <Chart latestDash={latestDash} />
    </Box>
    </Box>
  );
};

export default Dashboard;
