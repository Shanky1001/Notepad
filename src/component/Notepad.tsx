import { useCallback, useRef, useState } from "react";
import Toolbar from "./Toolbar";
import "../styles/Notepad.scss";
function Notepad() {
  const contentEditableRef = useRef(null);
  const [toolbarPosition] = useState({ top: "0", left: "0" });
  const [fontFamily, setFontFamily] = useState<string>("Arial");
  const [fontSize, setFontSize] = useState<string>("16px");

  const handleChange = useCallback((key: string, value: string) => {}, []);
  return (
    <div className="notepad-container">
      <div
        className="textarea"
        contentEditable
        ref={contentEditableRef}
        // placeholder="Type your notes here..."
      ></div>

      {/* Toolbar */}
      <Toolbar
        toolbarPosition={toolbarPosition}
        fontFamily={fontFamily}
        fontSize={fontSize}
        onChange={handleChange}
      />
    </div>
  );
}

export default Notepad;
