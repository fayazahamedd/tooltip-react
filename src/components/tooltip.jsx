/* eslint-disable no-unused-vars */
import React from "react";
import Tooltip from "@mui/material/Tooltip";
import "./TooltipStyles.css"; // Import your CSS file for styling

// eslint-disable-next-line react/prop-types
export default function ArrowTooltips({ children }) {
  return (
    <Tooltip title="Thanks for hovering! I'm a tooltip" arrow placement="right">
      {children}
    </Tooltip>
  );
}
