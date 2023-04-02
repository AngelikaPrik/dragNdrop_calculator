import { ButtonBase, ButtonBaseProps, InputBase, InputBaseProps } from "@mui/material";
import { Theme, styled } from "@mui/material/styles";

export const OperationBtn = styled(ButtonBase)(
  ({ theme }: { theme: Theme }) => ({
    backgroundColor: theme.palette.primary.light,
    width: "100%",
    padding: ".4rem",
    outline: "1px solid #E2E3E5",
    borderRadius: theme.shape.borderRadius,
    height: "4.8rem",
    fontWeight: theme.typography.fontWeightRegular,
    transition: ".1s all linear",
    ":hover": {
      outline: `2px solid ${theme.palette.primary.main}`,
    },
    ":active": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.light,
    },
  })
) as React.FC<ButtonBaseProps>;

export const ResultInput = styled(InputBase)(({ theme }: { theme: Theme }) => ({
  backgroundColor: "#F3F4F6",
  color: theme.palette.primary.dark,
  width: "100%",
  fontWeight: theme.typography.fontWeightBold,
  borderRadius: theme.shape.borderRadius,
  height: "5.2rem",
  padding: ".4rem .8rem",
  input: {
    textAlign: "right",
    "::placeholder": {
      opacity: 1,
    },
    "&:disabled": {
      WebkitTextFillColor: "#000",
    },
  },
})) as React.FC<InputBaseProps>;

export const ComputeButton = styled(ButtonBase)(
  ({ theme }: { theme: Theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.light,
    width: "100%",
    fontSize: "1.4rem",
    borderRadius: theme.shape.borderRadius,
    height: "6.4rem",
    ":hover": {
      opacity: ".9",
    },
  })
) as React.FC<ButtonBaseProps>;
