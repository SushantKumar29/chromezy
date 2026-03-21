import { ICON_BASE, IMAGE_BASE } from "./urls";

export const STORIES_CONTENT = {
  title: {
    line1: "SUCCESS",
    line2: "STORIES",
  },
  description:
    "Dummy ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  cards: [
    {
      title: "FinConnect",
      subtitle: "Customer Relationship Management (CRM)",
      image: `${IMAGE_BASE}/stories/story-1.png`,
    },
    {
      title: "HealthSync",
      subtitle: "Health Tracking App for Patients and Doctors",
      image: `${IMAGE_BASE}/stories/story-2.png`,
    },
    {
      title: "Commerce360",
      subtitle: "Online Store, Multivendor Marketplace & E-commerce Apps",
      image: `${IMAGE_BASE}/stories/story-3.png`,
    },
    {
      title: "PrintwithAI",
      subtitle: "Web-to-Print Software / Online Design Tool / Product Designer Tool",
      image: `${IMAGE_BASE}/stories/story-4.png`,
    },
    {
      title: "PM Insights",
      subtitle: "Project Management Tool (SaaS & Hosted)",
      image: `${IMAGE_BASE}/stories/story-5.png`,
    },
  ],
  linkIcon: `${ICON_BASE}/stories-arrow.svg`,
  badge: "Success Stories",
};
