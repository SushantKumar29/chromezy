import { ICON_BASE, IMAGE_BASE } from "../urls";

export const STORY_LINK_ICON = `${ICON_BASE}/stories-arrow.svg`;
export const STORY_BADGE_TEXT = "Success Stories";

export const STORIES_CONTENT = {
  title: {
    line1: "SUCCESS",
    line2: "STORIES",
  },
  description:
    "Dummy ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  badgeText: STORY_BADGE_TEXT,
  linkIcon: STORY_LINK_ICON,
  cards: [
    {
      id: "story-1",
      title: "FinConnect",
      subtitle: "Customer Relationship Management (CRM)",
      image: `${IMAGE_BASE}/stories/story-1.png`,
    },
    {
      id: "story-2",
      title: "HealthSync",
      subtitle: "Health Tracking App for Patients and Doctors",
      image: `${IMAGE_BASE}/stories/story-2.png`,
    },
    {
      id: "story-3",
      title: "Commerce360",
      subtitle: "Online Store, Multivendor Marketplace & E-commerce Apps",
      image: `${IMAGE_BASE}/stories/story-3.png`,
    },
    {
      id: "story-4",
      title: "PrintwithAI",
      subtitle: "Web-to-Print Software / Online Design Tool / Product Designer Tool",
      image: `${IMAGE_BASE}/stories/story-4.png`,
    },
    {
      id: "story-5",
      title: "PM Insights",
      subtitle: "Project Management Tool (SaaS & Hosted)",
      image: `${IMAGE_BASE}/stories/story-5.png`,
    },
  ],
};
