import { routes } from "../../../routes";
import { goushalImages } from "../../VisitUs/constant";
import { devoteeKitchenImages } from "../../Services/DevoteeKitchen/constant";
import { philosophies } from "../../Home/constant";
import { guestHouse } from "../../Contact/constant";

export const paragraphs = [
   "As said in Bhagavad Gita 18.5- acts of sacrifice, charity and penance are not to be given up; they must be performed. Indeed, sacrifice, charity and penance purify even the great souls.",
];

export const donationItems = [
  {
    title: "Gau Seva",
    image: goushalImages[0].image,
    route: routes.gaushala,
  },
  {
    title: "Anna Daan",
    image: devoteeKitchenImages[0].image,
    route: routes.annaDaan,
  },
  {
    title: "Ekadasi",
    image: philosophies[0],
    route: routes.ekadasi,
  },
  {
    title: "Gaura Purnima",
    image: guestHouse[0],
    route: routes.gauraPurnima,
  },
  {
    title: "Hari Naam Kirtan Seva",
    image: guestHouse[0],
    route: routes.hariNaamKirtanSeva,
  },
  {
    title: "Naivaidyam Seva",
    image: guestHouse[0],
    route: routes.naivaidyamSeva,
  },
  {
    title: "Vaishnav Bhojan",
    image: guestHouse[0],
    route: routes.vaishnavBhojan,
  },
  {
    title: "Vigrah Seva",
    image: guestHouse[0],
    route: routes.gauraPurnima,
  },
];
