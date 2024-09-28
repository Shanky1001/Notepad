import { useCallback, useRef, useState } from "react";
import Toolbar from "./Toolbar";
import "../styles/Notepad.scss";

type NotePadPropType = {
  config?: {
    fontSizeOptions?: string[];
    fontFamilyOptions?: string[];
  };
  width?: string;
  height?: string;
};

const DEFAULT_DATA = {
  width: "80%",
  height: "300px",
};
function Notepad(props: NotePadPropType) {
  const {
    config = {},
    width = DEFAULT_DATA.width,
    height = DEFAULT_DATA.height,
  } = props;

  const { fontFamilyOptions, fontSizeOptions } = config;
  const contentEditableRef = useRef(null);
  const [toolbarPosition] = useState({ top: "0", left: "0" });
  const [showSelectionToolBar, setShowSelectionToolBar] = useState(true);
  const [fontFamily, setFontFamily] = useState<string>("");
  const [fontSize, setFontSize] = useState<string>("");

  const handleChange = useCallback((key: string, value: string) => {}, []);
  const handleBlur = () => {
    setShowSelectionToolBar(false);
  };
  return (
    <div className="notepad-container">
      <div
        className="textarea"
        style={{ width, height }}
        onBlur={handleBlur}
        onFocus={() => setShowSelectionToolBar(true)}
        contentEditable
        ref={contentEditableRef}
      >
        Starts typing here....
      </div>
      {showSelectionToolBar && (
        <Toolbar
          key="toolbar"
          options={{ fontFamilyOptions, fontSizeOptions }}
          toolbarPosition={toolbarPosition}
          fontFamily={fontFamily}
          fontSize={fontSize}
          onChange={handleChange}
        />
      )}
    </div>
  );
}

export default Notepad;
