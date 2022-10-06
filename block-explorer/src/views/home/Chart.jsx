import { Grid } from "@mui/material";
import ChartBar from "./ChartBar";

const Chart = ({ latestDash }) => {
  const txVals = latestDash.map((count) => count.transactions.length);
  const totalMax = Math.max(...txVals);
  return (
    <Grid
      container
      spacing={5}
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      {latestDash.map((count) => (
        <Grid key={count.number} item xs={1.2}>
          <ChartBar
            style={{
              marginTop: "auto",
            }}
            blockNum={count.number}
            value={count.transactions.length}
            max={totalMax}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Chart;
