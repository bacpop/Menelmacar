// This function is used to compute the width of a text given a font size and a font family
export function getTextWidth(font_size, font_family, text = "G") {
  const inputText = text;
  const font = font_size + "px " + font_family;

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (context) {
    context.font = font;
  } else {
    return 0;
  }

  return context?.measureText(inputText).width;
}
