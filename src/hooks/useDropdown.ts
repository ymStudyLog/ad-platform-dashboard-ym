import { useRecoilValue } from "recoil";
import { addDays, format } from "date-fns";
import { earliestDate, latestDate } from "../store/atom";

const useDropdown = () => {
  const firstDate: string = useRecoilValue(earliestDate);
  const lastDate: string = useRecoilValue(latestDate);

  const dateRangeItem: string[][] = [];
  let startDate: string = firstDate;
  while (startDate <= lastDate) {
    let endDate: string = format(addDays(new Date(startDate), 6), "yyyy-MM-dd");
    dateRangeItem.push([startDate, endDate]);
    startDate = format(addDays(new Date(startDate), 7), "yyyy-MM-dd");
  }

  const progressItem = [["all"], ["active"], ["closed"]];
  return { dateRangeItem, progressItem };
};

export default useDropdown;
