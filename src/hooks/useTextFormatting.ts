import { useState } from "react";

type useTextFormatting = {
  fontFamilies?: string[];
};

const useTextFormatting = ({ fontFamilies }: useTextFormatting) => {
  const [fontFamily, setFontFamily] = useState<string>(fontFamilies?.[0] ?? "");
  const [fontSize, setFontSize] = useState<string>("16px");
  const [isBold, setIsBold] = useState<boolean>(false);
  const [isItalic, setIsItalic] = useState<boolean>(false);
  // // to show toolbar
  // const [showSelectionToolBar, setShowSelectionToolBar] = useState(false);
  // const [toolbarPosition, setToolbarPosition] = useState({ top: 0, left: 0 });

  // useEffect(() => {
  //   const handleSelection = () => {
  //     const selection = window.getSelection();
  //     console.log({ selection });
  //     if (selection && selection.rangeCount > 0) {

  //       // setShowSelectionToolBar(true);
  //       // const range = selection.getRangeAt(0);
  //       // const rect = range.getBoundingClientRect();
  //       // // Show toolbar at the selection position
  //       // setToolbarPosition({
  //       //   top: rect.top + window.scrollY - 40, // Adjust toolbar position above the selection
  //       //   left: rect.left + window.scrollX,
  //       // });
  //     }
  //     // else {
  //     //   setShowSelectionToolBar(false);
  //     // }
  //   };

  //   document.addEventListener("selectionchange", handleSelection);
  //   return () => {
  //     document.removeEventListener("selectionchange", handleSelection);
  //   };
  // }, []);

  const applyFormatting = (command: string, value?: string) => {
    document.execCommand(command, false, value);
  };

  const handleCopyHTML = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const html = ref.current.innerHTML;
      navigator.clipboard
        .writeText(html)
        .then(() => alert("HTML copied to clipboard!"))
        .catch((err) => console.error("Error copying HTML: ", err));
    }
  };

  return {
    fontFamily,
    setFontFamily,
    fontSize,
    setFontSize,
    isBold,
    setIsBold,
    isItalic,
    setIsItalic,
    applyFormatting,
    // showSelectionToolBar,
    // toolbarPosition,
    handleCopyHTML,
  };
};

export default useTextFormatting;
