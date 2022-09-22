import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
const interact = require("../../utils/interact")


const LatestBlocks = () => {

    useEffect(() => {
        interact.getHomePGBlocks()
    }, [])

    return (
        <Typography variant="h5" sx={{
            color: "white"
        }}>
            <h1>Latest Blocks</h1>
        </Typography>
    );
};

export default LatestBlocks;