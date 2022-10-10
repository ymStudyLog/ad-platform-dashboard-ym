import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Box,
  CssBaseline,
  List,
  ListItem,
  Button,
  Container,
} from "@mui/material";
import Sidebar from "./Sidebar";
import Header from "./Header";

const DefaultLayout = () => {
  const isMobile: boolean = useMediaQuery("(max-width:480px)");
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    React.useState<boolean>(false);
  const navigate = useNavigate();

  const handleButtonClick = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <Box sx={{ display: "flex", maxWidth: "100%" }}>
      <CssBaseline />
      {isMobile ? null : <Sidebar />}
      <Header
        isMobile={isMobile}
        isMobileMenuOpen={isMobileMenuOpen}
        handleButtonClick={handleButtonClick}
      />
      {isMobile && isMobileMenuOpen ? (
        <Container
          sx={{
            position: "absolute",
            top: `4rem`,
            left: 0,
            width: "100%",
            height: "auto",
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            zIndex: 10,
          }}
        >
          <List sx={{ width: "100%" }}>
            <ListItem sx={{ display: "flex", flexDirection: "column" }}>
              <Button
                sx={{
                  border: "1px solid black",
                  height: "3rem",
                  width: "100%",
                }}
                onClick={() => {
                  handleButtonClick();
                  navigate("/");
                }}
              >
                대시보드
              </Button>
              <Button
                sx={{
                  border: "1px solid black",
                  height: "3rem",
                  width: "100%",
                  mt: "1rem",
                }}
                onClick={() => {
                  handleButtonClick();
                  navigate("/ad");
                }}
              >
                광고관리
              </Button>
            </ListItem>
          </List>
        </Container>
      ) : null}

      <Outlet />
    </Box>
  );
};

export default DefaultLayout;
