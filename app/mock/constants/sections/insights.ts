import { ICON_BASE, IMAGE_BASE } from "../urls";

export const INSIGHT_LINK_ICON = `${ICON_BASE}/insight-arrow.svg`;

export const INSIGHTS_CONTENT = {
  title: "Featured Insights",
  subtitle: "Were you looking to explore a specific topic? You're in the right spot.",
  linkIcon: INSIGHT_LINK_ICON,
  insights: [
    {
      id: "insight-1",
      title: "Successful MVP Launches That Changed the Game.",
      description:
        "Discover the secrets behind game-changing MVP launches! From lean startups to industry giants, explore how these innovative launches disrupted markets and paved the way for success. Click to uncover the strategies that revolutionized product development.",
      image: `${IMAGE_BASE}/insights/insight-1.png`,
    },
    {
      id: "insight-2",
      title: "How Our AI Product Development Company is Pioneering Innovation?",
      description:
        "Discover how our product development company pioneers innovation. From groundbreaking technologies to creative strategies, we're shaping the future. Click to explore our journey and join us in revolutionizing industries.",
      image: `${IMAGE_BASE}/insights/insight-2.png`,
    },
    {
      id: "insight-3",
      title: "Optimizing E-commerce Sales with AI-Driven Product Recommendations.",
      description:
        "Boost your e-commerce sales with AI-powered product recommendations. Learn how smart algorithms can enhance customer experience and drive conversions. Read our blog for actionable insights!",
      image: `${IMAGE_BASE}/insights/insight-3.png`,
    },
  ],
};
