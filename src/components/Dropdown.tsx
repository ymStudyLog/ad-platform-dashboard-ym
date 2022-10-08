import React from "react";
import { Button, Box, Grow, Paper, Popper, MenuList } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { weekDropdown, statusDropdown } from "./DropdownItem";
import useDropdown from "../hooks/useDropdown";
import { getFormattedRange, getFormattedStatus } from "../utils/dropdownFormat";

const DROPDOWN_HEIGHT = "12rem";
type Props = {
  selectedItem: string[];
  setSelectedItem: React.Dispatch<React.SetStateAction<string[]>>;
};

const Dropdown = (props: Props) => {
  const { selectedItem, setSelectedItem } = props;
  const [open, setOpen] = React.useState<boolean>(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const isAdListPage = window.location.href.includes("/ad");
  const { dateRangeItem, progressItem } = useDropdown();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: any) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setSelectedItem(JSON.parse(event.target.id));
    if (JSON.parse(event.target.id).length > 1) {
      localStorage.setItem(
        "previous-week",
        JSON.stringify(JSON.parse(event.target.id))
      );
    } else {
      localStorage.setItem(
        "previous-status",
        JSON.stringify(JSON.parse(event.target.id))
      );
    }
    setOpen(false);
  };

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
        {isAdListPage
          ? getFormattedStatus(selectedItem)
          : getFormattedRange(selectedItem)}
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
                    ? progressItem.map(statusDropdown(handleClose))
                    : dateRangeItem.map(weekDropdown(handleClose))}
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
