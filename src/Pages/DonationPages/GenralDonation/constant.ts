import { DonationCategory } from "../Payment/constant";

export const generaldonation = [
  "In this endeavour of offering service to Lord Krishna, you get eternal credit, and a little service offer to Lord Krishna can protect one from the most dangerous type of fear. --Bhagavad Gita 2.4",

  "While Krishna was going to the fruit vendor very hastily, most of the grains He was holding fell. Nonetheless, the fruit vendor filled Krishna’s hands with fruits, and her fruit basket was immediately filled with jewels and gold. --Srimad Bhagavatam 10.11.11",
  "Please donate and attain the supreme blessings of Supreme Lord Krishna.",
];

export const options = [
  {
    value: "option1",
    label: "AnnaDaan",
    columns: ["Column 1", "Column 2", "Column 3"],
    data: ["Data 1", "Data 2", "Data 3"],
  },
  {
    value: "option2",
    label: "Care for Cow",
    columns: ["Column A", "Column B", "Column C"],
    data: ["Data A", "Data B", "Data C"],
  },
  {
    value: "option3",
    label: "Daily Deity Seva",
    columns: ["Column A", "Column B", "Column C"],
    data: ["Data A", "Data B", "Data C"],
  },
  {
    value: "option4",
    label: "Sadhu Bhojan",
    columns: ["Column A", "Column B", "Column C"],
    data: ["Data A", "Data B", "Data C"],
  },
  {
    value: "option5",
    label: "Daily Gau Seva",
    columns: ["Column A", "Column B", "Column C"],
    data: ["Data A", "Data B", "Data C"],
  },
  {
    value: "option6",
    label: "Ghee Lamp Seva",
    columns: ["Column A", "Column B", "Column C"],
    data: ["Data A", "Data B", "Data C"],
  },

  // Add more options here
];

export const option1: DonationCategory[] = [
  {
    title: "AnnaDaan",
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
    title: "Care for Cow",
    donations: [
      { id: 1, title: "Feed a cow for 5 days", amount: 600 },
      { id: 2, title: "Feed a cow for 10 days", amount: 1200 },
      { id: 3, title: "Feed a cow for 15 days", amount: 1800 },
      { id: 4, title: "Feed a cow for a month", amount: 3600 },
      { id: 5, title: "Feed a cow for 2 months", amount: 7200 },
      { id: 6, title: "Feed a cow for 3 months", amount: 10800 },
      { id: 7, title: "Banana and Jaggery feast for all cows", amount: 15000 },
      { id: 8, title: "Feed a cow for 6 months", amount: 21000 },
      { id: 9, title: "Fodder for all cows for a day", amount: 25000 },
      { id: 10, title: "Serve a cow for a Year", amount: 41000 },
      { id: 11, title: "Feed all cow for a Day", amount: 51000 },
      { id: 12, title: "Serve a cow for Three Years", amount: 121000 },
      { id: 13, title: "Serve a cow for Five Years", amount: 200000 },
      { id: 14, title: "Serve a cow for Eight Years", amount: 300000 },
      { id: 15, title: "Serve a cow for a Lifetime", amount: 500000 },
    ],
  },
];

export const option3: DonationCategory[] = [
  {
    title: "Daily Deity Seva",
    donations: [
      { id: 1, title: "Sakalika Bhoga", amount: 1001 },
      { id: 2, title: "Vaikalika Bhoga", amount: 1001 },
      { id: 3, title: "Shayana Bhoga", amount: 2001 },
      { id: 4, title: "Balya Bhoga", amount: 1501 },
      { id: 5, title: "Sandhya Bhoga", amount: 2501 },
      { id: 6, title: "Raja Bhoga", amount: 3500 },
      { id: 7, title: "Pushpa Seva", amount: 8001 },
      { id: 8, title: "All Seva of the Day", amount: 18001 },
    ],
  },
];

export const option4: DonationCategory[] = [
  {
    title: "Sadhu Bhojan",
    donations: [
      { id: 1, title: "Sponsor 1 day prasadam for 10 sadhus", amount: 2000 },
      { id: 2, title: "Sponsor 1 day prasadam for 25 sadhus", amount: 5000 },
      { id: 3, title: "Sponsor 1 day prasadam for 50 sadhus", amount: 10000 },
      { id: 4, title: "Sponsor 1 day prasadam for 75 sadhus", amount: 15000 },
      { id: 5, title: "Sponsor 1 day prasadam for 100 sadhus", amount: 20000 },
      {
        id: 6,
        title: "Sponsor 1 day FEAST prasadam for all sadhus",
        amount: 31000,
      },
      {
        id: 7,
        title: "Sponsor 2 days FEAST prasadam for all sadhus",
        amount: 61000,
      },
      {
        id: 8,
        title: "Sponsor 3 days FEAST prasadam for all sadhus",
        amount: 91000,
      },
      {
        id: 9,
        title: "Sponsor 5 days FEAST prasadam for all sadhus",
        amount: 151000,
      },
      {
        id: 10,
        title: "Sponsor 7 days FEAST prasadam for all sadhus",
        amount: 211000,
      },
      {
        id: 11,
        title: "Sponsor 10 days FEAST prasadam for all sadhus",
        amount: 300000,
      },
      {
        id: 12,
        title: "Sponsor 15 days FEAST prasadam for all sadhus",
        amount: 450000,
      },
    ],
  },
];

export const option5: DonationCategory[] = [
  {
    title: "Daily Gau Seva",
    donations: [
      { id: 1, title: "Feed 5 cows per day", amount: 600 },
      { id: 2, title: "Feed 10 cows per day", amount: 1200 },
      { id: 3, title: "Feed 20 cows per day", amount: 2400 },
      { id: 4, title: "Feed 30 cows per day", amount: 3600 },
      { id: 5, title: "Feed 50 cows per day", amount: 6000 },
      { id: 6, title: "Feed 100 cows per day", amount: 12000 },
      { id: 7, title: "Feed 150 cows per day", amount: 18000 },
      { id: 8, title: "Feed 200 cows per day", amount: 24000 },
      { id: 9, title: "Feed 250 cows per day", amount: 30000 },
      { id: 10, title: "Feed 300 cows per day", amount: 36000 },
      { id: 11, title: "Feed 350 cows per day", amount: 42000 },
      { id: 12, title: "Feed all cows for a Day", amount: 51000 },
    ],
  },
];

export const option6: DonationCategory[] = [
  {
    title: "Ghee Lamp Seva",
    donations: [
      {
        id: 1,
        title: "Ghee Lamps for Mangala and Sandhya Arati for a day",
        amount: 1108,
      },
      { id: 2, title: "Ghee Lamps for all Arati for a day", amount: 2108 },
      { id: 3, title: "Ghee Lamps for all Arati for 2 days", amount: 4108 },
      { id: 4, title: "Ghee Lamps for all Arati for 3 days", amount: 6108 },
      { id: 5, title: "Ghee Lamps for all Arati for 5 days", amount: 10108 },
      { id: 6, title: "Ghee Lamps for all Arati for 10 days", amount: 20108 },
      { id: 7, title: "Ghee Lamps for all Arati for 15 days", amount: 30108 },
      { id: 8, title: "Ghee Lamps for all Arati for 20 days", amount: 40108 },
      { id: 9, title: "Ghee Lamps for all Arati for 25 days", amount: 50108 },
      { id: 10, title: "Ghee Lamps for all Arati for 30 days", amount: 60108 },
    ],
  },
];
