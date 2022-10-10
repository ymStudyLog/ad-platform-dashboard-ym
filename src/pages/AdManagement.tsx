import React from "react";
import { Box, Toolbar, Container } from "@mui/material";
import AdList from "../components/admanagement/AdList";
import AdCreateItem from "../components/admanagement/AdCreateItem";
import { AdListDataType } from "../types";
import Dropdown from "../components/Dropdown";

function createStatusQuery(status: string) {
  return status === "all" ? `?status=active&status=closed` : `?status=${status}`;
}

const AdManagement = () => {
  const [statusQuery, setStatusQuery] = React.useState<string>("");
  const [selectedStatus, setSelectedStatus] = React.useState<string[]>(["all"]);
  const nextId = React.useRef(6);

  React.useEffect(() => {
    const storedStatus = localStorage.getItem("previous-status");
    if (storedStatus !== null) {
      const parsedStorage: string[] = JSON.parse(storedStatus);
      setSelectedStatus(parsedStorage);
    }
  }, []); 

  React.useEffect(()=>{
    setStatusQuery(createStatusQuery(selectedStatus[0]));
  },[selectedStatus])

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        bgcolor: "#f5f5f5",
        mt: "4rem",
        width: "calc(100vw - 240px)",
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
        광고관리
      </Toolbar>
      <Box sx={{ pl: 3, pr: 3, height: "100vh" }}>
        <Container
          sx={{
            bgcolor: "white",
            borderRadius: "20px",
          }}
        >
          <Container
            sx={{ display: "flex", justifyContent: "space-between", p: 2 }}
          >
            <Dropdown
              selectedItem={selectedStatus}
              setSelectedItem={setSelectedStatus}
            />
            <AdCreateItem
              nextId={nextId.current}
              onSubmit={function (form: AdListDataType): void {
                nextId.current += 1;
                console.log(form);
              }}
            />
          </Container>

          <AdList statusQuery={statusQuery}/>
        </Container>
      </Box>
    </Box>
  );
};

export default AdManagement;
