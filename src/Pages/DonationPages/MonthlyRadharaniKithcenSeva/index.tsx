import React, { useState } from "react";
import { options,option1, option2, option3,  option4, option5, option6, monthlyRadharani } from "./constant";
import { Button, Table } from "./style";
import { DonationPagesDescription } from "../PageLayout";
import { Payment } from "../Payment/donationTable";

export const  MonthlySeva= () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (value: React.SetStateAction<string>) => {
    setSelectedOption(value);
  };

  const renderTable = () => {
    if (selectedOption === "option1") {
      return (
        <Table>
          <Payment donationCategories={option1} />
        </Table>
      );
    }

    if (selectedOption === "option2") {
      return (
        <Table>
          <Payment donationCategories={option2} />
        </Table>
      );
    }

    if (selectedOption === "option3") {
      return (
        <Table>
          <Payment donationCategories={option3} />
        </Table>
      );
    }
    if (selectedOption === "option4") {
        return (
          <Table>
            <Payment donationCategories={option4} />
          </Table>
        );
      }  if (selectedOption === "option5") {
        return (
          <Table>
            <Payment donationCategories={option5} />
          </Table>
        );
      }  if (selectedOption === "option6") {
        return (
          <Table>
            <Payment donationCategories={option6} />
          </Table>
        );
      }
     

    return null;
  };

  return (
    <>
      <DonationPagesDescription title="Monthly Radharani's Kitchen Seva" content={monthlyRadharani} />
      {options.map((option) => (
        <div key={option.value}>
          <Button onClick={() => handleOptionClick(option.value)}>
            {option.label}
          </Button>
        </div>
      ))}
      {renderTable()}
    </>
  );
};
