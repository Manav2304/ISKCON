export type DonationCategory = {
  title: string;
  donations: Donation[];
};

export type Donation = {
  id: number;
  title: string;
  amount: number;
};

export const maintitle = ["Donate through UPI (ISKCON)"];
export const subtitle1 = ["ISKCONVVNAGAR@ICICI "];
export const subtitle2 = [
  "Check your UPI limit with your bank. Max. Limit 1 lac per day",
];

export const yesBankAccountInfo = [
  {
    label: "Account Name:-",
    value: "ISKCON (International Society for Krishna Conciousness)",
  },
  {
    label: "Bank Name:-",
    value: "Yes Bank",
  },
  {
    label: "Branch Name:-",
    value: "Vallabh Vidyanagar Branch",
  },
  {
    label: "Account Number:-",
    value: "019494600000047",
  },
  {
    label: "IFSC Code:-",
    value: "YESB0000194",
  },
];

export const iciciBankAccountInfo = [
  {
    label: "Account Name:-",
    value: "ISKCON (International Society for Krishna Conciousness)",
  },
  {
    label: "Bank Name:-",
    value: "ICICI Bank",
  },
  {
    label: "Branch Name:-",
    value: "Vallabh Vidyanagar Branch",
  },
  {
    label: "Account Number:-",
    value: "008501008973",
  },
  {
    label: "IFSC Code:-",
    value: "ICICI0000085",
  },
];
