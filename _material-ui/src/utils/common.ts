import { LabelColor } from "../@types/theme";

export const randomLabelColor = (): LabelColor => {
  const colorList: Array<LabelColor> = ["info", "success", "warning", "error"];
  const color: LabelColor =
    colorList[Math.floor(Math.random() * colorList.length)];
  return color || "default";
};
