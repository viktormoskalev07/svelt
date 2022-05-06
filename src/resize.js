export function staticResize(height) {
  let staticWidgetResize;
  if (height < 450) {
    staticWidgetResize = "scale(1)";
  }
  if (height < 400) {
    staticWidgetResize = "scale(0.8)";
  }
  if (height < 350) {
    staticWidgetResize = "scale(0.75)";
  }
  if (height < 300) {
    staticWidgetResize = "scale(0.6)";
  }
  if (height < 250) {
    staticWidgetResize = "scale(0.55)";
  }
  if (height < 200) {
    staticWidgetResize = "scale(0.5)";
  }
  if (height < 150) {
    staticWidgetResize = "scale(0.45)";
  }
  if (height < 100) {
    staticWidgetResize = "scale(0.4)";
  }
  return staticWidgetResize;
}

export function widgetResized(height) {
  let widgetResize;
  if (height <= 600) {
    widgetResize = "scale(0.8)";
  }
  if (height <= 550) {
    widgetResize = "scale(0.7)";
  }
  if (height <= 500) {
    widgetResize = "scale(0.6)";
  }
  if (height < 400) {
    widgetResize = "scale(0.5)";
  }
  if (height <= 350) {
    widgetResize = "scale(0.45)";
  }
  if (height <= 300) {
    widgetResize = "scale(0.35)";
  }
  if (height <= 200) {
    widgetResize = "scale(0.25)";
  }
  return widgetResize;
}
