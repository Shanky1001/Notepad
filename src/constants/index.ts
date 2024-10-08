export const FONT_FAMILIES = [
  "Times New Roman",
  "Arial",
  "Courier New",
  "Georgia",
  "Verdana",
];
export const FONT_SIZES = ["12px", "14px", "16px", "18px", "20px", "24px"];

export const ON_CHANGE_KEYS = {
  FONT_FAMILY: "fontName",
  FONT_SIZE: "fontSize",
  HIGHLIGHT: "backColor",
  FONT_COLOR: "foreColor",
} as const;
export const BUTTON_CLICK = {
  COPY: "copy",
  BOLD: "bold",
  ITALIC: "italic",
  STRIKE_THROUGH: "strikeThrough",
  UNDERLINE: "underline",
} as const;
