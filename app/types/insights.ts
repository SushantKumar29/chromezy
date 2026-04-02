export interface InsightCard {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface InsightCardProps {
  linkIcon: string;
  insight: InsightCard;
}
