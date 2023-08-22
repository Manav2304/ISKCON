import { DonationCategory } from "../Payment/constant";

export const vidyaDaan = [
"Vidyadaan- Gift of Knowledge",
"As we enter the auspicious month of Purushottam. It is during this sacred time that we invite you to sponsor the distribution of the Bhagavad Gita and Bhagavatam to those who cannot afford these invaluable scriptures.",
"Sponsor Bhagavad Gita and Srimad Bhagavatam in the Holy Month of Purushottam & attract special mercy of Lord Krishna",

"🕉️ Lord Sri Krishna said (Padma Purana):",

"“All human beings should perform some devotional service in this Purushottama month by:",

"🙏 Worshiping Me, Sri Krishna, by chanting My holy name",
"📖 Study of Srimad Bhagavatam and Bhagavad-gita, particularly Chapter 15, Purushottama Yoga",
"💰 Giving in charity",
"🪔 Offering ghee diya (lamp) daily",
"As we enter the auspicious month of Purushottam. It is during this sacred time that we invite you to sponsor the distribution of the Bhagavad Gita and Bhagavatam to those who cannot afford these invaluable scriptures. 🙌✨",
"The Bhagavad Gita and Bhagavatam hold within them a treasure trove of timeless wisdom that transcends the boundaries of material existence. They provide a roadmap for navigating life's challenges while fostering a deeper understanding of our purpose and connection to the Lord Krishna. 📚🌺",
"Join us in this noble cause, knowing that your act of donation during the auspicious month of Purushottam can create a ripple effect of positive change in the lives of countless individuals."];

export const options = [
  {
    value: "option1",
    label: "Sponsor Bhagavatam",
    columns: ["Column 1", "Column 2", "Column 3"],
    data: ["Data 1", "Data 2", "Data 3"],
  },
  {
    value: "option2",
    label: "Sponsor Bhagavad Gita",
    columns: ["Column A", "Column B", "Column C"],
    data: ["Data A", "Data B", "Data C"],
  },
  {
    value: "option3",
    label: "General Vidya Daan",
    columns: ["Column A", "Column B", "Column C"],
    data: ["Data A", "Data B", "Data C"],
  },
  // Add more options here
];

export const option2: DonationCategory[] = [
    {
      title: "Sponsor Bhagavad Gita",
      donations: [
        { id: 1, title: "Srimad Bhagavad 11 Sets", amount: 3500 },
        { id: 2, title: "Srimad Bhagavad 21 Sets", amount: 6500 },
        { id: 3, title: "Srimad Bhagavad 51 Sets", amount: 15500 },
        { id: 4, title: "Srimad Bhagavad 101 Sets", amount: 31000 },
        { id: 5, title: "Srimad Bhagavad 201 Sets", amount: 61000 },
        { id: 6, title: "Srimad Bhagavad 351 Sets", amount: 108000 },
      ],
    },
  ];
  

export const option1: DonationCategory[] = [
  {
    title: "Sponsor Bhagavatam",
    donations: [
        { id: 1, title: "Srimad Bhagavatam 1 Set", amount: 11000 },
        { id: 2, title: "Srimad Bhagavatam 2 Sets", amount: 21000 },
        { id: 3, title: "Srimad Bhagavatam 5 Sets", amount: 51000 },
        { id: 4, title: "Srimad Bhagavatam 11 Sets", amount: 111000 },
        { id: 5, title: "Srimad Bhagavatam 21 Sets", amount: 211000 },
      ],
    },
  ];

export const option3: DonationCategory[] = [
  {
    title: "General Vidya Daan",
    donations: [
        { id: 1, title: "Vidya Daan of Rs 1,000", amount: 1000 },
        { id: 2, title: "Vidya Daan of Rs 2,000", amount: 2000 },
        { id: 3, title: "Vidya Daan of Rs 3,000", amount: 3000 },
        { id: 4, title: "Vidya Daan of Rs 5,000", amount: 5000 },
        { id: 5, title: "Vidya Daan of Rs 11,000", amount: 11000 },
      ],
    },
  ];
