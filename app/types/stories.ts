export interface StoryCard {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface StoryCardProps {
  badgeText: string;
  linkIcon: string;
  card: StoryCard;
  large?: boolean;
}
