import React from "react";
import { Box, Toolbar, Container } from "@mui/material";
import AdList from "../components/admanagement/AdList";
import AdCreateItem from "../components/admanagement/AdCreateItem";
import { AdListDataType } from "../types";
import Dropdown from "../layouts/Dropdown";

function createStatusQuery(status: string) {
  return status === "all" ? `?status=active&status=closed` : `status=${status}`;
}

const AdManagement = () => {
  //로직 완성되면 adManagement로 옮겨가서 똑같이 만들기
  //  const [statusQuery, setStatusQuery] = React.useState<string>("");
  //const storedStatus = localStorage.getItem("previous-status");

  //TODO 아이디 만들기 useRef() let createId = adList.length + 1;
  const createId = 1000;

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
      {/*TODO height 100vh-4rem 이 적절한지 확인하기 */}
      <Box sx={{ pl: 3, pr: 3, height: "calc(100vh - 4rem)" }}>
        <Container
          sx={{
            bgcolor: "white",
            borderRadius: "20px",
          }}
        >
          <Container
            sx={{ display: "flex", justifyContent: "space-between", p: 2 }}
          >
            <Dropdown />
            <AdCreateItem
              createId={createId}
              onSubmit={function (form: AdListDataType): void {
                console.log(form);
              }}
            />
          </Container>

          <AdList />
        </Container>
      </Box>
    </Box>
  );
};

export default AdManagement;
