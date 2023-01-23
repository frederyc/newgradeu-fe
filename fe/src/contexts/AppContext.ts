import React, {createContext} from "react";
import {Theme} from "@mui/material";

// @ts-ignore
const AppContext: React.Context<Theme> = createContext<Theme>({});
export default AppContext;
