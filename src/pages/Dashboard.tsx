import React from "react";
import { Box, Toolbar } from "@mui/material";
import Dropdown from "../components/Dropdown";
import TotalAdStatus from "../components/dashboard/totalAdStatus/TotalAdStatus";
import ChannelStatus from "../components/dashboard/channelStatus/ChannelStatus";

function createDateQuery(dateArray: string[]) {
  return `?date_gte=${dateArray[0]}&date_lte=${dateArray[1]}`;
}

const Dashboard = () => {
  const [dateQuery, setDateQuery] = React.useState<string>("");
  const [selectedRange, setSelectedRange] = React.useState<string[]>([
    "2022-02-01",
    "2022-02-07",
  ]);
  
  React.useEffect(() => {
    const storedWeek = localStorage.getItem("previous-week");
    if (storedWeek !== null) {
      const parsedStorage: string[] = JSON.parse(storedWeek);
      setSelectedRange(parsedStorage); 
    }
  }, []);

  React.useEffect(()=>{
    setDateQuery(createDateQuery(selectedRange));
  },[selectedRange]);

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        bgcolor: "#f5f5f5",
        mt: "4rem",
        width: `calc(100vw - 240px)`,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
      >
        대시보드{" "}
        <Dropdown
          selectedItem={selectedRange}
          setSelectedItem={setSelectedRange}
        />
      </Toolbar>
      <TotalAdStatus dateQuery={dateQuery} />
      <ChannelStatus dateQuery={dateQuery} />
    </Box>
  );
};

export default Dashboard;
