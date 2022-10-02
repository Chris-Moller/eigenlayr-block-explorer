import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ethers } from "ethers";

const AccRes = ({ searchRes }) => {
    return (
        <Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginBottom: "20px",
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: "black",
                      textAlign: "left",
                      marginTop: "auto",
                      marginBottom: "auto",
                    }}
                  >
                    {searchRes[1] === "0x" ? (
                      <h1>Account:</h1>
                    ) : (
                      <h1>Contract:</h1>
                    )}
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{
                      marginTop: "auto",
                      marginBottom: "auto",
                      marginLeft: "7px",
                      float: "left",
                      color: "black",
                      textAlign: "left",
                    }}
                  >
                    <p>{searchRes[0]}</p>
                  </Typography>
                  {searchRes[1] !== "0x" ? (
                    <button
                      className=" bg-dark-purple hover:cursor-pointer transition-all hover:bg-light-purple"
                      style={{
                        marginLeft: "auto",
                        padding: "5px 25px",
                        borderRadius: "5px",
                      }}
                    >
                      Verify
                    </button>
                  ) : null}
                </Box>
                {searchRes[1] === "0x" ? (
                  <Box
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "5px",
                      padding: "4px",
                      boxShadow: "2px 2px 10px 1px #b1b1b2",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        border: "solid",
                        borderWidth: "0.5px",
                        borderColor: "#817dac",
                        borderRadius: "5px",
                        padding: "4px",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "black",
                          fontSize: "16pt",
                          textAlign: "left",
                        }}
                      >
                        <h6>Account Address:</h6>
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "black",
                          fontSize: "12pt",
                          textAlign: "left",
                          marginTop: "auto",
                          marginBottom: "auto",
                          marginLeft: "35px",
                        }}
                      >
                        <h6>{searchRes[0]}</h6>
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        border: "solid",
                        borderWidth: "0.5px",
                        borderColor: "#817dac",
                        borderRadius: "5px",
                        padding: "4px",
                        marginTop: "4px",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "black",
                          fontSize: "16pt",
                          textAlign: "left",
                        }}
                      >
                        <h6>Balance:</h6>
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "black",
                          fontSize: "12pt",
                          textAlign: "left",
                          marginTop: "auto",
                          marginBottom: "auto",
                          marginLeft: "35px",
                        }}
                      >
                        <h6>
                          {ethers.BigNumber.from(searchRes[2]).toString()}
                        </h6>
                      </Typography>
                    </Box>
                  </Box>
                ) : (
                  <Box
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "5px",
                      padding: "4px",
                      boxShadow: "2px 2px 10px 1px #b1b1b2",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        border: "solid",
                        borderWidth: "0.5px",
                        borderColor: "#817dac",
                        borderRadius: "5px",
                        padding: "4px",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "black",
                          fontSize: "16pt",
                          textAlign: "left",
                        }}
                      >
                        <h6>Contract Address:</h6>
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "black",
                          fontSize: "12pt",
                          textAlign: "left",
                          marginTop: "auto",
                          marginBottom: "auto",
                          marginLeft: "35px",
                        }}
                      >
                        <h6>{searchRes[0]}</h6>
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        border: "solid",
                        borderWidth: "0.5px",
                        borderColor: "#817dac",
                        borderRadius: "5px",
                        padding: "4px",
                        marginTop: "4px",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "black",
                          fontSize: "16pt",
                          textAlign: "left",
                        }}
                      >
                        <h6>Balance:</h6>
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "black",
                          fontSize: "12pt",
                          textAlign: "left",
                          marginTop: "auto",
                          marginBottom: "auto",
                          marginLeft: "35px",
                        }}
                      >
                        <h6>
                          {ethers.BigNumber.from(searchRes[2]).toString()}
                        </h6>
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        border: "solid",
                        borderWidth: "0.5px",
                        borderColor: "#817dac",
                        borderRadius: "5px",
                        padding: "4px",
                        marginTop: "4px",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "black",
                          fontSize: "16pt",
                          textAlign: "left",
                        }}
                      >
                        <h6>Bytecode:</h6>
                      </Typography>
                      <textarea
                        readOnly={true}
                        style={{
                          color: "black",
                          fontSize: "12pt",
                          marginTop: "auto",
                          marginBottom: "auto",
                          marginLeft: "35px",
                          width: "100%",
                        }}
                      >
                        {searchRes[1]}
                      </textarea>
                    </Box>
                  </Box>
                )}
              </Box>

    );
};

export default AccRes;