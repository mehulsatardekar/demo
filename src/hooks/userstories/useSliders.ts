import { useState, useRef } from "react";
import { cardScroller } from "../../utils";
const useSlider = () => {
  const userStoriesSlider = useRef<HTMLDivElement | null>(null);

  const scrollHandler = (action: string | undefined) => {
    if (action === "ChevronRightIcon") {
      const leftScroll = userStoriesSlider.current!.scrollLeft;
      cardScroller(userStoriesSlider, leftScroll + 400);
    } else if (action === "ChevronLeftIcon") {
      const leftScroll = userStoriesSlider.current!.scrollLeft;
      cardScroller(userStoriesSlider, leftScroll - 400);
    }
  };

  const cardSlider = (
    event: React.MouseEvent<SVGSVGElement | HTMLDivElement, MouseEvent>
  ) => {
    const { testid } = (event.target as HTMLDivElement).dataset;
    scrollHandler(testid);
  };

  return { scrollHandler, cardSlider, userStoriesSlider };
};

export { useSlider };
