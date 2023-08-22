// export const server = "https://example.com";

export type DonationCategory = {
  title: string;
  donations: Donation[];
};

export type Donation = {
  id: number;
  title: string;
  amount: number;
};
