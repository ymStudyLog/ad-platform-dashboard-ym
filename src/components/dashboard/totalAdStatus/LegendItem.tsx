import Brightness1Icon from "@mui/icons-material/Brightness1";
import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import Container from "@mui/material/Container";

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const LegendItem = () => {
  return (
    <Container sx={{ display: "flex", alignItems: "center", height: "4rem" }}>
      <Item sx={{ width: "8rem", display: "flex", alignItems: "center" }}>
        <Brightness1Icon sx={{ color: "blue", mr: "2rem", fontSize: 10 }} />
        roas
      </Item>
      <Item
        sx={{
          width: "8rem",
          ml: "1rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Brightness1Icon sx={{ color: "green", mr: "2rem", fontSize: 10 }} />
        click
      </Item>
    </Container>
  );
};

export default LegendItem;

