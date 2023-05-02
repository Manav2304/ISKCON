import sringar1 from "../../assets/DailyDarshan/yesterday-darshan1.jpg";
import sringar2 from "../../assets/DailyDarshan/yesterday-darshan2.jpg";
import sringar3 from "../../assets/DailyDarshan/yesterday-darshan3.jpg";
import sringar4 from "../../assets/DailyDarshan/yesterday-darshan4.jpg";
import darshan1 from "../../assets/DailyDarshan/today-darshan1.jpg";
import darshan2 from "../../assets/DailyDarshan/today-darshan2.jpg";
import darshan3 from "../../assets/DailyDarshan/today-darshan3.jpg";
import darshan4 from "../../assets/DailyDarshan/today-darshan4.jpg";

export const SringarTitle = "Yesterday's Darshan";
export const darshanTitle = "Today's Darshan ";

export const yesterdayDarshanImages = [
  {
    id: 1,
    image: sringar1,
  },
  {
    id: 2,
    image: sringar2,
  },
  {
    id: 3,
    image: sringar3,
  },
  {
    id: 4,
    image: sringar4,
  },
];

export const todayDarshanImages = [
  {
    id: 1,
    image: darshan1,
  },
  {
    id: 2,
    image: darshan2,
  },
  {
    id: 3,
    image: darshan3,
  },
  {
    id: 4,
    image: darshan4,
  },
];

export const opts = {
  height: "auto",
  width: "auto",

  playerVars: {
    autoplay: 0,
  },
};

// Check screen size and set width and height accordingly
if (window.matchMedia("(min-width: 2560px)").matches) {
  opts.width = "1000px";
  opts.height = "550px";
} else if (window.matchMedia("(min-width: 1440px)").matches) {
  opts.width = "600px";
  opts.height = "400px";
} else if (window.matchMedia("(min-width: 1024px)").matches) {
  opts.width = "500px";
  opts.height = "300px";
} else if (window.matchMedia("(min-width: 768px)").matches) {
  opts.width = "350px";
  opts.height = "225px";
} else if (window.matchMedia("(min-width: 425px)").matches) {
  opts.width = "400px";
  opts.height = "400px";
} else if (window.matchMedia("(min-width: 375px)").matches) {
  opts.width = "350px";
  opts.height = "400px";
} else if (window.matchMedia("(min-width: 320px)").matches) {
  opts.width = "300px";
  opts.height = "300px";
} else if (window.matchMedia("(min-width: 100px)").matches) {
  opts.width = "250px";
  opts.height = "150px";
} else {
  opts.width = "500px";
  opts.height = "300px";
}
