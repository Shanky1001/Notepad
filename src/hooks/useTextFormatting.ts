import { useCallback, useRef, useState } from "react";
import { ON_CHANGE_KEYS } from "../constants";

type useTextFormatting = {
  fontFamilies?: string[];
  fontSizes?: string[];
};

const useTextFormatting = ({ fontFamilies, fontSizes }: useTextFormatting) => {
  const contentEditableRef = useRef<HTMLDivElement>(null);
  const [fontFamily, setFontFamily] = useState<string>(fontFamilies?.[0] ?? "");
  const [fontSize, setFontSize] = useState<string>(fontSizes?.[0] ?? "16px");
  // const [isBold, setIsBold] = useState<boolean>(false);
  // const [isItalic, setIsItalic] = useState<boolean>(false);

  const applyFormatting = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    if (command === ON_CHANGE_KEYS.FONT_FAMILY) {
      setFontFamily(value!);
    }
    if (command === ON_CHANGE_KEYS.FONT_SIZE) {
      setFontSize(value!);
    }
    document.getSelection()?.removeAllRanges();
  };

  const handleCopyHTML = () => {
    if (contentEditableRef.current) {
      const html = contentEditableRef.current.innerHTML;
      navigator.clipboard
        .writeText(html)
        .then(() => alert("HTML copied to clipboard!"))
        .catch((err) => console.error("Error copying HTML: ", err));
    }
  };

  const handleToolbarClick = useCallback((key: string, value?: string) => {
    applyFormatting(key, value);
  }, []);

  return {
    ref: contentEditableRef,
    fontFamily,
    setFontFamily,
    fontSize,
    setFontSize,
    // isBold,
    // setIsBold,
    // isItalic,
    // setIsItalic,
    applyFormatting,
    handleToolbarClick,
    handleCopyHTML,
  };
};

export default useTextFormatting;
