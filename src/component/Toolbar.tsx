import { ElementType, useState } from "react";
import {
  BUTTON_CLICK,
  FONT_FAMILIES,
  FONT_SIZES,
  ON_CHANGE_KEYS,
} from "../constants";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaStrikethrough,
  FaLink,
  FaHighlighter,
} from "react-icons/fa";
import { MdOutlineFormatColorText } from "react-icons/md";

import ColorPicker from "./ColorPicker";
import { BiCopy } from "react-icons/bi";
type ToolbarPropTypes = {
  options?: { fontFamilyOptions?: string[]; fontSizeOptions?: string[] };
  fontFamily: string;
  fontSize: string;
  onChange: (key: string, value?: string) => void;
  onClick?: (key: string) => void;
  customIcons?: {
    Bold?: ElementType;
    Italic?: ElementType;
    Underline?: ElementType;
    Highlight?: ElementType;
    Link?: ElementType;
    Strike?: ElementType;
    Color?: ElementType;
  };
};

const emptyObj = {};
function Toolbar({
  fontFamily,
  fontSize,
  onChange,
  onClick,
  options = emptyObj,
  customIcons = emptyObj,
}: ToolbarPropTypes) {
  const { fontFamilyOptions = FONT_FAMILIES, fontSizeOptions = FONT_SIZES } =
    options;

  const {
    Bold = FaBold,
    Italic = FaItalic,
    Underline = FaUnderline,
    Highlight = FaHighlighter,
    Link = FaLink,
    Strike = FaStrikethrough,
    Color = MdOutlineFormatColorText,
  } = customIcons;

  const [color, setColor] = useState<string>("#000000"); // Default color
  const [isColorPickerVisible, setIsColorPickerVisible] =
    useState<boolean>(false);

  const handleColorChange = (selectedColor: string) => {
    onChange?.(ON_CHANGE_KEYS.FONT_COLOR, selectedColor);
    setColor(selectedColor);
  };

  return (
    <div className="toolbar">
      <div className="toolbar-left">
        <select
          value={fontFamily}
          onChange={(e) => onChange(ON_CHANGE_KEYS.FONT_FAMILY, e.target.value)}
          className="select"
        >
          {fontFamilyOptions.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>

        <select
          value={fontSize}
          onChange={(e) => onChange(ON_CHANGE_KEYS.FONT_SIZE, e.target.value)}
          className="select"
        >
          {fontSizeOptions.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>

        <button
          className="toolbar-button"
          onClick={() => onClick?.(BUTTON_CLICK.BOLD)}
        >
          <Bold />
          <span>Bold</span>
        </button>
        <button
          className="toolbar-button"
          onClick={() => onClick?.(BUTTON_CLICK.ITALIC)}
        >
          <Italic />
          <span>Italics</span>
        </button>
        <button
          className="toolbar-button"
          onClick={() => onClick?.(BUTTON_CLICK.UNDERLINE)}
        >
          <Underline />
          <span>Underline</span>
        </button>
        <button
          className="toolbar-button"
          onClick={() => onClick?.(BUTTON_CLICK.STRIKE_THROUGH)}
        >
          <Strike />
          <span>StrikeThrough</span>
        </button>
        <button
          className="toolbar-button"
          onClick={() => onChange?.(ON_CHANGE_KEYS.HIGHLIGHT, "yellow")}
        >
          <Highlight />
          <span>Highlight</span>
        </button>
        <button className="toolbar-button">
          <Link />
          <span>Link</span>
        </button>
        <span style={{ position: "relative" }}>
          <button
            className="toolbar-button"
            onClick={() => setIsColorPickerVisible(!isColorPickerVisible)}
          >
            <Color style={{ color: color }} />
            <span>Color</span>
          </button>
          {isColorPickerVisible && (
            <ColorPicker
              defaultValue={color}
              onChange={handleColorChange}
              onClose={() => setIsColorPickerVisible(false)}
            />
          )}
        </span>
      </div>
      <div className="toolbar-right">
        <button
          className="toolbar-button"
          onClick={() => onClick?.(BUTTON_CLICK.COPY)}
        >
          <BiCopy />
          <span>Copy HTML</span>
        </button>
      </div>
    </div>
  );
}

export default Toolbar;
