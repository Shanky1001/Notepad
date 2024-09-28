import { FONT_FAMILIES, FONT_SIZES, ON_CHANGE_KEYS } from "../constants";

type ToolbarPropTypes = {
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
}: ToolbarPropTypes) {
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
        {FONT_FAMILIES.map((font) => (
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
        {FONT_SIZES.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>

      {/* <button
        onClick={toggleBold}
        className={`toolbar-button ${isBold ? "active" : ""}`}
      >
        Bold
      </button>
      <button
        onClick={toggleItalic}
        className={`toolbar-button ${isItalic ? "active" : ""}`}
      >
        Italic
      </button> */}
    </div>
  );
}

export default Toolbar;
