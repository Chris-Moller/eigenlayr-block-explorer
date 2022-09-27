import { Link as RouterLink } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TwitterIcon from "@mui/icons-material/Twitter";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Link = styled(RouterLink)(() => ({
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: 600,
  color: "#D8F8FF",
  position: "relative",
  display: "flex",
  alignItems: "center",
  minHeight: "29px",
  "&:hover": {
    fontWeight: 700,
    color: "#ECFCFF",
  },
}));

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "black",
        padding: "52px 20px 85px",
        [theme.breakpoints.down("md")]: { paddingBottom: 0 },
      }}
    >
      <Box>
        <Grid
          container
          sx={{
            maxWidth: "1200px",
            justifyContent: "space-between",
            [theme.breakpoints.down("sm")]: { display: "block" },
          }}
        >
          <Grid item>
            <Typography
              sx={{
                fontSize: "10px",
                lineHeight: 1.25,
                marginTop: "18px",
                "& span": {
                  fontWeight: 700,
                  background:
                    "linear-gradient(90deg, hsla(266, 100%, 67%, 1) 0%, hsla(227, 100%, 66%, 1) 100%)",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                },
              }}
            >
              Leveraging <span>trust.</span> <br />
              Hyperscaling <span>blockchains.</span> <br />
              Unleashing <span>open innovation.</span>
            </Typography>

            <Typography
              sx={{
                fontSize: "10px",
                fontWeight: 600,
                marginTop: "50px",
                [theme.breakpoints.down("md")]: { display: "none" },
              }}
            >
              Made with love by LayrLabs
            </Typography>
            <Typography
              sx={{
                fontSize: "10px",
                fontWeight: 600,
                marginTop: "5px",
                [theme.breakpoints.down("md")]: { display: "none" },
              }}
            >
              © 2022 EigenLayer, all rights reserved
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              [theme.breakpoints.down("sm")]: { marginTop: "30px" },
            }}
          >
            <Grid container>
              <Grid item>
                <Box>
                  <Typography>EigenLayer:</Typography>
                  <Box
                    sx={{
                      width: 25,
                      height: 3,
                      borderRadius: "10px",
                      backgroundColor: "#630feb",
                      margin: "14px 0 16px",
                    }}
                  />
                </Box>
                {/* <Box>
                  <Link to="/products">Products</Link>
                </Box> */}
                {/* <Box>
                  <Link to="/community">Community</Link>
                </Box> */}
                {/* <Box>
                  <Link to="/resources">Resources</Link>
                </Box>
                <Box>
                  <Link to="/careers">Careers</Link>
                </Box>
                <Box>
                  <Link to="/research">Research</Link>
                </Box> */}
              </Grid>
              {/* <Grid
                item
                sx={{
                  marginLeft: "220px",
                  [theme.breakpoints.down("xl")]: { marginLeft: "140px" },
                  [theme.breakpoints.down("lg")]: { marginLeft: "80px" },
                  [theme.breakpoints.down("md")]: { marginLeft: "24px" },
                  [theme.breakpoints.down("sm")]: { marginLeft: "40px" },
                }}
              >
                <Box>
                  <Typography>Legal</Typography>
                </Box>
                <Box
                  sx={{
                    width: 25,
                    height: 3,
                    borderRadius: "10px",
                    backgroundColor: "#1BA8C7",
                    margin: "14px 0 16px",
                  }}
                />
                <Box>
                  <Link to="/privacy">
                    <LockIcon sx={{ width: 18, marginRight: "12px" }} />
                    Privacy Policy
                  </Link>
                </Box>
                <Box>
                  <Link to="/terms">
                    <MenuIcon sx={{ width: 18, marginRight: "12px" }} />
                    Terms & Conditions
                  </Link>
                </Box>
              </Grid> */}
            </Grid>
          </Grid>
          <Grid
            item
            sx={{ [theme.breakpoints.down("sm")]: { marginTop: "30px" } }}
          >
            <Grid container>
              <Grid item>
                <IconButton
                  sx={{
                    width: 30,
                    hegiht: 30,
                    minWidth: 30,
                    minHeight: 30,
                    padding: 0,
                  }}
                >
                  <TwitterIcon
                    sx={{ width: 19 }}
                    onClick={(event) =>
                      window.open("https://twitter.com/eigenlayer")
                    }
                  />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  sx={{
                    width: 30,
                    hegiht: 30,
                    minWidth: 30,
                    minHeight: 30,
                    padding: 0,
                  }}
                >
                  <LinkedInIcon
                    sx={{ width: 19 }}
                    onClick={(event) =>
                      window.open("https://www.linkedin.com/company/layrlabs/")
                    }
                  />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "10px",
          fontWeight: 600,
          paddingTop: "50px",
          [theme.breakpoints.up("md")]: { display: "none" },
        }}
      >
        Made with love by LayrLabs
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "10px",
          fontWeight: 600,
          paddingTop: "5px",
          paddingBottom: "50px",
          [theme.breakpoints.up("md")]: { display: "none" },
        }}
      >
        © 2022 Eigenlayer, all rights reserved
      </Typography>
    </Box>
  );
}
