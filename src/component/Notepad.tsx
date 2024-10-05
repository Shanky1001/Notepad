import { useCallback, useRef } from "react";
import Toolbar from "./Toolbar";
import "../styles/Notepad.scss";
import useTextFormatting from "../hooks/useTextFormatting";

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
  const { fontFamily, fontSize } = useTextFormatting({
    fontFamilies: fontFamilyOptions,
  });
  const contentEditableRef = useRef(null);

  const handleChange = useCallback((key: string, value: string) => {}, []);
  return (
    <div className="container" style={{ width, height }}>
      <Toolbar
        key="toolbar"
        options={{ fontFamilyOptions, fontSizeOptions }}
        fontFamily={fontFamily}
        fontSize={fontSize}
        onChange={handleChange}
      />
      <div className="textarea" contentEditable ref={contentEditableRef}>
        Starts typing here....
      </div>
    </div>
  );
}

export default Notepad;
