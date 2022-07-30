const cardScroller = (
  node: React.MutableRefObject<HTMLDivElement | null>,
  scroll: number
) => {
  node.current!.scrollTo({
    left: scroll,
    behavior: "smooth",
  });
};

export {cardScroller}
