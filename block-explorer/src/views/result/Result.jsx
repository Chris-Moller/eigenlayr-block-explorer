import { useTheme } from "@mui/material/styles";

const { Box } = require("@mui/system");

const Result = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        paddingTop: "150px",
        [theme.breakpoints.down("xxl")]: {
          paddingTop: "150px",
        },
        [theme.breakpoints.down("xl")]: {
          paddingTop: "100px",
        },
        [theme.breakpoints.down("md")]: {
          paddingTop: "150px",
        },
        [theme.breakpoints.down("sm")]: {
          paddingTop: "150px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          maxWidth: "1300px",
          paddingBottom: "120px",
          [theme.breakpoints.down("xl")]: {
            maxWidth: "1150px",
          },
          [theme.breakpoints.down("lg")]: {
            maxWidth: "850px",
          },
          [theme.breakpoints.down("md")]: {
            maxWidth: "550px",
          },
          [theme.breakpoints.down("sm")]: {
            marginLeft: "20px",
            marginRight: "20px",
          },
        }}
      >

        
      </Box>
    </Box>
  );
};

export default Result;
