interface Festival {
  name: string;
  date: string;
  description: string;
  image: string;
}


import img1 from "../../image/img1.jpg";
import img2 from "../../image/img2.jpg";
export const festivals: Festival[] = [
  {
    
    name: "Janmashtami",
    date: "August 19, 2022",
    description:
      "Janmashtami is a Hindu festival that celebrates the birth of Lord Krishna. It is one of the biggest festivals celebrated at ISKCON temples around the world.",
    image: img1
    
  },
  {
    name: "Ratha Yatra",
    date: "July 1, 2022",
    description:
      "Ratha Yatra is a Hindu festival that celebrates the journey of Lord Jagannath, his brother Balabhadra, and sister Subhadra from their temple to their aunt's temple. It is celebrated with great pomp and show at ISKCON temples around the world.",
    image: img2
  },
  
  

];
