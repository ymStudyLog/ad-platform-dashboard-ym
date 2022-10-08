import MenuItem from "@mui/material/MenuItem";
import { getFormattedRange, getFormattedStatus } from "../utils/dropdownFormat";

export const weekDropdown = (handleClose: any) => {
  return (week: string[], index: number) => (
    <MenuItem
    sx={{ zIndex: 10, backgroundColor: "white" }}
    onClick={(e) => {
      handleClose(e);
    }}
    key={index}
    id={JSON.stringify(week)}
    >
      {getFormattedRange(week)}
    </MenuItem>
  );
};

export const statusDropdown = (handleClose: any) => {
  return (status: string[], index: number) => (
    <MenuItem
      sx={{ zIndex: 10, backgroundColor: "white" }}
      onClick={(e) => {
        handleClose(e);
      }}
      key={index}
      id={JSON.stringify(status)}
    >
      {getFormattedStatus(status)}
    </MenuItem>
  );
};
