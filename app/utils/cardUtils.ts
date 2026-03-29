export const scrollCard = (
  scrollRef: React.RefObject<HTMLDivElement | null>,
  direction: "left" | "right"
) => {
  if (!scrollRef.current) return;

  const currentScroll = scrollRef.current.scrollLeft; // Get the current scroll position of the container
  // Get the width of the card by subtracting the starting position of the first card from the starting position of the second card
  const cardWidth = getScrollPosition(scrollRef, 1) - getScrollPosition(scrollRef, 0);

  scrollRef.current.scrollTo({
    left: currentScroll + (direction === "right" ? cardWidth : -cardWidth),
    behavior: "smooth",
  });
};

// Get the scroll position of a specific card with respect to the container
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
