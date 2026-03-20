import { ICON_BASE, IMAGE_BASE } from "./urls";

export const TECHNOLOGIES_CONTENT = {
  title: {
    line1: "Innovative",
    line2: "Technologies",
    line3: "Keeping Us",
    line4: "Ahead",
  },
  description:
    "Discover the impact of bespoke digital solutions tailored precisely to your business's distinct requirements.",
  categories: [
    {
      n: "01",
      title: "Web App Development",
      tags: [
        { label: "React", icon: `${ICON_BASE}/technologies/react.svg` },
        { label: "Node", icon: `${ICON_BASE}/technologies/node.svg` },
        { label: "Angular", icon: `${ICON_BASE}/technologies/angular.svg` },
        { label: "Vue", icon: `${ICON_BASE}/technologies/vue.svg` },
        { label: "ExpressJS", icon: `${ICON_BASE}/technologies/express.svg` },
        { label: "AdobeXD", icon: `${ICON_BASE}/technologies/adobe.svg` },
        { label: "Figma", icon: `${ICON_BASE}/technologies/figma.svg` },
        { label: "Whimsical" },
      ],
    },
    {
      n: "02",
      title: "Mobile App Development",
      tags: [
        { label: "Flutter", icon: `${ICON_BASE}/technologies/flutter.svg` },
        { label: "Kotlin", icon: `${ICON_BASE}/technologies/kotlin.svg` },
        { label: "Swift", icon: `${ICON_BASE}/technologies/swift.svg` },
        { label: "React Native", icon: `${ICON_BASE}/technologies/react.svg` },
        { label: "AdobeXD", icon: `${ICON_BASE}/technologies/adobe.svg` },
        { label: "Figma", icon: `${ICON_BASE}/technologies/figma.svg` },
      ],
    },
    {
      n: "03",
      title: "E-commerce",
      tags: [{ label: "Shopify" }, { label: "WooCommerce" }, { label: "Prestashop" }],
    },
    {
      n: "04",
      title: "Analytics",
      tags: [
        { label: "Python", icon: `${ICON_BASE}/technologies/python.svg` },
        { label: "PowerBI", icon: `${ICON_BASE}/technologies/powerbi.svg` },
        { label: "Tableau", icon: `${ICON_BASE}/technologies/tableau.svg` },
        { label: "Amazon QuickSight" },
        { label: "Apache Spark", icon: `${ICON_BASE}/technologies/tableau.svg` },
      ],
    },
    {
      n: "05",
      title: "Data & Cloud",
      tags: [
        { label: "Azure", icon: `${ICON_BASE}/technologies/azure.svg` },
        { label: "AWS", icon: `${ICON_BASE}/technologies/aws.svg` },
        { label: "Docker", icon: `${ICON_BASE}/technologies/docker.svg` },
        { label: "Kubernetes", icon: `${ICON_BASE}/technologies/kubernetes.svg` },
        { label: "Google Cloud", icon: `${ICON_BASE}/technologies/googlecloud.svg` },
        { label: "Ola Krutrim" },
      ],
    },
  ],
  images: {
    strippedBall: `${IMAGE_BASE}/technologies/stripped-ball.svg`,
    spiralImg: `${IMAGE_BASE}/technologies/spiral-transparent.png`,
  },
};
