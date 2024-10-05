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
  fontFamily: string;
  fontSize: string;
  onChange: (key: string, value: string) => void;
};

function Toolbar({
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
    <div className="toolbar">
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
        <span>Bold</span>
      </button>
      <button className="toolbar-button">
        <FaItalic />
        <span>Italics</span>
      </button>
      <button className="toolbar-button">
        <FaUnderline />
        <span>Underline</span>
      </button>
      <button className="toolbar-button">
        <FaStrikethrough />
        <span>StrikeThrough</span>
      </button>
      <button className="toolbar-button">
        <FaHighlighter />
        <span>Highlight</span>
      </button>
      <button className="toolbar-button">
        <FaLink />
        <span>Link</span>
      </button>
      <div style={{ position: "relative" }}>
        <button
          className="toolbar-button"
          onClick={() => setIsColorPickerVisible(!isColorPickerVisible)}
        >
          <MdColorLens />
          <span>Color</span>
        </button>
        {isColorPickerVisible && (
          <ColorPicker
            defaultValue={color}
            onChange={handleColorChange}
            onClose={() => setIsColorPickerVisible(false)}
          />
        )}
      </div>
    </div>
  );
}

export default Toolbar;
