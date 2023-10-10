import { SET_THEME } from "../ThemeTypes";

export const setTheme = (theme: String) => {
  console.log("theme", theme);
  return {
    type: SET_THEME,
    payload: theme,
  };
};
