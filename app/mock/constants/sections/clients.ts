import { ICON_BASE, IMAGE_BASE } from "../urls";

export const CLIENT_QUOTE_ICON = `${ICON_BASE}/bi_quote.svg`;

export const CLIENTS_CONTENT = {
  title: "Our Happy Clients",
  subtitle: "Dummy ipsum dolor sit amet, consectetur adipiscing elit",
  quoteIcon: CLIENT_QUOTE_ICON,
  clients: [
    {
      id: "client-1",
      quote:
        "We are Campion Savings Club based in Zimbabwe, South Africa, UK, USA and Australia. Chromezy is very professional, efficient, and reliable.",
      name: "JEFTA MUGWENI",
      role: "(CEO), Campion Savings Club",
      rating: "5 / 5",
      project: "Custom CRM MVP Development",
      country: "Zimbabwe",
      logo: { src: `${IMAGE_BASE}/clients/client-1.svg`, width: 80, height: 80 },
      textHighlight: true,
      selected: false,
    },
    {
      id: "client-2",
      quote:
        "Highly responsive with keen attention to detail. Assisted in building my e-commerce platform, mapping transformative areas, resulting in exceptional customer experience.",
      name: "BRANDON LAU",
      role: "(CEO), KIRI Journey",
      rating: "5 / 5",
      project: "E-commerce Development",
      country: "HongKong",
      logo: { src: `${IMAGE_BASE}/clients/client-2.svg`, width: 40, height: 40 },
      textHighlight: false,
      selected: true,
    },
    {
      id: "client-3",
      quote:
        "They are swift to respond and implement faster. Thanks to Chromezy for providing expert developers and on-time delivery to help scale our Cloud-based ERP SaaS solution.",
      name: "MARC DOLLON",
      role: "CTO, MasterStudy",
      rating: "5 / 5",
      project: "SaaS-Based Cloud ERP",
      country: "United States",
      logo: { src: `${IMAGE_BASE}/clients/client-3.svg`, width: 120, height: 120 },
      textHighlight: false,
      selected: false,
    },
    {
      id: "client-4",
      quote:
        "I'm thrilled with Chromezy's work. They developed inventory management, AI-powered demand forecasting, and smart route optimization on time and affordably.",
      name: "JEET OBERAI",
      role: "(Entrepreneur), PayLoan",
      rating: "4.8 / 5",
      project: "Product Development",
      country: "Singapore",
      logo: { src: `${IMAGE_BASE}/clients/client-4.svg`, width: 80, height: 80 },
      textHighlight: false,
      selected: false,
    },
  ],
};
