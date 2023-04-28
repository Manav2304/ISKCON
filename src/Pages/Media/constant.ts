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
if (window.matchMedia("(min-width: 1024px)").matches) {
  opts.width = "500";
  opts.height = "300";
} else if (window.matchMedia("(min-width: 768px)").matches) {
  opts.width = "400";
  opts.height = "225";
} else {
  opts.width = "100%";
  opts.height = "300";
}
if (window.matchMedia("(max-width: 767px)").matches) {
  opts.width = "100%";
  opts.height = "auto";
} else {
  opts.width = "500";
  opts.height = "300";
}
