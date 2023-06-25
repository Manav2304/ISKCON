// constants.ts

export const server = "https://example.com";
// export const donationCategories: DonationCategory[] = [
//   {
//     title: "AnnaDaan",
//     donations: [
//       { id: 1, title: "Donation 1", amount: 10 },
//       { id: 2, title: "Donation 2", amount: 20 },
//     ],
//   },
//   {
//     title: "Ekadasi",
//     donations: [
//       { id: 3, title: "Donation 3", amount: 30 },
//       { id: 4, title: "Donation 4", amount: 40 },
//     ],
//   },
// ];

export type DonationCategory = {
  title: string;
  donations: Donation[];
};

export type Donation = {
  id: number;
  title: string;
  amount: number;
};
