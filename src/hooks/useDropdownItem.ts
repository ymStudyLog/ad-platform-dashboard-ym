import React from "react";
import { TotalAdDataType, AdListDataType } from "../types";
import { addDays, format } from "date-fns";

export type DefaultDateType = { [key: string]: string };
export type RangeDateType = { [key: string]: [string, string] };

//"2022-01-01"을 "1월 1일"로 만들어줌 
function getFormattedDate(dateString : string) : string{
  const originDate = new Date(dateString);
  return format(originDate, "M월 d일");
}

//TODO : 여기에서 선택된 데이터를 전역 상태 관리..?
const useDropdownItem = () => {
  // const selectedWeek = { //이 값이 전역 데이터에 저장되어서 query를 만들 데이터 
  //   startDate: "",
  //   endDate: "",
  // };

  //데이터베이스의 가장 작은 날짜, 가장 큰 날짜를 가져와야함
  //total-report, channel-report의 date 속성에 날짜가 저장되어있음.
  const [dateRange, setDateRange] = React.useState<string[]>([]);
  React.useEffect(()=>{
    const formattedRange = ["2022-02-01", "2022-02-07"].map((date)=>{
      return getFormattedDate(date);
    }) 
    setDateRange(formattedRange);
  },[]);
  // const getRangeData = () => {
    // const weeklyRange = [{date:"2022-02-01"}, {date:"2022-04-20"}]; 
/*
    selectedWeek.startDate = weeklyRange[0];
    selectedWeek.endDate = weeklyRange[weeklyRange.length - 1];
    const lastDate: Date = new Date(selectedWeek.endDate);
    let startDate: Date = new Date(selectedWeek.startDate);

    const rangeData: RangeDateType[] = [];
    while (startDate <= lastDate) {
      const range: RangeDateType = {
        start: ["", ""],
        end: ["", ""],
      };
      const endDate: Date = new Date(addDays(startDate, 6));
      range.start[0] = startDate.toString();
      range.start[1] = format(startDate, "M월 d일");
      range.end[0] = endDate.toString();
      range.end[1] = format(endDate, "M월 d일");
      rangeData.push(range);

      startDate = addDays(startDate, 7);
    }

    return rangeData;
    
  };
*/

    // const startDate: string = "2022-02-01"
    // const endDate: string = format(
    //   new Date(addDays(new Date(startDate), 6)),
    //   "yyyy-MM-dd"
    // );
    // return [startDate, endDate];

    //TODO 이 데이터 타입이 맞나...? 객체 말고 string으로 이루어져야할거 같은데
  const progressItem = () => ({
    all: "전체 광고",
    active: "진행 중",
    closed: "진행 종료",
  });

  return { dateRange, progressItem };
};

export default useDropdownItem;
