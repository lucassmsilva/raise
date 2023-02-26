export const slate900 = "#0f172a";
export const stone50 = "#fafaf9";
export const stone100 = "#f5f5f4";
export const amber400 = "#fbbf24";
export const blue700 = "#1d4ed8";

export const getColors = theme => {
  if (theme === "dark")
    return {
      primaryColor: slate900,
      secondaryColor: "",
      accentColor: amber400
    };
  return {
    primaryColor: stone100,
    secondaryColor: "",
    accentColor: blue700
  };
};
