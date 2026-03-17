// This function is used to scroll the cards in the clients section
export const scrollCard = (
  scrollRef: React.RefObject<HTMLDivElement | null>,
  direction: "left" | "right"
) => {
  if (!scrollRef.current) return;

  const currentScroll = scrollRef.current.scrollLeft;
  const cardWidth = getScrollPosition(scrollRef, 1) - getScrollPosition(scrollRef, 0);

  scrollRef.current.scrollTo({
    left: currentScroll + (direction === "right" ? cardWidth : -cardWidth),
    behavior: "smooth",
  });
};

// This function is used to get the scroll position of a specific card with respect to the container
export const getScrollPosition = (
  scrollRef: React.RefObject<HTMLDivElement | null>,
  index: number
): number => {
  if (!scrollRef.current) return 0;

  const cards = scrollRef.current.querySelectorAll("[data-card]");
  if (!cards.length || !cards[index]) return 0;

  const card = cards[index] as HTMLElement;
  return card.offsetLeft - scrollRef.current.offsetLeft;
};
