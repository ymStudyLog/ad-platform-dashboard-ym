import React from "react";
import { Button, Box, Grow, Paper, Popper, MenuList } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { weekDropdown, statusDropdown } from "./DropdownItem";
import useDropdownItem from "../hooks/useDropdownItem";
import { RangeDateType } from "../hooks/useDropdownItem";

const DROPDOWN_HEIGHT = "12rem";

// type AdStatusType = {
//   all: string;
//   active: string;
//   closed: string;
// };

//TODO 이 컴포넌트에서는 이제 전역 상태를 가져와서 일주일씩 나눠서 string[]이 되는 데이터를 만들어서 쭉 dropdown으로 보여주면됨
//선택된 데이터는 localStorage에 저장하기 key 값은 "previous-week" JSON.stringify()
const Dropdown = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const isAdListPage = window.location.href.includes("/ad");

  // const { getRangeData, getProgressState } = useDropdownItem();
  // const rangeValue :RangeDateType[] = getRangeData();
  // const progressItem = getProgressState();

  const { dateRange, progressItem } = useDropdownItem();
  // console.log(dateRange);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: any) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const getQuery = (e:any) => {
    //onClick 이벤트 핸들러 쿼리날리기
    //range = const url = "?date_gte=2022-02-01&date_lte=2022-02-07"; //onClick -> query = "?date_gte=${week.start[0]}&date_lte=${week.end[0]}"
    //status = const url = "?status=active&status=closed"; //onClick -> query = status[0] === "all" ? "?status=active&status=closed" : "?status=${status[0]}"
    // console.log(e.target.key);
  }

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current?.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Box
      style={{
        border: "1px solid #eeeeee",
        backgroundColor: "white",
        width: DROPDOWN_HEIGHT,
      }}
    >
      <Button
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        sx={{ width: "100%" }}
      >
        {/* {isAdListPage ? `전체 광고` : `${rangeValue[0].start[1]}~${rangeValue[0].end[1]}`} */}
        {isAdListPage ? `전체 광고` : `${dateRange[0]}~${dateRange[1]}`}
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
        sx={{ width: DROPDOWN_HEIGHT, overflowY: "auto" }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                  sx={{ height: "120px" }}
                >
                  {isAdListPage
                    ? Object.entries(progressItem).map(
                        statusDropdown(handleClose)
                      )
                    // : rangeValue.map(weekDropdown(handleClose, getQuery))}
                    : dateRange.map(weekDropdown(handleClose))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
};

export default Dropdown;
