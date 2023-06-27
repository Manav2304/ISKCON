export const getOptsForYoutube = () => {
  // Check screen size and set width and height accordingly
  if (window.matchMedia("(min-width: 2560px)").matches) {
    return { width: "1000px", height: "550px" };
  } else if (window.matchMedia("(min-width: 1440px)").matches) {
    return { width: "600px", height: "400px" };
  } else if (window.matchMedia("(min-width: 1024px)").matches) {
    return { width: "500px", height: "300px" };
  } else if (window.matchMedia("(min-width: 768px)").matches) {
    return { width: "350px", height: "225px" };
  } else if (window.matchMedia("(min-width: 425px)").matches) {
    return { width: "400px", height: "400px" };
  } else if (window.matchMedia("(min-width: 375px)").matches) {
    return { width: "350px", height: "400px" };
  } else if (window.matchMedia("(min-width: 320px)").matches) {
    return { width: "300px", height: "300px" };
  } else if (window.matchMedia("(min-width: 100px)").matches) {
    return { width: "250px", height: "150px" };
  } else {
    return { width: "500px", height: "300px" };
  }
};
