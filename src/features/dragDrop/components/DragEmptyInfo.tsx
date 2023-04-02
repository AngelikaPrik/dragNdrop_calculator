import { Stack, Typography } from "@mui/material";
import add from "../../../assets/add.svg";

export const DragEmptyInfo = () => {
  return (
    <Stack
      sx={{
        width: "24rem",
        height: "44.8rem",
        position: "absolute",
        top: "85%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <Stack alignItems="center" spacing="1.2rem">
        <img width={20} src={add} alt="add component" />
        <Stack alignItems="center">
          <Typography fontSize="1.4rem" color="primary">
            Перетащите сюда
          </Typography>
          <Typography textAlign="center" fontSize="1.2rem" color="#6B7280">
            любой элемент
            <br />
            из левой панели
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
