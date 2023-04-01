import React from "react";
import { goals } from "./constant";
import { PageLayout } from "../../Components/PageLayout";

export const GoalsPage: React.FC = () => {
  return (
    <div>
      <PageLayout
        title="Goals"
        content={goals}
        imageUrl="https://www.shutterstock.com/image-illustration/scene-battlefield-mahabharata-krishna-arjuna-600w-2091772597.jpg"
        altText="Goal Img"
      />
    </div>
  );
};
