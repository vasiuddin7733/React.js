import ScrollChangerContext from "./Context";

export const useScrollChanger = createScrollChangerHook(ScrollChangerContext);

export const useScrollChangerElement = createScrollChangerElementHook(
  ScrollChangerContext,
);
