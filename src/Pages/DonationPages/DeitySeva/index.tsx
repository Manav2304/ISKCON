import * as React from "react";
import { DeityCard } from "./DeityCard";
import { deity, deityData } from "./constant";
import { PageWrapper } from "./style";
import { DonationPagesDescription } from "../PageLayout/index";

export const DeitySeva = () => {
  return (
    <>
      <div>
        <DonationPagesDescription title="Deity Seva" content={deity} />
      </div>
      <PageWrapper>
        {deityData.map((deity, index) => (
          <DeityCard
            key={index}
            image={deity.image}
            title={deity.title}
            description={deity.description}
            maintitle={deity.maintitle}
          />
        ))}
      </PageWrapper>
    </>
  );
};
