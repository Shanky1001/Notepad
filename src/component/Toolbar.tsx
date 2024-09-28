import { useState } from "react";
import { FONT_FAMILIES, FONT_SIZES, ON_CHANGE_KEYS } from "../constants";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaStrikethrough,
  FaLink,
  FaHighlighter,
} from "react-icons/fa";
import { MdColorLens } from "react-icons/md";
import ColorPicker from "./ColorPicker";
type ToolbarPropTypes = {
  options?: { fontFamilyOptions?: string[]; fontSizeOptions?: string[] };
  toolbarPosition: { top: string; left: string };
  fontFamily: string;
  fontSize: string;
  onChange: (key: string, value: string) => void;
};

function Toolbar({
  toolbarPosition,
  fontFamily,
  fontSize,
  onChange,
  options = {},
}: ToolbarPropTypes) {
  const { fontFamilyOptions = FONT_FAMILIES, fontSizeOptions = FONT_SIZES } =
    options;

  const [color, setColor] = useState<string>("#000000"); // Default color
  const [isColorPickerVisible, setIsColorPickerVisible] =
    useState<boolean>(false);

  const handleColorChange = (selectedColor: string) => {
    setColor(selectedColor);
    // applyFormatting("foreColor", selectedColor); // Apply selected color
  };
  return (
    <div
      className="toolbar"
      style={{ top: toolbarPosition.top, left: toolbarPosition.left }}
    >
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

      <button className="toolbar-button">
        <FaBold />
      </button>
      <button className="toolbar-button">
        <FaItalic />
      </button>
      <button className="toolbar-button">
        <FaUnderline />
      </button>
      <button className="toolbar-button">
        <FaStrikethrough />
      </button>
      <button className="toolbar-button">
        <FaHighlighter />
      </button>
      <button className="toolbar-button">
        <FaLink />
      </button>
      <button
        className="toolbar-button"
        style={{ position: "relative" }}
        onClick={() => setIsColorPickerVisible(!isColorPickerVisible)}
      >
        <MdColorLens />
        {isColorPickerVisible && (
          <ColorPicker
            defaultValue={color}
            onChange={handleColorChange}
            onClose={() => setIsColorPickerVisible(false)}
          />
        )}
      </button>
    </div>
  );
}

export default Toolbar;
