import { DonationCategory } from "../Payment/constant";

export const gauSeva = [
  "Your Contribution Can Help To Maintain And Nourish Cows Who Is Considered One Of The Seven Mothers.",

  "Gau means cow and dan means donation. Gau-dan is considered one of the most powerful and pure donations since it frees one from sinful reactions and helps one attain residence in the spiritual world.",
];

export const options = [
  {
    value: "option1",
    label: "Care for Cow",
    columns: ["Column 1", "Column 2", "Column 3"],
    data: ["Data 1", "Data 2", "Data 3"],
  },
  {
    value: "option2",
    label: "Daily Gau Seva",
    columns: ["Column A", "Column B", "Column C"],
    data: ["Data A", "Data B", "Data C"],
  },
  {
    value: "option3",
    label: "Gau Puja",
    columns: ["Column A", "Column B", "Column C"],
    data: ["Data A", "Data B", "Data C"],
  },
  // Add more options here
];

export const option1: DonationCategory[] = [
  {
    title: "Care for Cow",
    donations: [
      { id: 1, title: "Donate 25 Meals", amount: 1000 },
      { id: 2, title: "Donate 50 Meals", amount: 2000 },
      { id: 3, title: "Donate 100 Meals", amount: 4000 },
      { id: 4, title: "Donate 125 Meals", amount: 5000 },
      { id: 5, title: "Donate 250 Meals", amount: 10000 },
      { id: 6, title: "Donate 500 Meals", amount: 20000 },
      { id: 7, title: "Donate 1000 Meals", amount: 40000 },
      { id: 8, title: "Donate 1250 Meals", amount: 50000 },
      { id: 9, title: "Donate 2500 Meals", amount: 100000 },
      { id: 10, title: "Donate 5000 Meals", amount: 200000 },
      { id: 11, title: "Donate 7500 Meals", amount: 300000 },
      { id: 12, title: "Donate 10000 Meals", amount: 400000 },
      { id: 13, title: "Donate 12500 Meals", amount: 500000 },
    ],
  },
];

export const option2: DonationCategory[] = [
  {
    title: "Daily Gau Seva",
    donations: [
      { id: 14, title: "Feed 5 cows per day", amount: 600 },
      { id: 15, title: "Feed 10 cows per day ", amount: 1200 },
      { id: 16, title: "Feed 20 cows per day ", amount: 2400 },
      { id: 17, title: "Feed 30 cows per day ", amount: 3600 },
      { id: 18, title: "Feed 50 cows per day ", amount: 6000 },
      { id: 19, title: "Feed 100 cows per day ", amount: 12000 },
      { id: 20, title: "Feed 150 cows per day ", amount: 18000 },
      { id: 21, title: "Feed 200 cows per day ", amount: 24000 },
      { id: 22, title: "Feed 250 cows per day ", amount: 30000 },
      { id: 23, title: "Feed 300 cows per day ", amount: 36000 },
      { id: 24, title: "Feed 350 cows per day ", amount: 42000 },
      { id: 25, title: "Feed all cows for a Day", amount: 51000 },
    ],
  },
];

export const option3: DonationCategory[] = [
  {
    title: "Gau Puja",
    donations: [
      { id: 26, title: "Worship a Bull", amount: 1100 },
      { id: 27, title: "Worship a Cow", amount: 2100 },
      { id: 28, title: "Worship Cow & Calf", amount: 3100 },
      { id: 29, title: "Worship Cow, Calf & Bull", amount: 5100 },
    ],
  },
];
