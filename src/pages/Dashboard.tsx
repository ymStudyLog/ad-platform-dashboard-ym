import React from "react";
import { Box, Toolbar } from "@mui/material";
import Dropdown from "../layouts/Dropdown";
import TotalAdStatus from "../components/dashboard/totalAdStatus/TotalAdStatus";
import ChannelStatus from "../components/dashboard/channelStatus/ChannelStatus";

function createDateQuery(dateArray : string[]) {
  return `?date_gte=${dateArray[0]}&date_lte=${dateArray[1]}`;
}

const Dashboard = () => {
  const [dateQuery, setDateQuery] = React.useState<string>("");

  React.useEffect(()=>{
    const storedWeek = localStorage.getItem("previous-week");
    
    if(storedWeek !== null) { 
      const parsedStorage : string[] = JSON.parse(storedWeek);
      //스토리지가 있으면 스토리지에 저장된 값을 사용하고
      setDateQuery(createDateQuery(parsedStorage));
    } else {
      //스토리지가 비어있으면 디폴트값을 사용함
      setDateQuery(createDateQuery(["2022-02-01","2022-02-07"]));
    }
  },[])

  //Dropdown에서 선택된 값으로 쿼리를 만드는 단계는 여기에서 이루어져야함! (로컬스토리지도 체크해야되기 때문에)
  //쿼리를 만들어서 totalAdStatus와 ChannelStatus에 props로 뿌리면 각각 컴포넌트에서 데이터를 가져올 수 있게 api로 부르는 단계가 이루어지면됨. 
  //dropdown 컴포넌트에서는 우선 첫번째~마지막 전역 데이터로 일주일씩 기간을 만들어서 렌더링하고 클릭시 localStorage와 전역상태를 저장하게끔 바꾸면 됨.

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
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", fontSize:"1.5rem", fontWeight:"bold" }}>
        대시보드 <Dropdown /> 
      </Toolbar>
      <TotalAdStatus dateQuery={dateQuery}/>
      <ChannelStatus dateQuery={dateQuery}/>
    </Box>
  );
};

export default Dashboard;
