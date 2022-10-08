import { format } from "date-fns";

export function getFormattedRange(rangeArray: string[]) {
  const startDate = format(new Date(rangeArray[0]), "M월 d일");
  const endDate = format(new Date(rangeArray[1]), "M월 d일");
  return `${startDate}~${endDate}`;
}

export function getFormattedStatus(statusArray: string[]) {
  const status: string = statusArray[0];
  switch (status) {
    case "all":
      return "전체 광고";
    case "active":
      return "진행 중";
    case "closed":
      return "진행 종료";
    default:
      return "전체 광고";
  }
}
