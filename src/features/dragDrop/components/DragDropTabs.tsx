import { Box, Typography } from "@mui/material";
import eye from "../../../assets/eye.svg";
import selector from "../../../assets/selector.svg";
import eyeFill from "../../../assets/eye-fill.svg";
import selectorFill from "../../../assets/selector-fill.svg";
import { ModeType } from "../types";

const tabs: ITabs[] = [
  { title: "Runtime", icon: eye, activeIcon: eyeFill },
  { title: "Constructor", icon: selector, activeIcon: selectorFill },
];

export const DragDropTabs = ({ mode, setMode }: ITabsField) => {
  const activeStyleTab = (tab: ITabs) => {
    if (mode === tab.title) {
      return {
        background: "#fff",
        outline: "1px solid #E2E3E5",
      };
    }
    return {
      cursor: "pointer",
    };
  };

  return (
    <Box
      bgcolor="#F3F4F6"
      borderRadius=".6rem"
      display="flex"
      justifyContent="space-between"
      mb="3rem"
      p="0.2rem"
    >
      {tabs.map((tab: ITabs) => (
        <Box
          display="flex"
          alignItems="center"
          width="100%"
          borderRadius=".5rem"
          p=".8rem 1.2rem"
          sx={activeStyleTab(tab)}
          onClick={() => setMode(tab.title as ModeType)}
          key={tab.title}
        >
          <img
            src={mode === tab.title ? tab.activeIcon : tab.icon}
            alt={tab.title.toLowerCase()}
          />
          <Typography color="#4D5562" ml=".8rem">
            {tab.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

interface ITabsField {
  mode: ModeType;
  setMode: (m: ModeType) => void;
}

interface ITabs {
  title: ModeType | string;
  icon: string;
  activeIcon: string;
}
