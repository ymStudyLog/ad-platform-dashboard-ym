import MenuItem from "@mui/material/MenuItem";
import { RangeDateType } from "../hooks/useDropdownItem";

export const weekDropdown = (handleClose: any) => {
  return (week: string, index: number) => (
    <MenuItem
      sx={{ zIndex: 10, backgroundColor: "white" }}
      onClick={(e) => {
        handleClose(e);
      }}
      key={index}
    >
      {/* {week.start[1]} ~ {week.end[1]} */}
      {week[0]} ~ {week[1]}
    </MenuItem>
  );
};

export const statusDropdown = (handleClose: any) => {
  return (status: [string, string], index: number) => (
    <MenuItem
      sx={{ zIndex: 10, backgroundColor: "white" }}
      onClick={(e) => {
        handleClose(e);
      }}
      key={index}
    >
      {status[1]}
    </MenuItem>
  );
};
