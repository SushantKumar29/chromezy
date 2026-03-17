export interface ClientCardProps {
  client: {
    quote: string;
    name: string;
    role: string;
    rating: string;
    project: string;
    country: string;
    logo: { src: string; width: number; height: number };
    textHighlight?: boolean;
    selected?: boolean;
  };
}
