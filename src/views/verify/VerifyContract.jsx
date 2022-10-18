import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
const interact = require("../../utils/interact");



const VerifyContract = ({ contract }) => {
    const [sourceCode, setSourceCode] = useState()

    const formHandler = async (e) => {
        e.preventDefault()
        const check = await interact.checkVerify(sourceCode)
        console.log(check)

    }



  return (
    <form
        onSubmit={formHandler}
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "4px",
          marginTop: "4px",
        }}
      >
        <Grid container sx={{}}>
          <Grid item md={4}>
            <Typography
              variant="h6"
              sx={{
                color: "black",
                fontSize: "14pt",
                textAlign: "left",
              }}
            >
              <h6>Contract to verify:</h6>
            </Typography>
          </Grid>
        </Grid>
        <Grid container sx={{}}>
          <Grid item md={6}>
            <textarea
              rows={1}
              style={{
                color: "black",
                fontSize: "12pt",
                textAlign: "left",
                padding: "2px",
                width: "100%",
                border: "solid",
                borderWidth: "0.5px",
                borderColor: "#817dac",
                borderRadius: "5px",
              }}
            >
              {contract}
            </textarea>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "4px",
          marginTop: "4px",
        }}
      >
        <Grid container sx={{}}>
          <Grid item md={4}>
            <Typography
              variant="h6"
              sx={{
                color: "black",
                fontSize: "14pt",
                textAlign: "left",
              }}
            >
              <h6>Source code:</h6>
            </Typography>
          </Grid>
        </Grid>
        <Grid container sx={{}}>
          <Grid item md={12}>
            <textarea
              rows={14}
              onChange={(e) => setSourceCode(e.target.value)}
              style={{
                color: "black",
                fontSize: "12pt",
                textAlign: "left",
                padding: "5px",
                border: "solid",
                borderWidth: "0.5px",
                borderColor: "#817dac",
                width: "100%",
                borderRadius: "5px",
              }}
            ></textarea>
          </Grid>
        </Grid>
      </Box>
      <button
        type="submit"
        className=" bg-dark-purple hover:cursor-pointer transition-all hover:bg-light-purple"
        style={{
          marginLeft: "auto",
          padding: "5px 25px",
          borderRadius: "5px",
        }}
      >
        Submit and Verify
      </button>
    </form>
  );
};

export default VerifyContract;
