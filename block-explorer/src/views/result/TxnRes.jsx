import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ethers } from "ethers";
import { useNavigate } from "react-router-dom";
import { timeSet } from "../../utils/utils";


const TxnRes = ({ searchRes, cTimeStamp }) => {
    const navigate = useNavigate();

    const toAccHandler = () => {
        navigate({
          pathname: `/search`,
          search: `?v=${searchRes[0].to}`,
        });
      };

      const fromAccHandler = () => {
        navigate({
          pathname: `/search`,
          search: `?v=${searchRes[0].from}`,
        });
      };
    
      const toBkHandler = () => {
        navigate({
          pathname: `/search`,
          search: `?v=${Number(
            ethers.BigNumber.from(searchRes[0].blockNumber).toString()
          )}`,
        });
      };
    return (
        <Box>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                      marginBottom: "20px",
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
                      <h1>Transaction:</h1>
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
                      <p>{searchRes[0].hash}</p>
                    </Typography>
                  </Box>
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
                        <h6>Hash:</h6>
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
                        <h6>{searchRes[0].hash}</h6>
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
                        <h6>From:</h6>
                      </Typography>
                      <Typography
                        onClick={fromAccHandler}
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
                        <h6 className="text-dark-purple  hover:text-purple-grad hover:cursor-pointer transition-all">
                          {searchRes[0].from}
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
                        <h6>To:</h6>
                      </Typography>
                      <Typography
                        variant="h6"
                        onClick={toAccHandler}
                        sx={{
                          color: "black",
                          fontSize: "12pt",
                          textAlign: "left",
                          marginTop: "auto",
                          marginBottom: "auto",
                          marginLeft: "35px",
                        }}
                      >
                        <h6 className="text-dark-purple  hover:text-purple-grad hover:cursor-pointer transition-all">
                          {searchRes[0].to}
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
                        <h6>Block number:</h6>
                      </Typography>
                      <Typography
                        onClick={toBkHandler}
                        variant="h6"
                        sx={{
                          fontSize: "12pt",
                          textAlign: "left",
                          marginTop: "auto",
                          marginBottom: "auto",
                          marginLeft: "35px",
                        }}
                      >
                        <h6 className="text-dark-purple  hover:text-purple-grad hover:cursor-pointer transition-all">
                          {ethers.BigNumber.from(
                            searchRes[0].blockNumber
                          ).toString()}
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
                        <h6>Transaction Fee:</h6>
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
                          {Number(
                            ethers.BigNumber.from(searchRes[0].gas).toString()
                          ) *
                            Number(
                              ethers.BigNumber.from(
                                searchRes[0].gasPrice
                              ).toString()
                            )}
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
                        <h6>Gas price:</h6>
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
                          {ethers.BigNumber.from(
                            searchRes[0].gasPrice
                          ).toString()}
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
                        <h6>Gas:</h6>
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
                          {ethers.BigNumber.from(searchRes[0].gas).toString()}
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
                        <h6>Value:</h6>
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
                          {ethers.BigNumber.from(searchRes[0].value).toString()}
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
                        <h6>Type:</h6>
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
                          {ethers.BigNumber.from(searchRes[0].type).toString()}
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
                        <h6>Nonce:</h6>
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
                          {ethers.BigNumber.from(searchRes[0].nonce).toString()}
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
                        <h6>Input:</h6>
                      </Typography>
                      <textarea
                        style={{
                          color: "black",
                          fontSize: "12pt",
                          textAlign: "left",
                          marginTop: "auto",
                          marginBottom: "auto",
                          marginLeft: "35px",
                          width: "100%",
                        }}
                      >
                        {searchRes[0].input}
                      </textarea>
                    </Box>
                  </Box>
                </Box>
              </Box>

    );
};

export default TxnRes;