import { RouteProps } from "react-router-dom";
import { FestivalPage } from "./Pages/Festival";
import { Contact } from "./Pages/Contact";
import Home from "./Pages/Home";

export type MyRoute = RouteProps & {
  path: string;
  component: React.FunctionComponent<any>;
}

export const routes: MyRoute[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/Festival",
    component: FestivalPage ,
  },
  {
    path: "/Contact",
    component: Contact,
  },
];
