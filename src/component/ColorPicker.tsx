import { Color, SketchPicker } from "react-color";

type ColorPickerProps = {
  defaultValue?: Color;
  onChange: (color: string) => void;
  onClose: () => void;
};

function ColorPicker({
  defaultValue = "#000",
  onChange,
  onClose,
}: ColorPickerProps) {
  const handleChangeComplete = (color: { hex: string }) => {
    onChange(color.hex);
    onClose();
  };

  return (
    <div style={{ position: "absolute", zIndex: 2 }}>
      <SketchPicker
        onChangeComplete={handleChangeComplete}
        color={defaultValue}
        disableAlpha
      />
    </div>
  );
}

export default ColorPicker;
