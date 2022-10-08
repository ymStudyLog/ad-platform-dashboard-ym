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

  // localStorage.removeItem("previous-week")
  //TODO 로컬스토리지 get이 무한대로 계속 일어남 -> 로컬스토리지 값이 변하는 것을 useEffect가 감지할 수는 없음 
  //로컬스토리지 가져오는 함수를 분리해야 됨
  React.useEffect(() => {
    const storedWeek = localStorage.getItem("previous-week"); 
    if (storedWeek !== null) {
      const parsedStorage: string[] = JSON.parse(storedWeek);
      setSelectedRange(parsedStorage);
      setDateQuery(createDateQuery(parsedStorage));
    } else {
      setDateQuery(createDateQuery(selectedRange));
    }
  }, [selectedRange]);

  /** 로컬스토리지 값 사용할때에는 useCallback으로 감싸서 하는듯?
   * function useLocalStorage<T>(key: string, initialValue: T): [T, SetValue<T>] {
  // Get from local storage then
  // parse stored json or return initialValue
  const readValue = useCallback((): T => {
    // Prevent build error "window is undefined" but keep keep working
    if (typeof window === 'undefined') {
      return initialValue
    }

    try {
      const item = window.localStorage.getItem(key)
      return item ? (parseJSON(item) as T) : initialValue
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error)
      return initialValue
    }
  }, [initialValue, key])
   */
  
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
