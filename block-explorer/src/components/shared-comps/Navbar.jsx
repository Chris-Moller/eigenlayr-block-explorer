import { Link as RouterLink, useNavigate } from "react-router-dom";

import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputBase from '@mui/material/InputBase';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { BsSearch } from "react-icons/bs";

// const Link = styled(RouterLink)(() => ({
//   textDecoration: "none",
//   fontSize: "16px",
//   fontWeight: 400,
//   color: "white",
//   position: "relative",
//   "&:after": {
//     content: "''",
//     display: "block",
//     position: "absolute",
//     bottom: -12,
//     left: 0,
//     width: 0,
//     height: 3,
//     borderRadius: "10px",
//     background:
//       "linear-gradient(90deg, hsla(266, 100%, 67%, 1) 0%, hsla(227, 100%, 66%, 1) 100%)",
//     transition: "all .2s ease-out",
//   },
//   "&:hover": {
//     fontWeight: 500,
//     color: "#ECFCFF",
//     "&:after": {
//       width: 25,
//     },
//   },
// }));

const Navbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();



  return (
    <Box
      className="bg-black text-2xl backdrop-blur-sm"
      sx={{
        position: "fixed",
        display: "flex",
        flexDirection: "row",
        justifyItems: "center",
        top: 0,
        right: 0,
        left: 0,
        zIndex: 99,
        height: "70px",
        [theme.breakpoints.down("sm")]: {
          paddingLeft: "10px",
          paddingRight: "10px",
        },
      }}>
        <Box sx={{
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%",
            maxWidth: "1300px",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
        }}>
            <Box
              
              sx={{
                width: 200,
                display: "flex",
                flexDirection: "row",
                "& img": {
                  margin: "auto",
                  marginRight: "0px",
                  width: "40px",
                },
              }}
              onClick={() => {
                navigate("/");
              }}
            >
              <img
                onClick={() => {
                  navigate("/");
                }}
                style={{
                  cursor: "pointer",
                  
                }}
                src="/images/EigenPlaceHolder.png"
                alt=""
              />
              <h1
                style={{
                  cursor: "pointer",
                  color: "white",
                  marginLeft: "0px",
                  margin: "auto",
                  fontWeight: "100",
                  fontSize: "20pt"
                }}
              >
                Eigen Explorer
              </h1>
            </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          marginTop: "15px",
          marginBottom: "15px",
          marginLeft: "auto",
          marginRight: "50px",
          [theme.breakpoints.down("sm")]: {
            minWidth: "100%",
          },

        }}
      >
        <BsSearch
        className=" bg-dark-purple hover:cursor-pointer transition-all hover:bg-light-purple"
          style={{
            color: "white",
            height: "auto",
            width: "auto",
            padding: "10px",
            paddingLeft: "20px",
            paddingRight: "20px",
            borderTopLeftRadius: "5px",
            borderBottomLeftRadius: "5px",

          }}
        />
        <InputBase
        fullWidth
          sx={{
            borderTopRightRadius: "5px",
            borderBottomRightRadius: "5px",
            fontSize: "14pt",
            outline: "none",
            padding: "3px",
            paddingLeft: "6px",
            backgroundColor: "white",
            minWidth: "400px",
            [theme.breakpoints.down("sm")]: {
                minWidth: "200px",
              },
          }}
          type="text"
          placeholder="Search by Address / Block / Txn Hash"
        />
      </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
