export interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  cta: string;
  tone: "mvp" | "saas" | "ai" | "commerce";
  icon: string;
  badgeText: string;
  ctaIcon: string;
}
