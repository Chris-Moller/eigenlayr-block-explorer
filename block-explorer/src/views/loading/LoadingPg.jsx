import { Box } from "@mui/system";
import "./loading.css"

const LoadingPg = () => {
  return (
    <Box sx={{
        minHeight: "100vh",

    }}>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      ;
    </Box>
  );
};

export default LoadingPg;
