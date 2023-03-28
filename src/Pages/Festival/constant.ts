import Janmashtami from "../../assets/image/Janmashtami.jpg";
import RathYatra from "../../assets/image/Rath Yatra.jpg";
import Holi from "../../assets/image/Holi.jpg";
import Radhashtami from "../../assets/image/Radhashtami.jpg";
import GovardhanPuja from "../../assets/image/Govardhan Puja.jpg";
import KartikDipawali from "../../assets/image/Kartik Dipawali.jpg";
import TitleBase from "../../assets/image/TitleBase.png";
import { Festival } from "./types";

export { TitleBase };

export const festivals: Festival[] = [
  {
    name: "Janmashtami",
    date: "September 7, 2023",
    description:
      "Janmashtami, the birthday of Lord Krishna, is one of the most important festivals celebrated at the temple. The entire temple is adorned with vibrant decorations and fragrant flowers, and the atmosphere is electric with the sound of joyous kirtan and the chanting of the holy names. Devotees engage in special prayers and devotional activities, such as the abhishekam (ritual bathing) of the deity, and offer bhog (food offerings) to the Lord. The festival culminates in a grand feast, which is distributed to all those who have gathered to celebrate the occasion.",
    image: Janmashtami,
  },
  {
    name: "Rath Yatra",
    date: "Jun 20, 2023",
    description:
      "Ratha Yatra is a Hindu festival that celebrates the journey of Lord Jagannath, his brother Balabhadra, and sister Subhadra from their temple to their aunt's temple. It is celebrated with great pomp and show at ISKCON temples around the world.",
    image: RathYatra,
  },
  {
    name: "Holi",
    date: "March 25, 2024",
    description:
      "Holi, the festival of colors, is another much-awaited festival at ISKCON Vallabh Vidya Nagar. The temple grounds are transformed into a kaleidoscope of colors, as devotees throw colored powders and water at each other in a spirit of love and unity. Joyful kirtan and dance performances take place throughout the day, and the atmosphere is charged with positive energy and enthusiasm.",
    image: Holi,
  },
  {
    name: "Radhashtami",
    date: "September 23, 2023",
    description:
      "Radhashtami, another important festival celebrated at ISKCON Vallabh Vidya Nagar, is dedicated to the worship of Radha, the consort of Lord Krishna. The temple is transformed into a veritable wonderland, with an array of flowers, lights, and other decorations, all in honor of Radha. Devotees engage in joyful kirtan and dance performances, and offer bhog to Radha. The festival is a celebration of love and devotion, and is a beautiful reminder of the eternal bond between Radha and Krishna. ",
    image: Radhashtami,
  },
  {
    name: "Govardhan Puja",
    date: "November 13, 2023",
    description:
      "Govardhan Puja is a Hindu festival that celebrates the pastime of Lord Krishna lifting Govardhan Hill to protect the residents of Vrindavan from the wrath of Lord Indra. It is celebrated with great joy at ISKCON temples around the world.",
    image: GovardhanPuja,
  },
  {
    name: "Kartik Dipawali",
    date: "November 12, 2023",
    description:
      "Diwali, the festival of lights, is celebrated with great gusto at ISKCON Vallabh Vidya Nagar. The temple is illuminated with countless diyas (oil lamps), and the air is filled with the fragrance of incense and flowers. Devotees engage in special prayers and rituals, and offer bhog to the deity. The festival is a celebration of the victory of light over darkness, and is a beautiful reminder of the eternal wisdom and grace of Lord Krishna.",
    image: KartikDipawali,
  },
];
