import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import {
  calculateSum,
  calculateSumCallback,
} from "../../../hooks/useFormatModel";
import { getData } from "../../../api/api";
import LegendItem, { Item } from "./LegendItem";
import { TotalAdDataType } from "../../../types";

type Props = {
  dateQuery: string
}

const TotalAdStatus = (props : Props) => {
  const { dateQuery } = props;
  const [weeklyData, setWeeklyData] = React.useState<string[]>([]);
  const [totalAdStatus, setTotalAdStatus] = React.useState<TotalAdDataType[]>(
    []
  );

  React.useEffect(() => {
    getData<TotalAdDataType[]>("totalAdStatus", dateQuery)
      .then((data) => setTotalAdStatus(data))
      .catch(() => console.log("data dispatch error"));
  }, [dateQuery]);

  React.useEffect(
    () => setWeeklyData(calculateSum(totalAdStatus, calculateSumCallback)),
    [totalAdStatus]
  );

  //TODO 차트 컴포넌트 따로 만들기
  return (
    <Box sx={{ p: 3 }}>
      <Typography sx={{ mb: 3, fontWeight: "bold" }}>통합 광고 현황</Typography>
      <Container
        sx={{
          bgcolor: "white",
          borderRadius: "20px",
        }}
      >
        <Container sx={{ display: "flex", justifyContent: "center", p: 4 }}>
          <Grid
            container
            spacing={2}
            sx={{
              width: "100%",
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            {weeklyData?.map((data: string, index: number) => {
              return (
                <Grid key={index} item xs={12} md={4}>
                  <Item>{data}</Item>
                </Grid>
              );
            })}
          </Grid>
        </Container>
        <LegendItem />
        <ResponsiveContainer width="100%" aspect={2}>
          <LineChart
            data={totalAdStatus}
            margin={{ top: 40, right: 20, bottom: 40, left: 10 }}
          >
            <CartesianGrid stroke="#ccc" horizontal={true} vertical={false} />
            <XAxis
              dataKey={"date"}
              axisLine={false}
              tickLine={false}
              tickMargin={20}
              padding={{ left: 120, right: 100 }}
            />
            <YAxis axisLine={false} tickLine={false} tickMargin={10} />
            <Line type="monotone" dataKey="roas" stroke="blue" />
            <Line type="monotone" dataKey="click" stroke="green" />
          </LineChart>
        </ResponsiveContainer>
      </Container>
    </Box>
  );
};

export default TotalAdStatus;
