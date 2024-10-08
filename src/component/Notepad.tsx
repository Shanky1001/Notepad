import { useCallback } from "react";
import Toolbar from "./Toolbar";
import "../styles/Notepad.scss";
import useTextFormatting from "../hooks/useTextFormatting";
import { BUTTON_CLICK } from "../constants";

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
  const {
    ref,
    fontFamily,
    fontSize,
    handleCopyHTML,
    // setFontFamily,
    // setFontSize,
    handleToolbarClick,
  } = useTextFormatting({
    fontFamilies: fontFamilyOptions,
    fontSizes: fontSizeOptions,
  });

  const handleClick = useCallback(
    (key: string, value?: string) => {
      switch (key) {
        case BUTTON_CLICK.COPY:
          handleCopyHTML();
          break;
        default:
          handleToolbarClick(key, value);
      }
    },
    [handleCopyHTML, handleToolbarClick]
  );
  return (
    <div className="container" style={{ width, height }}>
      <Toolbar
        key="toolbar"
        options={{ fontFamilyOptions, fontSizeOptions }}
        fontFamily={fontFamily}
        fontSize={fontSize}
        onChange={handleToolbarClick}
        onClick={handleClick}
      />
      <div className="textarea" contentEditable ref={ref}>
        Starts typing here....
      </div>
    </div>
  );
}

export default Notepad;
