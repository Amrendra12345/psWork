import React from "react";
import CardCarousel from "../cardcarousel/CardCarousel";
const smartSupportData = [
  {
    id: 1,
    type: "standard",
    title: "AI + EHR",
    description:
      "Explore our flexible financing options designed to meet your unique needs. We’re here to help you find the perfect solution for your budget.",
    buttonUrl: "/",
    buttonText: "Explore",
    icon: "/assets/emergency.svg",
    stats: "100+",
  },
  {
    id: 2,
    type: "tags",
    title: "Smart Tools",
    buttonText: "Explore",
    buttonUrl: "/",
    backgroundImage: "/assets/placeholder2.png",
    tags: [
      "Tool Name 1",
      "Tool Name 2",
      "Tool Name 3",
      "Tool Name 4",
      "Tool Name 5",
    ],
  },
  {
    id: 3,
    type: "standard",
    title: "Referrals",
    description: "24/7 help anytime, anywhere.",
    buttonUrl: "/",
    buttonText: "Contact",
    icon: "/assets/heart-add.svg",
    stats: "200+",
  },
  {
    id: 4,
    type: "tags",
    title: "Smart Tools",
    buttonText: "Explore",
    buttonUrl: "/",
    backgroundImage: "/assets/placeholder2.png",
    tags: [
      "Tool Name 9",
      "Tool Name 4",
      "Tool Name 3",
      "Tool Name 1",
      "Tool Name 5",
    ],
  },
];
const SmartSupport = () => {
  return (
    <CardCarousel
      cards={smartSupportData}
      sectionTitle="Smart Support for Smarter Doctors"
    />
  );
};

export default SmartSupport;
