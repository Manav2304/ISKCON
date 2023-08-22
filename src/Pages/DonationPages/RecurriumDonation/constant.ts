import { DonationCategory } from "../Payment/constant";

export const recurrium = [
"We provide facilities for recurring donation for monthly contribution.",

"Once you subscribe for it, first transaction will be debited from your account within two working days excluding bank holiday.",

"Then every month amount will be debited from your account based on subscription you have opted for and automatic receipt will be sent on every transaction on your registered email.",

"Now subscribe for recurring donation and free your self from doing transaction every month...",

];

export const options = [
  {
    value: "option1",
    label: "Monthly Anna Daan",
    columns: ["Column 1", "Column 2", "Column 3"],
    data: ["Data 1", "Data 2", "Data 3"],
  },
  {
    value: "option2",
    label: "Monthly Gau Seva",
    columns: ["Column A", "Column B", "Column C"],
    data: ["Data A", "Data B", "Data C"],
  },
  {
    value: "option3",
    label: "Monthly Sadhu Bhojan",
    columns: ["Column A", "Column B", "Column C"],
    data: ["Data A", "Data B", "Data C"],
  },
  {
    value: "option4",
    label: "Monthly Vidya Daan",
    columns: ["Column A", "Column B", "Column C"],
    data: ["Data A", "Data B", "Data C"],
  },
  {
    value: "option5",
    label: "Monthly Youth Preaching Seva",
    columns: ["Column A", "Column B", "Column C"],
    data: ["Data A", "Data B", "Data C"],
  },
  {
    value: "option6",
    label: "Monthly temple support",
    columns: ["Column A", "Column B", "Column C"],
    data: ["Data A", "Data B", "Data C"],
  },

  // Add more options here
];

export const option1: DonationCategory[] = [
    {
        title: "Monthly Anna Daan",
        donations: [
          { id: 1, title: "Donate Monthly Rs 500 for Anna Daan", amount: 500 },
          { id: 2, title: "Donate Monthly Rs 700 for Anna Daan", amount: 700 },
          { id: 3, title: "Donate Monthly Rs 1000 for Anna Daan", amount: 1000 },
          { id: 4, title: "Donate Monthly Rs 2000 for Anna Daan", amount: 2000 },
          { id: 5, title: "Donate Monthly Rs 3000 for Anna Daan", amount: 3000 },
          { id: 6, title: "Donate Monthly Rs 5000 for Anna Daan", amount: 5000 },
          { id: 7, title: "Donate Monthly Rs 10 for Anna Daan", amount: 10 },
        ],
      },
    ];

export const option2: DonationCategory[] = [
    {
        title: "Monthly Gau Seva",
        donations: [
          { id: 1, title: "Donate Monthly Rs 500 for Gau Seva", amount: 500 },
          { id: 2, title: "Donate Monthly Rs 700 for Gau Seva", amount: 700 },
          { id: 3, title: "Donate Monthly Rs 1000 for Gau Seva", amount: 1000 },
          { id: 4, title: "Donate Monthly Rs 2000 for Gau Seva", amount: 2000 },
          { id: 5, title: "Donate Monthly Rs 3000 for Gau Seva", amount: 3000 },
          { id: 6, title: "Donate Monthly Rs 5000 for Gau Seva", amount: 5000 },
        ],
      },
    ];

export const option3: DonationCategory[] = [
    {
        title: "Monthly Sadhu Bhojan",
        donations: [
          { id: 1, title: "Donate Monthly Rs 500 for Sadhu Bhojan", amount: 500 },
          { id: 2, title: "Donate Monthly Rs 700 for Sadhu Bhojan", amount: 700 },
          { id: 3, title: "Donate Monthly Rs 1000 for Sadhu Bhojan", amount: 1000 },
          { id: 4, title: "Donate Monthly Rs 2000 for Sadhu Bhojan", amount: 2000 },
          { id: 5, title: "Donate Monthly Rs 3000 for Sadhu Bhojan", amount: 3000 },
          { id: 6, title: "Donate Monthly Rs 5000 for Sadhu Bhojan", amount: 5000 },
        ],
      },
    ];

export const option4: DonationCategory[] = [
    {
        title: "Monthly Vidya Daan",
        donations: [
            { id: 1, title: "Donate Monthly Rs 500 for Vidya Daan", amount: 500 },
            { id: 2, title: "Donate Monthly Rs 700 for Vidya Daan", amount: 700 },
            { id: 3, title: "Donate Monthly Rs 1000 for Vidya Daan", amount: 1000 },
            { id: 4, title: "Donate Monthly Rs 2000 for Vidya Daan", amount: 2000 },
            { id: 5, title: "Donate Monthly Rs 3000 for Vidya Daan", amount: 3000 },
            { id: 6, title: "Donate Monthly Rs 5000 for Vidya Daan", amount: 5000 },
          ],
    },
      ];

export const option5: DonationCategory[] = [
    {
          title: "Monthly Youth Preaching Seva",
          donations: [
            { id: 1, title: "Donate Monthly Rs 500 for Youth Preaching Seva", amount: 500 },
            { id: 2, title: "Donate Monthly Rs 1000 for Youth Preaching Seva", amount: 1000 },
            { id: 3, title: "Donate Monthly Rs 2000 for Youth Preaching Seva", amount: 2000 },
            { id: 4, title: "Donate Monthly Rs 3000 for Youth Preaching Seva", amount: 3000 },
            { id: 5, title: "Donate Monthly Rs 4000 for Youth Preaching Seva", amount: 4000 },
            { id: 6, title: "Donate Monthly Rs 5000 for Youth Preaching Seva", amount: 5000 },
          ],
        },
      ];

      export const option6: DonationCategory[] = [
        {
          title: "Monthly Temple Support",
          donations: [
            { id: 1, title: "Donate Monthly Rs 500 for Temple Support", amount: 500 },
            { id: 2, title: "Donate Monthly Rs 800 for Temple Support", amount: 800 },
            { id: 3, title: "Donate Monthly Rs 1000 for Temple Support", amount: 1000 },
            { id: 4, title: "Donate Monthly Rs 2000 for Temple Support", amount: 2000 },
            { id: 5, title: "Donate Monthly Rs 3000 for Temple Support", amount: 3000 },
            { id: 6, title: "Donate Monthly Rs 5000 for Temple Support", amount: 5000 },
          ],
        },
      ];
      